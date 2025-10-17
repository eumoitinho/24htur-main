import Header from '../../components/Header';
import HeroTrabalheConosco from '../../components/trabalhe-conosco/HeroTrabalheConosco';
import BenefitsTrabalheConosco from '../../components/trabalhe-conosco/BenefitsTrabalheConosco';
import OpenPositionsTrabalheConosco from '../../components/trabalhe-conosco/OpenPositionsTrabalheConosco';
import ApplicationFormTrabalheConosco from '../../components/trabalhe-conosco/ApplicationFormTrabalheConosco';
import Footer from '../../components/Footer';

export default function TrabalheConosco() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroTrabalheConosco />
        <BenefitsTrabalheConosco />
        <OpenPositionsTrabalheConosco />
        <ApplicationFormTrabalheConosco />
      </main>
      <Footer />
    </div>
  );
}