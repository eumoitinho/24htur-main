import Header from '../../components/Header';
import HeroEventosInfo from '../../components/eventos-info/HeroEventosInfo';
import AboutEventosInfo from '../../components/eventos-info/AboutEventosInfo';
import ServicesEventosInfo from '../../components/eventos-info/ServicesEventosInfo';
import CTAEventosInfo from '../../components/eventos-info/CTAEventosInfo';
import Footer from '../../components/Footer';

export default function EventosInfo() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroEventosInfo />
        <AboutEventosInfo />
        <ServicesEventosInfo />
        <CTAEventosInfo />
      </main>
      <Footer />
    </div>
  );
}