import Header from '../../components/Header';
import HeroEquipe from '../../components/equipe/HeroEquipe';
import TeamEquipe from '../../components/equipe/TeamEquipe';
import ServicesHome from '../../components/homepage/ServicesHome';
import WhyChooseHome from '../../components/homepage/WhyChooseHome';
import TestimonialsHome from '../../components/homepage/TestimonialsHome';
import ContactHome from '../../components/homepage/ContactHome';
import Footer from '../../components/Footer';

export default function Equipe() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroEquipe />
        <TeamEquipe />
        <ServicesHome />
        <WhyChooseHome />
        <TestimonialsHome />
        <ContactHome />
      </main>
      <Footer />
    </div>
  );
}