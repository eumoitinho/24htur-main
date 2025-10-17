import Header from '@/components/Header';
import HeroHome from '@/components/homepage/HeroHome';
import MetricsHome from '@/components/homepage/MetricsHome';
import ProblemsSection from '@/components/homepage/ProblemsSection';
import Experience24H from '@/components/homepage/Experience24H';
import ClientsHome from '@/components/homepage/ClientsHome';
import ServicesHome from '@/components/homepage/ServicesHome';
import WhyChooseHome from '@/components/homepage/WhyChooseHome';
import AboutHome from '@/components/homepage/AboutHome';
import TeamSection from '@/components/homepage/TeamSection';
import TestimonialsHome from '@/components/homepage/TestimonialsHome';
import ContactHome from '@/components/homepage/ContactHome';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroHome />
        <MetricsHome />
        <ProblemsSection />
        <Experience24H />
        <ClientsHome />
        <ServicesHome />
        <WhyChooseHome />
        <AboutHome />
        <TeamSection />
        <TestimonialsHome />
        <ContactHome />
      </main>
      <Footer />
    </div>
  );
}