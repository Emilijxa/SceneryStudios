'use client';

import React, { useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
// import { type Options } from 'react-markdown'; // Import type Options if needed

import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

// Optional - useful for props later
type MarkdownProps = {
  children: string;
};

const MarkdownRenderer = ({ children }: MarkdownProps) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw, rehypeSanitize]}
    components={{
      h1: ({ ...props }) => <h1 className="text-3xl font-bold mt-6 mb-4 border-b border-primary/20 pb-2" {...props} />,
      h2: ({ ...props }) => <h2 className="text-2xl font-semibold mt-5 mb-3" {...props} />,
      h3: ({ ...props }) => <h3 className="text-xl font-medium mt-4 mb-2" {...props} />,
      p: ({ ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
      strong: ({ ...props }) => <strong className="font-bold text-primary" {...props} />,
      em: ({ ...props }) => <em className="italic" {...props} />,
      ul: ({ ...props }) => <ul className="list-disc list-inside space-y-1 mb-4" {...props} />,
      ol: ({ ...props }) => <ol className="list-decimal list-inside space-y-1 mb-4" {...props} />,
      li: ({ ...props }) => <li className="" {...props} />,
      a: ({ ...props }) => <a className="text-blue-400 hover:underline" {...props} />,
      code: ({ ...props }) => <code className="bg-gray-700 text-white px-1 py-0.5 rounded text-sm" {...props} />,
      pre: ({ ...props }) => <pre className="bg-gray-800 text-white p-3 rounded overflow-x-auto my-4 text-sm" {...props} />,
    }}
  >
    {children}
  </ReactMarkdown>
);

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatInterfaceProps {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

export default function ChatInterface({
  messages,
  setMessages,
  input,
  setInput,
  isLoading,
  setIsLoading,
  error,
  setError,
  handleSubmit,
}: ChatInterfaceProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom when messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messages]);

  // Scroll to booking form
  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-md">
      <div className="bg-black/95 border border-gray-800 rounded-2xl shadow-2xl p-4 space-y-4">
        {/* Messages Container */}
        <div
          className="rounded-lg p-4 min-h-[300px] max-h-[400px] overflow-y-auto bg-black/80 border border-gray-800 space-y-4"
          ref={messagesEndRef}
        >
          {messages.filter(m => m.role !== 'system').map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} items-start`}
            >
              <div
                className={`max-w-[80%] rounded-xl p-3 text-left ${message.role === 'user'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-800 text-gray-200'
                } shadow`}
                style={{ alignSelf: 'flex-start' }}
              >
                <MarkdownRenderer>{message.content}</MarkdownRenderer>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-800 text-gray-200 rounded-xl p-3 shadow">
                Thinking...
              </div>
            </div>
          )}
          {error && (
            <div className="text-red-500 text-sm text-center">
              {error}
            </div>
          )}
        </div>

        {/* Booking Prompt Button */}
        <button
          onClick={scrollToBooking}
          className="w-full bg-white text-black py-2 rounded-xl font-semibold mt-2 hover:bg-gray-200 transition shadow"
        >
          Book a 15min Planning Call
        </button>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-lg px-4 py-2 bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-6 py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
} 