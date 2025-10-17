import Header from '@/components/Header';
import HeroCBEnf from '@/components/cbenf/HeroCBEnf';
import AboutCBEnf from '@/components/cbenf/AboutCBEnf';
import ContactCBEnf from '@/components/cbenf/ContactCBEnf';
import Footer from '@/components/Footer';

export default function CBEnf() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        {/* Bloco 1 - Hero Banner */}
        <HeroCBEnf />

        {/* Bloco 2 - Sobre o Evento */}
        <AboutCBEnf />

        {/* Bloco 9 - Formulário de Contato */}
        <ContactCBEnf />
      </main>
      <Footer />
    </div>
  );
}