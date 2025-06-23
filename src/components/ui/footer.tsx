import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-6 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm">
        <p className="mb-2">&copy; {new Date().getFullYear()} Scenery Studios. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <Link href="/privacy-policy" className="hover:text-white transition-colors duration-200">
            Privacy Policy
          </Link>
          <span className="text-gray-600">|</span>
          <Link href="/terms-of-service" className="hover:text-white transition-colors duration-200">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}; 