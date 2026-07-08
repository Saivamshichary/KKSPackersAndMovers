export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Ravi S.',
      rating: 5,
      text: '"Smooth and hassle-free move! Highly recommend."',
      image: '👨',
    },
    {
      id: 2,
      name: 'Anita M.',
      rating: 5,
      text: '"Great service! My car was transported safely and on time."',
      image: '👩',
    },
    {
      id: 3,
      name: 'Priya K.',
      rating: 5,
      text: '"Professional team, excellent packing quality. Very satisfied!"',
      image: '👩‍🦰',
    },
    {
      id: 4,
      name: 'Vikram P.',
      rating: 5,
      text: '"Best moving company in the city. Highly professional!"',
      image: '👨‍💼',
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Customer Testimonials</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-5xl mb-4">{testimonial.image}</div>
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
