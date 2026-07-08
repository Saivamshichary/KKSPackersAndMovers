import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
  const services = [
    {
      id: 1,
      icon: '🏠',
      title: 'Home Shifting',
      description: 'We provide comprehensive home shifting services with complete care and safety for your household belongings. Our experienced team ensures your move is smooth and stress-free.',
      features: ['Professional packing', 'Safe transportation', 'Unpacking service', 'Temporary storage available'],
    },
    {
      id: 2,
      icon: '🏢',
      title: 'Office Relocation',
      description: 'Specialized office relocation services designed to minimize downtime and ensure business continuity. We handle everything from planning to execution.',
      features: ['Minimal business disruption', 'IT equipment handling', 'Quick installation', 'Post-move support'],
    },
    {
      id: 3,
      icon: '🚗',
      title: 'Vehicle Transport',
      description: 'Safe and insured vehicle transportation across the country. Our professional drivers and equipment ensure your vehicles arrive in perfect condition.',
      features: ['Insurance coverage', 'Real-time tracking', 'Professional drivers', 'Specialized vehicles'],
    },
    {
      id: 4,
      icon: '📦',
      title: 'Storage Solutions',
      description: 'Secure climate-controlled storage facilities for short-term or long-term storage needs. Perfect for temporary transitions or additional space requirements.',
      features: ['24/7 security', 'Climate controlled', 'Easy access', 'Flexible duration'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-300">Complete relocation and moving solutions for all your needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-50 rounded-lg p-8">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-3">Key Features:</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="text-orange-500 mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to move?</h2>
          <p className="mb-6 text-lg">Get a free quote and let us handle your relocation</p>
          <button className="bg-white text-orange-500 px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors">
            Get Free Quote
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
