import Header from '../../components/Header';
import HeroOpcoesViagem from '../../components/opcoes-viagem/HeroOpcoesViagem';
import TravelOptionsOpcoesViagem from '../../components/opcoes-viagem/TravelOptionsOpcoesViagem';
import BenefitsOpcoesViagem from '../../components/opcoes-viagem/BenefitsOpcoesViagem';
import ServicesHome from '../../components/homepage/ServicesHome';
import TestimonialsHome from '../../components/homepage/TestimonialsHome';
import ContactHome from '../../components/homepage/ContactHome';
import Footer from '../../components/Footer';

export default function OpcoesViagem() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroOpcoesViagem />
        <TravelOptionsOpcoesViagem />
        <BenefitsOpcoesViagem />
        <ServicesHome />
        <TestimonialsHome />
        <ContactHome />
      </main>
      <Footer />
    </div>
  );
}