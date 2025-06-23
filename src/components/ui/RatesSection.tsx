export default function RatesSection() {
  return (
    <section className="w-full max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">Rates</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        <div className="bg-gray-900/80 rounded-xl p-8 text-white text-center shadow flex-1">
          <h3 className="text-xl font-bold mb-2">Portrait Session</h3>
          <div className="text-3xl font-bold mb-2">£99</div>
          <div className="text-gray-400 mb-4">Up to 1 hour, 1 location, 10 edited photos</div>
        </div>
        <div className="bg-gray-900/80 rounded-xl p-8 text-white text-center shadow flex-1">
          <h3 className="text-xl font-bold mb-2">Event Coverage</h3>
          <div className="text-3xl font-bold mb-2">£199</div>
          <div className="text-gray-400 mb-4">Up to 3 hours, candid & group shots, all best images</div>
        </div>
        <div className="bg-gray-900/80 rounded-xl p-8 text-white text-center shadow flex-1">
          <h3 className="text-xl font-bold mb-2">Product/Brand</h3>
          <div className="text-3xl font-bold mb-2">from £79</div>
          <div className="text-gray-400 mb-4">Studio or on-location, 5+ edited images</div>
        </div>
      </div>
      <div className="text-gray-500 text-sm mt-8 text-center">Contact for custom packages or commercial rates.</div>
    </section>
  );
} 