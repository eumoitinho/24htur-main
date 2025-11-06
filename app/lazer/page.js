import Header from '../../components/Header';
import HeroLazer from '../../components/lazer/HeroLazer';
import MetricsLazer from '../../components/lazer/MetricsLazer';
import ArgumentsLazer from '../../components/lazer/ArgumentsLazer';
import ExperiencesLazer from '../../components/lazer/ExperiencesLazer';
import TravelTypesLazer from '../../components/lazer/TravelTypesLazer';
import ServicesLazer from '../../components/lazer/ServicesLazer';
import WhyChooseLazer from '../../components/lazer/WhyChooseLazer';
import AboutLazer from '../../components/lazer/AboutLazer';
import TestimonialsLazer from '../../components/lazer/TestimonialsLazer';
import ContactLazer from '../../components/lazer/ContactLazer';
import Footer from '../../components/Footer';

export default function Lazer() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroLazer />
        <MetricsLazer />
        <ArgumentsLazer />
        <ExperiencesLazer />
        <TravelTypesLazer />
        <ServicesLazer />
        <WhyChooseLazer />
        <AboutLazer />
        <TestimonialsLazer />
        <ContactLazer />
      </main>
      <Footer />
    </div>
  );
}