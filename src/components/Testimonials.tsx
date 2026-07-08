export default function Testimonials() {
  const testimonials = [
  {
    id: 1,
    name: "Ramesh Kumar",
    location: "Velachery → Anna Nagar",
    rating: 5,
    text: "Shifted our 2BHK from Velachery to Anna Nagar. The packing team was punctual, handled everything carefully, and delivered all items without any damage. Highly satisfied with the service.",
  },
  {
    id: 2,
    name: "Priya Narayanan",
    location: "Tambaram → Porur",
    rating: 5,
    text: "Excellent packing and timely delivery. The staff were polite, professional, and completed the move much faster than expected. I would definitely recommend them.",
  },
  {
    id: 3,
    name: "Suresh Babu",
    location: "OMR → Medavakkam",
    rating: 5,
    text: "Used their bike and household shifting service. Everything arrived safely, and the live tracking updates gave me complete peace of mind throughout the move.",
  },
  {
    id: 4,
    name: "Lakshmi Devi",
    location: "T. Nagar → Adyar",
    rating: 5,
    text: "Very transparent pricing with no hidden charges. The movers packed fragile items carefully and completed the relocation exactly on schedule.",
  },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Customer Testimonials</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 rounded-full font-bold bg-red-50 border-2 border-red-200 text-red-700 flex items-center justify-center text-lg mb-4">{testimonial.name.split(' ')[0].charAt(0).concat(testimonial.name.split(' ')[1].charAt(0))}</div>
              <h3 className="font-bold text-gray-900 mb-2">{testimonial.name}</h3>        
              <div className="flex justify-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
