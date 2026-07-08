import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import QuoteForm from '../components/QuoteForm';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <QuoteForm />
      <Footer />
    </div>
  );
}
