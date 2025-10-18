import Header from '../../../components/Header';
import HeroCBEnf from '../../../components/cbenf/HeroCBEnf';
import AboutCBEnf from '../../../components/cbenf/AboutCBEnf';
import HospedagemCBEnf from '../../../components/cbenf/HospedagemCBEnf';
import PassagensCBEnf from '../../../components/cbenf/PassagensCBEnf';
import PasseiosCBEnf from '../../../components/cbenf/PasseiosCBEnf';
import PagamentoCBEnf from '../../../components/cbenf/PagamentoCBEnf';
import WhyChooseCBEnf from '../../../components/cbenf/WhyChooseCBEnf';
import About24hCBEnf from '../../../components/cbenf/About24hCBEnf';
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
        <HospedagemCBEnf />

        {/* Bloco 4 - Passagens Aéreas */}
        <PassagensCBEnf />

        {/* Bloco 5 - Passeios Exclusivos */}
        <PasseiosCBEnf />

        {/* Bloco 6 - Condições de Pagamento */}
        <PagamentoCBEnf />

        {/* Bloco 7 - Por que escolher a 24H */}
        <WhyChooseCBEnf />

        {/* Bloco 8 - Sobre a 24H */}
        <About24hCBEnf />

        {/* Bloco 9 - Formulário de Contato */}
        <ContactCBEnf />
      </main>
      <Footer />
    </div>
  );
}