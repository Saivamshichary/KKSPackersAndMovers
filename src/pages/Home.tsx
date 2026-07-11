import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
<div className="min-h-screen bg-white">
  <Header />

  <Hero />

  <Services />

  <WhyChooseUs />

  <About />

  <Gallery />

  <Testimonials />

  <Contact />

  <Footer />
</div>
  );
}
