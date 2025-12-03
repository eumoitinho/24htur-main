import HeaderCorporate from '../../components/corporate/HeaderCorporate';
import HeroCorporate from '../../components/corporate/HeroCorporate';
import ClientsCorporate from '../../components/corporate/ClientsCorporate';
import DilemaCorporate from '../../components/corporate/DilemaCorporate';
import SolucaoCorporate from '../../components/corporate/SolucaoCorporate';
import TestimonialsCorporate from '../../components/corporate/TestimonialsCorporate';
import OfertaCorporate from '../../components/corporate/OfertaCorporate';
import FooterCorporate from '../../components/corporate/FooterCorporate';

export const metadata = {
  title: '24H Turismo Corporate - Gestão de Viagens Corporativas',
  description: 'Controle total sobre suas viagens de negócios. Plataforma self-booking e suporte humano 24/7 em uma só solução. Diagnóstico gratuito de otimização.',
};

export default function Corporate() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderCorporate />
      <main>
        {/* Bloco 1 - Hook + Formulário */}
        <HeroCorporate />
        
        {/* Bloco 2 - Prova social (logos clientes) */}
        <ClientsCorporate />
        
        {/* Bloco 3 - História / Dilema */}
        <DilemaCorporate />
        
        {/* Bloco 4 - Solução */}
        <SolucaoCorporate />
        
        {/* Bloco 5 - Depoimentos */}
        <TestimonialsCorporate />
        
        {/* Bloco 6 - Oferta + Formulário */}
        <OfertaCorporate />
      </main>
      {/* Bloco 7 - Rodapé */}
      <FooterCorporate />
    </div>
  );
}