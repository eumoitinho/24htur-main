import LandingPageHeader from '../../components/LandingPageHeader';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Metrics from '../../components/Metrics';
import About from '../../components/About';
import ClientsSection from '../../components/ClientsSection';
import Services from '../../components/Services';
import SelfBooking from '../../components/SelfBooking';
import WhyChoose from '../../components/WhyChoose';
import AboutCompany from '../../components/AboutCompany';
import Testimonials from '../../components/Testimonials';
import Contact from '../../components/Contact';
import WhatsAppButton from '../../components/WhatsAppButton';

export default function Corporate() {
  return (
    <div className="min-h-screen bg-white">
      <LandingPageHeader pageType="corporate" />
      <main>
        <Hero />
        <Metrics />
        <About />
        <ClientsSection />
        <Services />
        <SelfBooking />
        <WhyChoose />
        <AboutCompany />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      {/* <WhatsAppButton /> */}
    </div>
  );
}