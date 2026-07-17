import logo from "../assets/logo.png";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  const services = [
    "Household Shifting",
    "Office Relocation",
    "Local Shifting",
    "Domestic & International Shifting",
    "Car & Bike Transportation",
    "Packing & Unpacking",
    "Loading & Unloading",
    "Travel Services",
  ];

  const serviceAreas = [
  "Tamil Nadu",
  "Kerala",
  "Karnataka",
  "Andhra Pradesh",
  "Telangana",
  "Pan India",
];
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={logo}
                alt="Ramajayam Logo"
                className="h-16 w-16 object-contain bg-transparent"
              />
              <span className="font-bold text-lg">Ramajayam Packers & Movers</span>
            </div>
            <p className="text-gray-400">
              Ramajayam Packers & Movers & Ramajayam Travels has over 20 years of experience providing safe, reliable, and affordable relocation services across Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, Telangana, and throughout India. We specialize in household shifting, office relocation, vehicle transportation, and travel services with professional packing and timely delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Get a Quote
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
             {services.map((service) => (
  <li key={service}>
    <a
      href="#services"
      className="text-gray-400 hover:text-white transition-colors"
    >
      {service}
    </a>
  </li>
))}

              
            </ul>
          </div>
{/* areas serving */}
          <div>
            <h4 className="font-bold text-lg mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <a
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {area}
                  </a>
                </li>
              ))}

              
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex flex-col items-start space-x-2">
                <h2>Phone</h2>
                <a
                  href="tel:+919710710754"
                  className="text-orange-500 font-semibold px-3 py-2"
                >
                  <CallIcon />
                  +91 97107 10754
                </a>
                <a
                  href="tel:+919043775889"
                  className="text-orange-500 font-semibold px-3 py-2"
                >
                  <CallIcon />
                  +91 90437 75889
                </a>
                <h2>WhatsApp</h2>
                <a
                  className="text-orange-500 font-semibold px-3 py-2"
                  href="https://wa.me/919710710754"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon />
                  Chat on WhatsApp
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <a href="mailto:kpsekar86@gmail.com" className="text-orange-500 hover:text-white">
                  kpsekar86@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Branches</p>
                <p className="text-white font-semibold">
                  📍 T. Nagar, Chennai
                </p>
                <p className="text-white font-semibold">
                  📍 Valasaravakkam, Chennai
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              f
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              𝕏
            </a>
          </div>
          <div className="text-gray-400 text-sm">
            <p>© 2026 Ramajayam Packers & Movers & Ramajayam Travels. All Rights Reserved.</p>

<p>Professional Packers • Movers • Car & Bike Transportation • Travel Services</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
