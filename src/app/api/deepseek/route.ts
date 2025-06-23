import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

// Log the first few characters of the API key to verify it's loaded (but not the full key for security)
const apiKey = process.env.GEMINI_API_KEY || '';
console.log('API Key loaded:', apiKey ? `${apiKey.substring(0, 4)}...${apiKey.substring(apiKey.length - 4)}` : 'Not found');

// Initialize Gemini client exactly as shown in the documentation
const genAI = new GoogleGenAI({ apiKey });

export async function POST(req: Request) {
    try {
        // Parse the request body for the actual chat request
        const body = await req.json();
        const { messages } = body;

        // Validate request
        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json(
                { error: 'Messages array is required' },
                { status: 400 }
            );
        }

        // Convert messages to the format expected by Gemini, filtering out system messages
        // and adding an initial instruction for conciseness and markdown formatting.
        const instruction: { role: 'user', parts: { text: string }[] } = { 
            role: 'user',
            parts: [{ text: 'Please provide concise answers, avoid repeating information, and format your responses using Markdown, including paragraphs, headings, bold text, italics, lists, and code blocks where appropriate. Do not explicitly mention that you are using Markdown in your response.' }]
        };

        const contents = [instruction, ...messages
            .filter((msg: { role: string }) => msg.role !== 'system') // Filter out system messages
            .map((msg: { role: string; content: string }) => ({
                role: msg.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: msg.content }]
            }))];

        // Generate content with the chat history
        const result = await genAI.models.generateContentStream({
            model: "gemini-2.0-flash",
            contents
        });

        // Create a readable stream from the Gemini response stream
        const encoder = new TextEncoder();
        const customReadable = new ReadableStream({
            async start(controller) {
              for await (const chunk of result) {
                if (chunk.text) {
                  controller.enqueue(encoder.encode(chunk.text));
                }
              }
              controller.close();
            },
          });

        // Return the response as a stream
        return new Response(customReadable, {
            headers: { 'Content-Type': 'text/plain' },
        });

    } catch (error: unknown) {
        console.error('Gemini API Error:', error);
        
        const errorMessage = error instanceof Error ? error.message : 'An error occurred while processing your request';
        const statusCode = error instanceof Error && 'status' in error ? (error as { status?: number }).status : 500;
        
        return NextResponse.json(
            { 
                error: errorMessage,
                status: statusCode
            },
            { status: statusCode }
        );
    }
}