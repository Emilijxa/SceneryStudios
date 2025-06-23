export default function ServicesList() {
  const services = [
    'Street Portraits',
    'Birthday Portraits',
    'Graduation Portraits',
    'Pre-Wedding Portraits',
    'Family Portraits',
    'Model Photoshoots',
    'Events',
    'Product Photography',
    'Landscape Photography',
  ];
  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service} className="bg-gray-900/80 rounded-xl p-6 text-white text-center shadow hover:scale-105 transition">
            {service}
          </div>
        ))}
      </div>
    </section>
  );
} 