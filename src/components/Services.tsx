import houseshifting from "../assets/houseshifting.png";
import officerelocation from "../assets/officerelocation.png";
import cartransport from  "../assets/cartransport.png";
import InterstateMoving from  "../assets/InterstateMoving.png";
import LoadingandUnloading from "../assets/Loading&Unloading.png";
import Packing from "../assets/Packing.png";
import TourandTravelServices from "../assets/TourandTravelServices.png";
export default function Services() {
  const services = [
    {
      id: 1,
      icon: houseshifting,
      title: 'Home Shifting',
      description: 'Careful and secure packing and moving of your household items to your new residence.',
    },
    {
      id: 2,
      icon: officerelocation,
      title: 'Office Relocation',
      description: 'Professional office relocation services ensuring minimal downtime for your business.',
    },
    {
      id: 3,
      icon: cartransport,
      title: 'Car & Bike Transportation',
      description: 'Safe and reliable transportation of your vehicles across the country.',
    },
    {
      id: 4,
      icon: InterstateMoving,
      title: 'Interstate Moving',
      description: 'Reliable and efficient interstate moving services for your peace of mind.',
    },
     {
      id: 5,
      icon: LoadingandUnloading,
      title: 'Loading & Unloading',
      description: 'Reliable and efficient loading and unloading services for your peace of mind.',
    },
         {
      id: 6,
      icon: Packing,
      title: 'Packing Services',
      description: 'Reliable and efficient packing services to handle your precious items.',
    },
             {
      id: 7,
      icon: TourandTravelServices,
      title: 'Tour and Travel Services',
      description: 'Reliable and efficient tour and travel services for your peace of mind.',
    },

  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="service-card group">
              <div className="text-6xl flex align-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <img src={service.icon} alt={service.title} className="w-50 h-50" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
