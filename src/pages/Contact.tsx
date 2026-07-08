import Header from '../components/Header';
import QuoteForm from '../components/QuoteForm';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-300">Get in touch with us for any queries or bookings</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <a href="tel:+919876543210" className="text-orange-500 font-bold text-lg hover:underline">
                +91 98765 43210
              </a>
              <p className="text-gray-600 mt-2">Available 24/7</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:info@kkspackers.com" className="text-orange-500 font-bold hover:underline">
                info@kkspackers.com
              </a>
              <p className="text-gray-600 mt-2">We'll respond within 24 hours</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Locations</h3>
              <p className="text-gray-600">
                Hyderabad • Bangalore • Chennai
              </p>
            </div>
          </div>

          {/* Detailed Locations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="border rounded-lg p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">🌆 Hyderabad</h4>
              <p className="text-gray-600 mb-2">Jubilee Hills, Hyderabad</p>
              <p className="text-gray-600 mb-2">Phone: +91 98765 43210</p>
              <p className="text-gray-600">Email: hyderabad@kkspackers.com</p>
            </div>

            <div className="border rounded-lg p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">🌆 Bangalore</h4>
              <p className="text-gray-600 mb-2">Indiranagar, Bangalore</p>
              <p className="text-gray-600 mb-2">Phone: +91 98765 43211</p>
              <p className="text-gray-600">Email: bangalore@kkspackers.com</p>
            </div>

            <div className="border rounded-lg p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">🌆 Chennai</h4>
              <p className="text-gray-600 mb-2">Anna Nagar, Chennai</p>
              <p className="text-gray-600 mb-2">Phone: +91 98765 43212</p>
              <p className="text-gray-600">Email: chennai@kkspackers.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <QuoteForm />

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <details className="bg-white rounded-lg p-6 shadow-sm">
              <summary className="font-bold text-gray-900 cursor-pointer hover:text-orange-500">
                How much does the moving service cost?
              </summary>
              <p className="text-gray-600 mt-4">
                The cost depends on various factors like distance, volume of goods, and type of items. We provide a free quotation after assessing your requirements.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm">
              <summary className="font-bold text-gray-900 cursor-pointer hover:text-orange-500">
                How far in advance should I book your services?
              </summary>
              <p className="text-gray-600 mt-4">
                We recommend booking at least 1-2 weeks in advance. However, we also handle urgent moves based on availability. Contact us for emergency bookings.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm">
              <summary className="font-bold text-gray-900 cursor-pointer hover:text-orange-500">
                Do you provide insurance for items?
              </summary>
              <p className="text-gray-600 mt-4">
                Yes, we provide comprehensive insurance coverage for all items during transit. Additional coverage options are also available.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm">
              <summary className="font-bold text-gray-900 cursor-pointer hover:text-orange-500">
                What about temporary storage facilities?
              </summary>
              <p className="text-gray-600 mt-4">
                We offer climate-controlled, secure storage facilities for short-term and long-term storage needs at competitive rates.
              </p>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
