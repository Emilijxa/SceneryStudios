import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/ui/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AI Development Assistant - Store and Manage Your AI Prompts',
  description: 'A powerful AI-powered development assistant with authentication.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider dynamic>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} min-h-screen flex flex-col`}>
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}