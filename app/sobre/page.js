import Header from '../../components/Header';
import HeroSobre from '../../components/sobre/HeroSobre';
import AboutSobre from '../../components/sobre/AboutSobre';
import ValuesSobre from '../../components/sobre/ValuesSobre';
import Footer from '../../components/Footer';

export default function Sobre() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSobre />
        <AboutSobre />
        <ValuesSobre />
      </main>
      <Footer />
    </div>
  );
}