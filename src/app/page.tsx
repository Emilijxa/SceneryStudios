'use client';
import Link from 'next/link';
import ChatInterface from '../components/ChatInterface';
import { useRef } from 'react';

// Images provided by the user
const portfolioImages = Array.from({ length: 12 }, (_, i) => `/portfolio${i + 1}.jpg`);

export default function Home() {
  const galleryRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      {/* Hero Section - Full Bleed, Editorial, with New Background */}
      <section className="relative flex flex-col items-center justify-center min-h-[75vh] px-4 text-center bg-black overflow-hidden">
        {/* New hero background image, faded and blurred for premium look */}
        <div
          className="absolute inset-0 w-full h-full z-0 hero-bg"
          style={{
            backgroundImage: `url('/pic.jpg'), url('/profile.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 10%',
            opacity: 0.8,
            filter: 'blur(4px) scale(1.02)',
          }}
        />
        {/* Radial vignette overlay to darken edges and keep center clear */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at 50% 55%, rgba(0,0,0,0) 38%, rgba(0,0,0,0.85) 100%),
              linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)
            `,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center py-24">
          <div className="relative flex items-center justify-center mb-8 animate-fade-in">
            {/* Top-left and bottom-right open triangles */}
            <svg className="absolute -top-4 -left-6 w-8 h-8 text-yellow-600" viewBox="0 0 32 32" fill="none">
              <polyline points="32,0 0,0 0,32" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
            </svg>
            <h1 className="text-6xl md:text-7xl font-serif font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-800 bg-clip-text text-transparent drop-shadow-lg tracking-tight px-4">
              Scenery Studios
            </h1>
            <svg className="absolute -bottom-4 -right-6 w-8 h-8 text-yellow-600" viewBox="0 0 32 32" fill="none">
              <polyline points="0,32 32,32 32,0" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-2xl md:text-3xl text-gray-200 mb-8 font-light drop-shadow animate-fade-in delay-200">Editorial & Creative Photography in Coventry, Birmingham, London</p>
          <Link href="/booking">
            <button className="bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-4 px-10 rounded-xl text-xl shadow-lg transition uppercase tracking-wider animate-fade-in delay-300">Book a 15min Call</button>
          </Link>
        </div>
      </section>

      {/* Section Transition */}
      <div className="w-full h-16 bg-gradient-to-b from-transparent to-black/90 animate-fade-in delay-500" />

      {/* Horizontal Scrollable Gallery - Recent Work */}
      <section className="w-full py-20 px-0 md:px-8 bg-black animate-slide-up">
        <h2 className="text-3xl font-serif font-bold mb-8 text-center tracking-tight text-yellow-600">Recent Work</h2>
        <div
          ref={galleryRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-4 px-4 md:px-0"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {portfolioImages.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[80vw] md:w-[32vw] max-w-xl aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-900 bg-gray-900 snap-center group relative transition-all duration-700"
              style={{ boxShadow: '0 0 80px 0 rgba(0,0,0,0.7), 0 8px 40px 0 rgba(0,0,0,0.45)' }}
            >
              <img
                src={src}
                alt={`Portfolio sample ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50 pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

      {/* Footer - Minimal, Gold Accents, No Copyright */}
      <footer className="mt-auto py-8 bg-black/95 border-t border-gray-900 flex flex-col items-center gap-4 animate-fade-in delay-700">
        <div className="flex items-center gap-8 text-yellow-600 text-lg">
          <a href="mailto:scenerystudiosuk@gmail.com" className="flex items-center gap-2 hover:text-yellow-400 transition" aria-label="Email">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="1.5" d="M3 7.5V17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7.5m-18 0A2 2 0 0 1 5 5.5h14a2 2 0 0 1 2 2m-18 0 9 6.5 9-6.5"/></svg>
            <span className="hidden sm:inline">scenerystudiosuk@gmail.com</span>
          </a>
          <a href="tel:+447575099027" className="flex items-center gap-2 hover:text-yellow-400 transition" aria-label="Phone">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="1.5" d="M4 4h5l2 5-3 2c1.5 3 4.5 6 7.5 7.5l2-3 5 2v5a2 2 0 0 1-2 2C7.5 22 2 16.5 2 6a2 2 0 0 1 2-2Z"/></svg>
            <span className="hidden sm:inline">+44 (0) 7575099027</span>
          </a>
        </div>
      </footer>

      {/* Floating Chatbot */}
      <ChatInterface />

      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: none; } }
        @keyframes underline { from { width: 0; } to { width: 8rem; } }
        .animate-fade-in { animation: fade-in 1s ease both; }
        .animate-slide-up { animation: slide-up 1.2s cubic-bezier(.4,0,.2,1) both; }
        .animate-underline { animation: underline 1.2s cubic-bezier(.4,0,.2,1) both; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
        /* Responsive hero background image adjustments */
        @media (min-width: 768px) {
          .hero-bg {
            filter: blur(3px) scale(1.01) !important;
            background-position: center 25% !important;
          }
        }
        @media (min-width: 1280px) {
          .hero-bg {
            filter: blur(2px) scale(1) !important;
            background-position: center 25% !important;
          }
        }
      `}</style>
    </div>
  );
}
