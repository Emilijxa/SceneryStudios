export default function PortfolioGrid() {
  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <img src="/portfolio1.jpg" alt="Portfolio 1" className="rounded-xl object-cover w-full h-80 shadow-lg" />
        <img src="/portfolio2.jpg" alt="Portfolio 2" className="rounded-xl object-cover w-full h-80 shadow-lg" />
        <img src="/portfolio3.jpg" alt="Portfolio 3" className="rounded-xl object-cover w-full h-80 shadow-lg" />
      </div>
      <div className="flex justify-center mt-8">
        <a href="#" className="text-gray-400 hover:text-white underline">See More</a>
      </div>
    </section>
  );
} 