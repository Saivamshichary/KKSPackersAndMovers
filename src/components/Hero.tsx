import heroImage from "../assets/kkshero.png";
import CallIcon from '@mui/icons-material/Call';

export default function Hero() {
  return (
    <section
      id="home"
      className="text-white py-20 md:py-32"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Trusted Packers,  
              <span className="text-orange-500"> Movers & Travels</span>
            </h1>
            <h2 className="text-lg text-white-300">
              Across Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, Telangana & Pan India.
            </h2>
            <h2 className="text-lg text-white-300 mb-8">
                          House Shifting • Office Relocation • Car Transport • Bike Transport • Local & Interstate Moving
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="btn-primary"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Get a Free Quote
              </button>
              <button className="btn-secondary">
                <a
  href="tel:+919710710754"
>
  <CallIcon />
  Call Us Now
</a></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
