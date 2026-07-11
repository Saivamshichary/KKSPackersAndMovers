

export default function About() {
  return (
<section id="aboutus" className="py-16 md:py-24 bg-white">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="section-title">About Ramajayam Packers & Movers</h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        With over 20 years of experience, Ramajayam Packers & Movers has earned the
        trust of thousands of families and businesses by delivering safe,
        reliable, and affordable relocation services across Chennai and India.
      </p>
    </div>

    <div className="space-y-6 text-lg leading-8 text-gray-600">
      <p>
        At Ramajayam Packers & Movers, we understand that moving is more than just
        transporting belongings—it's about relocating your memories and valuable
        possessions with care. Our experienced professionals ensure every item
        is packed, handled, and delivered safely to its destination.
      </p>

      <p>
        From local home shifting and office relocation to vehicle transportation
        and interstate moving, we offer complete packing and moving solutions
        tailored to your requirements. Using quality packing materials and
        modern handling techniques, we strive to provide a hassle-free moving
        experience for every customer.
      </p>

      <p>
        Customer satisfaction is at the heart of everything we do. Our commitment
        to transparency, punctuality, affordable pricing, and professional
        service has helped us become one of the trusted names in the relocation
        industry.
      </p>
    </div>

    {/* Mission, Vision & Values */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      <div className="bg-gray-50 rounded-xl p-8 text-center shadow-sm">
        <div className="text-5xl mb-4">🎯</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Our Mission
        </h3>
        <p className="text-gray-600">
          To provide safe, reliable, and affordable relocation services while
          ensuring complete customer satisfaction.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 text-center shadow-sm">
        <div className="text-5xl mb-4">🚚</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Our Vision
        </h3>
        <p className="text-gray-600">
          To become the most trusted and preferred packers and movers company
          through quality service and long-term customer relationships.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 text-center shadow-sm">
        <div className="text-5xl mb-4">🤝</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Our Values
        </h3>
        <p className="text-gray-600">
          Integrity, professionalism, customer-first service, safety, and
          continuous improvement in every move we undertake.
        </p>
      </div>
    </div>
  </div>
</section>
  );
}
