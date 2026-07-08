import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  movingFrom: string;
  movingTo: string;
  message: string;
}

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    movingFrom: "",
    movingTo: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phone = "918096102712"; // Your WhatsApp number (country code, no +)

    const message = `
📦 *New Moving Quote Request*

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📍 Moving From: ${formData.movingFrom}
📍 Moving To: ${formData.movingTo}

📝 Additional Details:
${formData.message ? formData.message : "N/A"} 
`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Request a Free Quote</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Get Your Free Moving Estimate!
        </p>

        <div className="bg-gray-50 rounded-lg shadow-md p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-transparent outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-transparent outline-none"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Moving From
                  </label>
                  <input
                    type="text"
                    name="movingFrom"
                    value={formData.movingFrom}
                    onChange={handleChange}
                    placeholder="Enter your pickup address"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-transparent outline-none"
                  ></input>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Moving To
                  </label>
                  <input
                    type="text"
                    name="movingTo"
                    value={formData.movingTo}
                    onChange={handleChange}
                    placeholder="Enter your destination address"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-transparent outline-none"
                  ></input>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <input
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter any additional details"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-transparent outline-none"
                  ></input>
                </div>
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-lg py-4 mt-6"
              >
                Get a Quote
              </button>
            </form>
        </div>
      </div>
    </section>
  );
}
