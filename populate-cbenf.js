require('dotenv').config();
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'kyx4ncqy',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || process.env.SANITY_TOKEN
});

const DRY_RUN = !!process.env.DRY_RUN;

async function populateCBEnfPage() {
  console.log('🚀 Iniciando população da página CBENF no Sanity...');

  const cbenfPageData = {
    _id: 'cbenfPage-1',
    _type: 'cbenfPage',
    title: 'Página CBENF',
    isActive: true,
    seoTitle: '24H Escritório de Viagens | 75º Congresso Brasileiro de Enfermagem',
    seoDescription: 'Sua participação no 75º CBEn sem complicações! A 24H cuida de tudo para você focar no conhecimento e networking.',

    // Bloco 1 - Hero
    hero: {
      title: 'Sua participação no 75º CBEn sem complicações!',
      subtitle: 'Esqueça o estresse de organizar hospedagem, passagens e passeios. A 24H Escritório de Viagens cuida de tudo para você focar no que realmente importa: o conhecimento e networking do maior congresso de enfermagem do Brasil.',
      ctaText: 'QUERO MEU PACOTE EXCLUSIVO!',
      eventName: '75º Congresso Brasileiro de Enfermagem',
      preCongressDates: '22-23 de Novembro',
      mainEventDates: '23-26 de Novembro 2025',
      location: 'Campus da PUCRS - Porto Alegre - RS',
      participants: 'Profissionais e estudantes de todo o Brasil'
    },

    // Bloco 2 - Sobre o Evento
    about: {
      title: '75º Congresso Brasileiro de Enfermagem',
      subtitle: 'O maior evento da enfermagem brasileira está chegando a Porto Alegre',
      description: 'A Associação Brasileira de Enfermagem (ABEn) promove este encontro fundamental para profissionais, estudantes, pesquisadores e gestores de todo o país.\n\nUma oportunidade única de atualização científica, networking e desenvolvimento profissional em um ambiente de excelência acadêmica.',
      expectedParticipants: '+5.000',
      edition: '75º',
      parallelEvents: '7º CLAHEN • 8º SENABS',
      preCongressDescription: 'Workshops e cursos preparatórios com especialistas renomados',
      mainEventDescription: 'Palestras, painéis, apresentações de trabalhos e networking',
      locationDescription: 'Porto Alegre - RS\nEstrutura completa e moderna',
      ctaText: 'QUERO PARTICIPAR'
    },

    // Bloco 3 - Serviços
    services: {
      title: 'Tudo incluído para sua experiência completa',
      subtitle: 'Cuidamos de cada detalhe da sua viagem ao CBEnf 2024. Desde a chegada até a partida, nossa equipe especializada garante que você aproveite ao máximo este importante evento.',
      items: [
        {
          title: 'Passagens Aéreas',
          description: 'Voos diretos ou com conexão para Goiânia, com as melhores tarifas e horários convenientes.'
        },
        {
          title: 'Hospedagem Exclusiva',
          description: 'Hotéis selecionados próximos ao evento, com tarifas especiais negociadas para congressistas.'
        },
        {
          title: 'Translado Incluso',
          description: 'Transfer aeroporto-hotel-evento, garantindo comodidade e pontualidade durante todo o congresso.'
        },
        {
          title: 'City Tour Goiânia',
          description: 'Conheça os principais pontos turísticos da capital, incluindo centro histórico e mercado central.'
        }
      ]
    },

    // Bloco 4 - Hospedagem
    accommodation: {
      title: 'Hotéis Selecionados',
      subtitle: 'Hotéis estrategicamente localizados próximos ao evento, com tarifas especiais para congressistas.',
      hotels: [
        {
          name: 'Hotel Exemplo 1',
          distance: '500m do evento',
          basePrice: 'R$ 250',
          badge: 'Recomendado',
          details: [
            'Wi-Fi gratuito',
            'Café da manhã incluso',
            'Estacionamento',
            'Academia'
          ]
        },
        {
          name: 'Hotel Exemplo 2',
          distance: '800m do evento',
          basePrice: 'R$ 200',
          details: [
            'Wi-Fi gratuito',
            'Café da manhã incluso',
            'Piscina'
          ]
        }
      ]
    },

    // Bloco 5 - Por que Escolher
    whyChoose: {
      title: 'Especialistas em turismo científico',
      description: 'Somos referência na organização de viagens para eventos científicos e congressos médicos. Nossa experiência garante que você chegue descansado, hospedado no melhor local e pronto para aproveitar cada momento do CBEnf 2024.',
      benefits: [
        'Experiência de 15+ anos organizando viagens para eventos científicos',
        'Parcerias exclusivas com hotéis próximos ao convention center',
        'Tarifas especiais negociadas diretamente com companhias aéreas',
        'Equipe especializada em turismo científico e de saúde',
        'Suporte presencial durante todo o evento em Goiânia',
        'Flexibilidade para personalizar seu pacote conforme necessidade'
      ],
      stats: [
        { number: '2.500+', text: 'Congressistas atendidos em eventos anteriores' },
        { number: '15+', text: 'Anos organizando viagens científicas' },
        { number: '100%', text: 'Satisfação garantida' },
        { number: '24/7', text: 'Suporte durante o evento' }
      ]
    },

    // Bloco 6 - Formulário de Contato
    contact: {
      title: 'Garanta sua participação',
      subtitle: 'Preencha o formulário abaixo e nossa equipe entrará em contato para criar um pacote personalizado para sua participação no 75º CBEn.'
    }
  };

  const docId = cbenfPageData._id;

  try {
    const existingDoc = await client.fetch(`*[_id == "${docId}"][0]`);

    if (existingDoc) {
      console.log(`Documento 'cbenfPage' com _id '${docId}' já existe. Atualizando...`);
      if (!DRY_RUN) {
        await client.patch(docId).set(cbenfPageData).commit();
        console.log(`✅ Documento 'cbenfPage' atualizado com sucesso!`);
      } else {
        console.log(`[DRY RUN] Documento 'cbenfPage' seria atualizado.`);
      }
    } else {
      console.log(`Documento 'cbenfPage' com _id '${docId}' não encontrado. Criando novo...`);
      if (!DRY_RUN) {
        await client.create(cbenfPageData);
        console.log(`✅ Documento 'cbenfPage' criado com sucesso!`);
      } else {
        console.log(`[DRY RUN] Documento 'cbenfPage' seria criado.`);
      }
    }
  } catch (error) {
    console.error('❌ Erro ao popular a página CBENF no Sanity:', error);
  }
}

populateCBEnfPage();

