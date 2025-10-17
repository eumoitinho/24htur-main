import Header from '@/components/Header';
import HeroCBEnf from '@/components/cbenf/HeroCBEnf';
import AboutCBEnf from '@/components/cbenf/AboutCBEnf';
import ServicesCBEnf from '@/components/cbenf/ServicesCBEnf';
import WhyChooseCBEnf from '@/components/cbenf/WhyChooseCBEnf';
import AboutCompany from '@/components/AboutCompany';
import ContactCBEnf from '@/components/cbenf/ContactCBEnf';
import Footer from '@/components/Footer';

export default function CBEnf() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroCBEnf />
        <AboutCBEnf />
        <ServicesCBEnf />
        <WhyChooseCBEnf />
        <AboutCompany />
        <ContactCBEnf />
      </main>
      <Footer />
    </div>
  );
}