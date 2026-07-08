import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About KKS Packers & Movers</h1>
          <p className="text-lg text-gray-300">Your trusted moving partner since 2004</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <svg className="w-32 h-32 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
                </svg>
                <p>Company Image</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                KKS Packers & Movers has been serving customers across India for over 20 years. We have successfully relocated thousands of families and businesses with professionalism, care, and integrity.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our commitment to excellence, combined with our experienced team and modern infrastructure, makes us the preferred choice for reliable moving and relocation services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe in building long-term relationships with our customers by delivering exceptional service, maintaining transparency, and always putting their needs first.
              </p>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To provide safe, reliable, and affordable moving solutions that exceed customer expectations and make relocation stress-free.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted and preferred relocation partner in India, known for innovation, quality, and customer satisfaction.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
              <p className="text-gray-600">
                Integrity, professionalism, customer focus, and continuous improvement in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">20+</h3>
              <p>Years of Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">5000+</h3>
              <p>Happy Customers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p>Expert Staff</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">100%</h3>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
