export default function Hero() {
  return (
    <section className="bg-black text-white min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
      <img
        src="/photographer.jpg" // Replace with actual image path
        alt="Photographer"
        className="w-40 h-40 rounded-full object-cover border-4 border-gray-800 shadow-lg mb-6"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-2">Scenery Studios</h1>
      <p className="text-lg md:text-xl text-gray-300 mb-2">
        Photographer in Coventry/Birmingham/London
      </p>
      <p className="text-base text-gray-400 mb-6">
        Travel Photographer, Videographer & Content Creator. Food Influencer. Social Media Manager.
      </p>
      <a
        href="#booking"
        className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-200 transition"
      >
        Book a 15min Planning Call
      </a>
      <div className="flex gap-4 mt-6">
        <a href="https://www.instagram.com/scenery_studios_/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">Instagram</a>
        <a href="mailto:scenerystudiosuk@gmail.com" className="text-gray-400 hover:text-white transition">Email</a>
      </div>
      <div className="text-gray-500 text-sm mt-4">97.2k followers on Instagram · 1,410+ shoots</div>
    </section>
  );
} 