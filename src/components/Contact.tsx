import QuoteForm from "./QuoteForm";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Contact() {
  return (
    <section id="contactus" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="section-title">Get a Free Moving Quote</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Planning your next move? Contact Ramajayam Packers & Movers for a free,
            no-obligation quotation. We provide safe, reliable, and affordable
            relocation services across Chennai and throughout India.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">

          <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-lg transition">
            <CallIcon className="text-orange-500 text-5xl mb-3" />
            <h3 className="font-bold text-lg mb-2">Call Us</h3>

            <a
              href="tel:+919710710754"
              className="block text-orange-500 font-semibold hover:underline"
            >
              +91 97107 10754
            </a>

            <a
              href="tel:+919043775889"
              className="block text-orange-500 font-semibold hover:underline"
            >
              +91 90437 75889
            </a>

            <p className="text-gray-500 mt-2 text-sm">
              Available 24×7
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-lg transition">
            <WhatsAppIcon className="text-green-600 text-5xl mb-3" />
            <h3 className="font-bold text-lg mb-2">WhatsApp</h3>

            <a
              href="https://wa.me/919710710754"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-semibold hover:underline"
            >
              Chat with us
            </a>

            <p className="text-gray-500 mt-2 text-sm">
              Quick responses
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-lg transition">
            <EmailIcon className="text-orange-500 text-5xl mb-3" />
            <h3 className="font-bold text-lg mb-2">Email</h3>

            <a
              href="mailto:kpsekar86@gmail.com"
              className="text-orange-500 font-semibold hover:underline break-all"
            >
              kpsekar86@gmail.com
            </a>

            <p className="text-gray-500 mt-2 text-sm">
              We'll respond quickly
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-lg transition">
            <LocationOnIcon className="text-orange-500 text-5xl mb-3" />
            <h3 className="font-bold text-lg mb-2">Branches</h3>

            <p className="text-gray-700">📍 T. Nagar, Chennai</p>
            <p className="text-gray-700">📍 Valasaravakkam, Chennai</p>

            <p className="text-gray-500 mt-2 text-sm">
              Serving all of Tamil Nadu
            </p>
          </div>

        </div>

        {/* Quote Form */}
        <QuoteForm />

      </div>
    </section>
  );
}