'use client';

import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/deepseek', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          model: 'gemini-2.0-flash',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';

      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        assistantMessage += chunk;
        setMessages(prev => {
          const newMessages = [...prev];
          const lastMessage = newMessages[newMessages.length - 1];
          if (lastMessage && lastMessage.role === 'assistant') {
            lastMessage.content = assistantMessage;
          } else {
            newMessages.push({ role: 'assistant', content: assistantMessage });
          }
          return newMessages;
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Responsive chat window size
  const chatWindowClass =
    'fixed bottom-6 right-6 z-50 ' +
    (open
      ? 'w-full max-w-md sm:max-w-sm md:max-w-md lg:max-w-md h-[70vh] sm:h-[32rem] md:h-[32rem] bg-black/95 border border-gray-800 rounded-2xl shadow-2xl flex flex-col'
      : '');

  return (
    <>
      {/* Chat Bubble/Button */}
      {!open && (
        <button
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-yellow-400 via-yellow-600 to-yellow-800 text-black rounded-full shadow-lg p-4 flex items-center justify-center hover:scale-105 transition-all focus:outline-none"
          style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.25)' }}
          aria-label="Open Customer Assistant"
          onClick={() => setOpen(true)}
        >
          <MessageCircle className="w-7 h-7" color="black" />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className={chatWindowClass} style={{ minWidth: 320 }}>
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-black/90 rounded-t-2xl">
            <span className="font-semibold text-white text-base">Customer Assistant</span>
            <button
              className="text-gray-400 hover:text-white p-1 rounded transition"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && null}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-gradient-to-br from-gray-800/80 to-gray-700/60 text-gray-100 border border-gray-600/50 backdrop-blur-sm'
                  }`}
                >
                  <div className="whitespace-pre-wrap leading-relaxed">{message.content}</div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/60 text-gray-100 rounded-2xl px-4 py-3 border border-gray-600/50 backdrop-blur-sm">
                  <div className="flex space-x-2 items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <span className="text-sm ml-2">AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700/50 bg-black/90 rounded-b-2xl">
            <div className="flex space-x-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 bg-[#18140c]/80 border border-yellow-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500/40 focus:border-yellow-500 text-yellow-100 placeholder-yellow-300 backdrop-blur-sm transition-all duration-300 font-sans"
                disabled={isLoading}
                autoFocus
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-6 py-3 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-800 text-black rounded-xl font-bold uppercase tracking-wider hover:from-yellow-400 hover:to-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl font-sans"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
} 