export default function Services() {
  const services = [
    {
      id: 1,
      icon: '🏠',
      title: 'Home Shifting',
      description: 'Careful and secure packing and moving of your household items to your new residence.',
    },
    {
      id: 2,
      icon: '🏢',
      title: 'Office Relocation',
      description: 'Professional office relocation services ensuring minimal downtime for your business.',
    },
    {
      id: 3,
      icon: '🚗',
      title: 'Vehicle Transport',
      description: 'Safe and reliable transportation of your vehicles across the country.',
    },
    {
      id: 4,
      icon: '📦',
      title: 'Storage Solutions',
      description: 'Secure and climate-controlled storage facilities for your belongings.',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="service-card group">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
