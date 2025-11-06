import Header from '../../components/Header';
import HeroEventos from '../../components/eventos/HeroEventos';
import ServicesEventos from '../../components/eventos/ServicesEventos';
import NextEventEventos from '../../components/eventos/NextEventEventos';
import ContactEventos from '../../components/eventos/ContactEventos';
import Footer from '../../components/Footer';

export default function Eventos() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroEventos />
        <ServicesEventos />
        <NextEventEventos />
        <ContactEventos />
      </main>
      <Footer />
    </div>
  );
}