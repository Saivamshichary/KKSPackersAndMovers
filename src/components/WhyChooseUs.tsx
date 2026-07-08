export default function WhyChooseUs() {
  const reasons = [
    {
      id: 1,
      icon: '👨‍💼',
      title: 'Experienced Team',
      description: 'Over 20 years of expertise in the moving and packing industry.',
    },
    {
      id: 2,
      icon: '🔒',
      title: 'Safe & Secure Packing',
      description: 'Using premium materials and modern techniques to protect your valuables.',
    },
    {
      id: 3,
      icon: '⏰',
      title: 'Timely Delivery',
      description: 'Guaranteed on-time delivery with real-time tracking updates.',
    },
    {
      id: 4,
      icon: '💰',
      title: 'Affordable Pricing',
      description: 'Competitive rates with transparent pricing, no hidden charges.',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Why Choose KKS Packers?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div key={reason.id} className="text-center">
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
