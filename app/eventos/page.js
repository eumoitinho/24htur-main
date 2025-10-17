import Header from '../../components/Header';
import HeroEventos from '../../components/eventos/HeroEventos';
import Metrics from '../../components/Metrics';
import ServicesEventos from '../../components/eventos/ServicesEventos';
import NextEventEventos from '../../components/eventos/NextEventEventos';
import AboutCompany from '../../components/AboutCompany';
import Testimonials from '../../components/Testimonials';
import CTAEventos from '../../components/eventos/CTAEventos';
import ContactEventos from '../../components/eventos/ContactEventos';
import Footer from '../../components/Footer';

export default function Eventos() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroEventos />
        <Metrics />
        <ServicesEventos />
        <NextEventEventos />
        <AboutCompany />
        <Testimonials />
        <CTAEventos />
        <ContactEventos />
      </main>
      <Footer />
    </div>
  );
}