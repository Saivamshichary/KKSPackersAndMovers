import {
  FaAward,
  FaLocationDot,
  FaBoxOpen,
  FaPeopleCarryBox,
  FaTruckFast,
  FaShield,
  FaIndianRupeeSign,
  FaHeadset,
} from "react-icons/fa6";

export default function WhyChooseUs() {
  const reasons = [
  {
    id: 1,
    icon: <FaAward />,
    iconColor: "text-yellow-500",
    title: "20+ Years Experience",
    description:
      "Trusted relocation experts with over two decades of delivering safe and reliable moving services.",
  },
  {
    id: 2,
    icon: <FaLocationDot />,
    iconColor: "text-blue-500",
    title: "GPS Tracked Vehicles",
    description:
      "Track your shipment in real time with GPS-enabled vehicles for complete peace of mind.",
  },
  {
    id: 3,
    icon: <FaBoxOpen />,
    iconColor: "text-orange-500",
    title: "Professional Packing",
    description:
      "Premium-quality packing materials ensure maximum protection for your belongings throughout the move.",
  },
  {
    id: 4,
    icon: <FaPeopleCarryBox />,
    iconColor: "text-green-600",
    title: "Trained Loading Staff",
    description:
      "Skilled professionals carefully load and unload your belongings to ensure a damage-free relocation.",
  },
  {
    id: 5,
    icon: <FaTruckFast />,
     iconColor: "text-indigo-600",
    title: "Doorstep Pickup",
    description:
      "Convenient doorstep pickup and delivery services for a smooth and hassle-free moving experience.",
  },
  {
    id: 6,
    icon: <FaShield />,
    iconColor: "text-emerald-600",
    title: "Transit Insurance",
    description:
      "Comprehensive transit insurance offers added security and peace of mind for your valuables.",
  },
  {
    id: 7,
    icon: <FaIndianRupeeSign />,
    iconColor: "text-red-500",
    title: "No Hidden Charges",
    description:
      "Transparent pricing with no hidden fees—what we quote is exactly what you pay.",
  },
  {
    id: 8,
    icon: <FaHeadset />,
    iconColor: "text-purple-600",
    title: "24×7 Customer Support",
    description:
      "Our friendly support team is available 24/7 to assist you before, during, and after your move.",
  },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Why Choose KKS Packers?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div key={reason.id} className="flex flex-col items-center text-center">
              <div className={`text-7xl ${reason.iconColor} mb-4`}>{reason.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
