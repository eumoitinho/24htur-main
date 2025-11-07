import Header from '../../../components/Header';
import HeroCBEnf from '../../../components/cbenf/HeroCBEnf';
import AboutCBEnf from '../../../components/cbenf/AboutCBEnf';
import AccommodationCBEnf from '../../../components/cbenf/AccommodationCBEnf';
import FlightsCBEnf from '../../../components/cbenf/FlightsCBEnf';
import ToursCBEnf from '../../../components/cbenf/ToursCBEnf';
import PaymentCBEnf from '../../../components/cbenf/PaymentCBEnf';
import WhyChooseCBEnf from '../../../components/cbenf/WhyChooseCBEnf';
import About24HCBEnf from '../../../components/cbenf/About24HCBEnf';
import ContactCBEnf from '../../../components/cbenf/ContactCBEnf';
import Footer from '../../../components/Footer';

export default function CBEnf() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        {/* Bloco 1 - Hero Banner */}
        <HeroCBEnf />

        {/* Bloco 2 - Sobre o Evento */}
        <AboutCBEnf />

        {/* Bloco 3 - Hospedagem */}
        <AccommodationCBEnf />

        {/* Bloco 4 - Passagens Aéreas */}
        <FlightsCBEnf />

        {/* Bloco 5 - Passeios Exclusivos */}
        <ToursCBEnf />

        {/* Bloco 6 - Condições de Pagamento */}
        <PaymentCBEnf />

        {/* Bloco 7 - Por que Escolher */}
        <WhyChooseCBEnf />

        {/* Bloco 8 - Sobre a 24H */}
        <About24HCBEnf />

        {/* Bloco 9 - Formulário de Contato */}
        <ContactCBEnf />
      </main>
      <Footer />
    </div>
  );
}