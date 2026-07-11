import { useState } from "react";
import logo from "../assets/favicon.png";
import CallIcon from "@mui/icons-material/Call";
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#aboutus" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contactus" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="text-[#0e2c5e] flex items-center space-x-1">
            <img
              src={logo}
              alt="Ramajayam Logo"
              className="h-16 w-16 object-contain bg-transparent"
            />
            <span className="font-bold text-2xl sm:text-3xl md:text-4xl">
              Ramajayam
            </span>
            <span className="text-l border-b-2 border-orange-500">
              Packers & Movers
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium m-4"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Contact & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <a
                href="tel:+919710710754"
                className="text-orange-500 font-bold px-3 py-2"
              >
                <CallIcon />
                +91 97107 10754
              </a>
            </div>
            <button
              className="btn-primary"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:+919710710754"
                className="text-orange-500 font-bold px-3 py-2"
              >
                <CallIcon />
                +91 97107 10754
              </a>
              <button
                className="btn-primary w-full"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
              >
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
