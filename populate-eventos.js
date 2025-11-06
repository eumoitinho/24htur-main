require('dotenv').config();
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'kyx4ncqy',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || process.env.SANITY_TOKEN
});

const DRY_RUN = !!process.env.DRY_RUN;

async function populateEventosPage() {
  console.log('🚀 Iniciando população da página Eventos no Sanity...');

  const eventosPageData = {
    _id: 'eventosPage-1',
    _type: 'eventosPage',
    title: 'Página Eventos',
    isActive: true,
    seoTitle: '24H Escritório de Viagens | Viagens para Eventos',
    seoDescription: 'Somos especialistas em transformar a complexidade da organização de viagens para eventos em uma experiência fluida e tranquila.',

    // Bloco 1 - Hero
    hero: {
      title: 'VIAGENS PARA EVENTOS',
      subtitle: 'Somos especialistas em transformar a complexidade da organização de viagens para eventos em uma experiência fluida e tranquila, garantindo que palestrantes, equipes, organizadores e visitantes cheguem ao seu destino com conforto e pontualidade.',
      ctaText: 'FALE COM UM ESPECIALISTA!'
    },

    // Bloco 2 - Serviços de Eventos
    eventServices: {
      title: 'Nossos serviços',
      items: [
        {
          title: 'Atendimento a palestrantes e congressistas',
          description: 'Garantimos que seus convidados de honra tenham uma experiência de viagem VIP, com todo o suporte necessário.'
        },
        {
          title: 'Emissão de passagens aéreas',
          description: 'Buscamos as melhores rotas e tarifas, otimizando custos e tempo de deslocamento, tanto para organizadores como para visitantes.'
        },
        {
          title: 'Reserva de hospedagem',
          description: 'Selecionamos e reservamos os hotéis mais adequados, considerando localização, conforto e orçamento, para que todos estejam bem acomodados.'
        },
        {
          title: 'Transportes e programação de apoio',
          description: 'Organizamos traslados eficientes e seguros, além de criar programações de apoio para acompanhantes e familiares, garantindo que todos desfrutem da melhor experiência de viagem possível.'
        },
        {
          title: 'Cotação e locação de salas para eventos',
          description: 'Auxiliamos na escolha e reserva de espaços ideais para suas reuniões, conferências ou workshops.'
        },
        {
          title: 'Contratação de Serviços de Alimentos e Bebidas (A&B)',
          description: 'Gerenciamos a parte gastronômica do seu evento, desde coffee breaks a jantares de gala, com opções que se encaixam no seu perfil e orçamento.'
        }
      ]
    },

    // Bloco 3 - Próximos Eventos
    upcomingEvents: {
      title: 'Confira as condições especiais para nossos próximos eventos:',
      events: [
        {
          name: '75º Congresso Brasileiro de Enfermagem - Porto Alegre/RS',
          preCongress: '22 e 23 de novembro',
          mainEvent: '23 a 26 de novembro de 2025',
          location: 'Campus da PUCRS - Pontifícia Universidade Católica do Rio Grande do Sul',
          address: 'Bairro Partenon - Zona Leste de Porto Alegre',
          link: '/eventos/cbenf',
          linkText: 'SAIBA MAIS!'
        }
      ]
    }
  };

  const docId = eventosPageData._id;

  try {
    const existingDoc = await client.fetch(`*[_id == "${docId}"][0]`);

    if (existingDoc) {
      console.log(`Documento 'eventosPage' com _id '${docId}' já existe. Atualizando...`);
      if (!DRY_RUN) {
        await client.patch(docId).set(eventosPageData).commit();
        console.log(`✅ Documento 'eventosPage' atualizado com sucesso!`);
      } else {
        console.log(`[DRY RUN] Documento 'eventosPage' seria atualizado.`);
      }
    } else {
      console.log(`Documento 'eventosPage' com _id '${docId}' não encontrado. Criando novo...`);
      if (!DRY_RUN) {
        await client.create(eventosPageData);
        console.log(`✅ Documento 'eventosPage' criado com sucesso!`);
      } else {
        console.log(`[DRY RUN] Documento 'eventosPage' seria criado.`);
      }
    }
  } catch (error) {
    console.error('❌ Erro ao popular a página Eventos no Sanity:', error);
  }
}

populateEventosPage();

