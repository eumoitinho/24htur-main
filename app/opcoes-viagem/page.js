import Header from '../../components/Header';
import HeroOpcoesViagem from '../../components/opcoes-viagem/HeroOpcoesViagem';
import TravelOptionsOpcoesViagem from '../../components/opcoes-viagem/TravelOptionsOpcoesViagem';
import BenefitsOpcoesViagem from '../../components/opcoes-viagem/BenefitsOpcoesViagem';
import CTAOpcoesViagem from '../../components/opcoes-viagem/CTAOpcoesViagem';
import Footer from '../../components/Footer';

export default function OpcoesViagem() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroOpcoesViagem />
        <TravelOptionsOpcoesViagem />
        <BenefitsOpcoesViagem />
        <CTAOpcoesViagem />
      </main>
      <Footer />
    </div>
  );
}