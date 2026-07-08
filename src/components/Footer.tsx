import logo from "../assets/kkslogo.png";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={logo}
                alt="KKS Logo"
                className="h-16 w-16 object-contain bg-transparent"
              />
              <span className="font-bold text-lg">KKS Packers & Movers</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner for safe, fast & affordable relocation
              services.
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
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
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
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home Shifting
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Office Relocation
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Vehicle Transport
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Storage Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex flex-col items-start space-x-2">
                <a
                  href="tel:+919710710754"
                  className="text-orange-500 font-semibold px-3 py-2"
                >
                  <CallIcon />
                  +91 97107 10754
                </a>
                <a
                className="text-orange-500 font-semibold px-3 py-2"
  href="https://wa.me/918096102712"
  target="_blank"
  rel="noopener noreferrer"
>
  <WhatsAppIcon />
  Chat on WhatsApp
</a>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-semibold">info@kkspackers.com</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Locations</p>
                <p className="text-white font-semibold">
                  Hyderabad | Bangalore | Chennai
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
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              📷
            </a>
          </div>
          <div className="text-gray-400 text-sm">
            <p>&copy; 2024 KKS Packers & Movers. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
