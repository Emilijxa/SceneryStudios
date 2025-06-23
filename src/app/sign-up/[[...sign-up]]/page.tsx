import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="bg-black text-white relative h-screen flex flex-col items-center justify-center">
      {/* Static Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern - Static */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Gradient Orbs - Static */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-lg mx-auto px-4 flex flex-col items-center justify-center h-full">
        {/* <h1 className="text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
          Join the Future
        </h1> */}

        <div className="relative w-full max-w-md">
          {/* Glow effect behind the form */}
          
          <SignUp 
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "bg-gray-900/70 border border-gray-700/30 rounded-2xl p-8 shadow-2xl text-white",
                headerTitle: "text-white text-4xl font-bold mb-4",
                headerSubtitle: "hidden",
                socialButtonsBlockButton: "bg-gray-800/50 border border-gray-600/50 text-white hover:bg-gray-700/50 transition-all duration-300 rounded-xl py-4 px-6 mb-4",
                socialButtonsBlockButtonText: "text-white font-medium text-lg",
                dividerLine: "bg-gray-600/50",
                dividerText: "text-gray-400 text-base my-4",
                formButtonPrimary: "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 mt-4",
                formFieldInput: "bg-gray-800/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20 rounded-xl transition-all duration-300 py-4 px-5 text-lg",
                formFieldLabel: "text-gray-300 font-medium mb-2 text-base",
                footerActionLink: "text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-base mt-4",
                footerActionText: "text-gray-400 text-base",
                identityPreviewText: "text-white text-base",
                identityPreviewEditButton: "text-cyan-400 hover:text-cyan-300 text-base",
                formResendCodeLink: "text-cyan-400 hover:text-cyan-300 text-base",
                otpCodeFieldInput: "bg-gray-800/50 border border-gray-600/50 text-white focus:border-cyan-500 focus:ring-cyan-500/20 rounded-xl text-lg",
                alertText: "text-red-400 text-base",
                alert: "bg-red-900/20 border border-red-500/30 text-red-400 rounded-xl p-2",
                footer: "hidden"
              },
              layout: {
                socialButtonsPlacement: "bottom",
                logoImageUrl: "/path/to/your/logo.png"
              }
            }}
          />
        </div>

        {/* Additional floating elements */}
        <div className="absolute top-20 left-10 w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-10 right-10 w-1 h-1 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
} 