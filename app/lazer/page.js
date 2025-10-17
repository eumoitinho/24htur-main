import Header from '../../components/Header';
import HeroLazer from '../../components/lazer/HeroLazer';
import Metrics from '../../components/Metrics';
import ServicesLazer from '../../components/lazer/ServicesLazer';
import DestinationsLazer from '../../components/lazer/DestinationsLazer';
import BenefitsLazer from '../../components/lazer/BenefitsLazer';
import AboutCompany from '../../components/AboutCompany';
import Testimonials from '../../components/Testimonials';
import CTALazer from '../../components/lazer/CTALazer';
import ContactLazer from '../../components/lazer/ContactLazer';
import Footer from '../../components/Footer';

export default function Lazer() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroLazer />
        <Metrics />
        <ServicesLazer />
        <DestinationsLazer />
        <BenefitsLazer />
        <AboutCompany />
        <Testimonials />
        <CTALazer />
        <ContactLazer />
      </main>
      <Footer />
    </div>
  );
}