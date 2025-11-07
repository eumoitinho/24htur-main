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

    // Bloco 3 - Hospedagem (28 hotéis)
    accommodation: {
      title: 'Hospedagem com localização estratégica',
      subtitle: 'Selecionamos as melhores opções de hospedagem com diferentes perfis e orçamentos, todas com fácil acesso ao evento',
      hotels: [
        {
          _key: 'hotel-1',
          name: 'Charlie Connect PUC',
          distance: '750 metros da PUCRS',
          basePrice: 'R$ 320,00',
          badge: 'Mais Próximo',
          details: [
            'Studio casal 27m²: R$ 320,00 a diária',
            'Studio casal 40m²: R$ 354,00 a diária',
            'Taxa de limpeza obrigatória: R$ 140,00',
            'Check-in: 15:00 | Check-out: 11:00'
          ]
        },
        {
          _key: 'hotel-2',
          name: 'Pousada São Lourenço',
          distance: '3,5 km da PUCRS',
          basePrice: 'R$ 159,00',
          badge: 'Econômico',
          details: [
            'Apartamentos: single, duplos, triplos, quádruplos e quíntuplos',
            'Sem ar condicionado: R$ 159,00 por pessoa/diária',
            'Com ar condicionado: R$ 182,00 por pessoa/diária',
            'Incluso: café da manhã, estacionamento, Wi-Fi e segurança 24h',
            'Check-in: 14:00 | Check-out: 11:30'
          ]
        },
        {
          _key: 'hotel-3',
          name: 'Coral Trade',
          distance: '3,8 km da PUCRS',
          basePrice: 'R$ 331,00',
          details: [
            'Apartamento duplo casal classic: R$ 331,00 a diária',
            'Apartamento duplo solteiro superior: R$ 331,00 a diária',
            'Incluso: café da manhã e Wi-Fi',
            'Check-in: 14:00 | Check-out: 12:00'
          ]
        },
        {
          _key: 'hotel-4',
          name: 'Master Porto Alegre',
          distance: '4,6 km da PUCRS',
          basePrice: 'R$ 354,00',
          details: [
            'Apartamento single standard: R$ 354,00 a diária',
            'Apartamento duplo standard: R$ 399,00 a diária',
            'Incluso: café da manhã e Wi-Fi',
            'Check-in: 14:00 | Check-out: 12:00'
          ]
        },
        {
          _key: 'hotel-5',
          name: 'Master Express Moinhos de Vento',
          distance: '5,9 km da PUCRS',
          basePrice: 'R$ 228,00',
          details: [
            'Apartamento single classic: R$ 228,00 a diária',
            'Apartamento duplo classic: R$ 274,00 a diária',
            'Apartamento triplo classic: R$ 320,00 a diária',
            'Apartamento família superior (1 casal + 1 solteiro): R$ 354,00 a diária',
            'Incluso: café da manhã e Wi-Fi',
            'Check-in: 14:00 | Check-out: 12:00'
          ]
        },
        {
          _key: 'hotel-6',
          name: 'Intercity Piazza Navona',
          distance: '6 km da PUCRS',
          basePrice: 'R$ 379,00',
          details: [
            'Apartamento single: R$ 379,00 + 5% a diária',
            'Apartamento duplo: R$ 434,00 + 5% a diária',
            'Incluso: café da manhã e Wi-Fi',
            'Check-in: 14:00 | Check-out: 12:00'
          ]
        },
        {
          _key: 'hotel-7',
          name: 'Charlie Porto Alegre Moinhos',
          distance: '6 km da PUCRS',
          basePrice: 'R$ 308,00',
          details: [
            'Studio standard casal: R$ 308,00 a diária',
            'Studio superior casal: R$ 332,00 a diária',
            'Studio deluxe casal 26m²: R$ 342,00 a diária',
            'Studio deluxe casal 33m²: R$ 377,00 a diária',
            'Taxa de limpeza obrigatória: R$ 140,00',
            'Check-in: 15:00 | Check-out: 11:00'
          ]
        },
        {
          _key: 'hotel-8',
          name: 'Coral Express',
          distance: '6,3 km da PUCRS',
          basePrice: 'R$ 234,00',
          details: [
            'Apartamento single standard: R$ 234,00 a diária',
            'Apartamento duplo standard: R$ 280,00 a diária',
            'Incluso: café da manhã e Wi-Fi',
            'Check-in: 14:00 | Check-out: 12:00'
          ]
        },
        {
          _key: 'hotel-9',
          name: 'Ibis Styles Porto Alegre Moinhos de Vento',
          distance: '6,4 km da PUCRS',
          basePrice: 'R$ 425,00',
          badge: 'Premium',
          details: [
            'Apartamento single standard: R$ 425,00 + 5% ISS a diária',
            'Apartamento duplo standard: R$ 496,00 + 5% ISS a diária',
            'Incluso: café da manhã e Wi-Fi',
            'Check-in: 12:00 | Check-out: 12:00'
          ]
        },
        {
          _key: 'hotel-10',
          name: 'Master Express Cidade Baixa',
          distance: '6,5 km da PUCRS',
          basePrice: 'R$ 228,00',
          details: [
            'Apartamento single standard: R$ 228,00 a diária',
            'Apartamento duplo standard: R$ 274,00 a diária',
            'Apartamento triplo standard: R$ 320,00 a diária',
            'Apartamento duplex (4 camas de solteiro): R$ 377,00 a diária',
            'Incluso: café da manhã e Wi-Fi',
            'Check-in: 14:00 | Check-out: 12:00'
          ]
        },
        {
          _key: 'hotel-11',
          name: 'Açores Premium Hotel',
          distance: '6,5 km da PUCRS',
          basePrice: 'R$ 239,00',
          details: [
            'Apartamento single standard: R$ 239,00 a diária',
            'Apartamento duplo standard: R$ 273,00 a diária',
            'Apartamento triplo standard: R$ 376,00 a diária',
            'Incluso: café da manhã e Wi-Fi',
            'Check-in: 14:00 | Check-out: 12:00'
          ]
        },
        {
          _key: 'hotel-12',
          name: 'Garibaldi Business Hotel',
          distance: '6,6 km da PUCRS',
          basePrice: 'R$ 312,00',
          details: [
            'Apartamento single standard: R$ 312,00 + 5% ISS a diária',
            'Apartamento duplo standard: R$ 384,00 + 5% ISS a diária',
            'Apartamento triplo standard: R$ 479,00 + 5% ISS a diária',
            'Incluso: café da manhã e Wi-Fi',
            'Check-in: 14:00 | Check-out: 12:00'
          ]
        },
        {
          _key: 'hotel-13',
          name: 'Master Cosmopolitan',
          distance: '6,7 km da PUCRS',
          basePrice: 'R$ 331,00',
          details: [
            'Apartamento duplo classic (2 camas de solteiro): R$ 331,00 a diária',
            'Incluso: café da manhã e Wi-Fi',
            'Check-in: 14:00 | Check-out: 12:00'
          ]
        },
        {
          _key: 'hotel-14',
          name: 'Umbu Hotel',
          distance: '6,9 km da PUCRS',
          basePrice: 'R$ 341,00',
          details: [
            'Apartamento duplo solteiro executivo: R$ 341,00 a diária',
            'Apartamento triplo executivo (com beliche): R$ 398,00 a diária',
            'Apartamento triplo executivo: R$ 433,00 a diária',
            'Apartamento quádruplo executivo: R$ 455,00 a diária',
            'Incluso: café da manhã e Wi-Fi',
            'Check-in: 14:00 | Check-out: 12:00'
          ]
        },
        {
          _key: 'hotel-15',
          name: 'Master Alberto Bins',
          distance: '6,9 km da PUCRS',
          basePrice: 'R$ 228,00',
          details: [
            'Apartamento single classic: R$ 228,00 a diária',
            'Apartamento duplo classic: R$ 274,00 a diária',
            'Apartamento triplo classic (3 camas): R$ 320,00 a diária',
            'Apartamento família classic (1 casal + 1 solteiro): R$ 354,00 a diária',
            'Incluso: café da manhã e Wi-Fi',
            'Check-in: 14:00 | Check-out: 12:00'
          ]
        },
        {
          _key: 'hotel-16',
          name: 'Continental Business',
          distance: '6,9 km da PUCRS',
          basePrice: 'R$ 228,00',
          details: [
            'Apartamento single standard: R$ 228,00 a diária',
            'Apartamento duplo standard: R$ 274,00 a diária',
            'Apartamento triplo superior: R$ 320,00 a diária',
            'Incluso: café da manhã e Wi-Fi',
            'Check-in: 14:00 | Check-out: 12:00'
          ]
        },
        {
          _key: 'hotel-17',
          name: 'Nacional Inn Porto Alegre',
          distance: '7 km da PUCRS',
          basePrice: 'R$ 206,00',
          details: [
            'Apartamento single standard: R$ 206,00 + 5% ISS a diária',
            'Apartamento duplo standard: R$ 240,00 + 5% ISS a diária',
            'Incluso: café da manhã e Wi-Fi',
            'Check-in: 14:00 | Check-out: 12:00'
          ]
        },
        {
          _key: 'hotel-18',
          name: 'Park Plaza Porto Alegre',
          distance: '7 km da PUCRS',
          basePrice: 'R$ 462,00',
          badge: 'Luxo',
          details: [
            'Apartamento single superior: R$ 462,00 + 5% ISS a diária',
            'Apartamento duplo superior: R$ 411,00 + 5% ISS a diária',
            'Incluso: café da manhã e Wi-Fi',
            'Check-in: 14:00 | Check-out: 12:00'
          ]
        },
        {
          _key: 'hotel-19',
          name: 'Master Express Dom Pedro II',
          distance: '7 km da PUCRS',
          basePrice: 'R$ 228,00',
          details: [
            'Apartamento single classic: R$ 228,00 a diária',
            'Apartamento duplo classic: R$ 274,00 a diária',
            'Apartamento triplo classic: R$ 320,00 a diária',
            'Incluso: café da manhã e Wi-Fi',
            'Check-in: 14:00 | Check-out: 12:00'
          ]
        },
        {
          _key: 'hotel-20',
          name: 'Hotel Embaixador',
          distance: '7,2 km da PUCRS',
          basePrice: 'R$ 251,00',
          details: [
            'Apartamento single standard: R$ 251,00 a diária',
            'Apartamento duplo standard: R$ 285,00 a diária',
            'Incluso: café da manhã, lavanderia self service, espaço coliving com academia, churrasqueira e cozinha compartilhada e Wi-Fi',
            'Check-in: 14:00 | Check-out: 12:00'
          ]
        },
        {
          _key: 'hotel-21',
          name: 'Dan Inn Express Porto Alegre',
          distance: '7,2 km da PUCRS',
          basePrice: 'R$ 216,60',
          details: [
            'Apartamento single econômico: R$ 216,60 + 5% ISS a diária',
            'Apartamento duplo econômico: R$ 216,60 + 5% ISS a diária',
            'Apartamento duplo standard: R$ 216,60 + 5% ISS a diária',
            'Apartamento triplo standard: R$ 319,20 + 5% ISS a diária',
            'Apartamento quádruplo standard: R$ 353,40 + 5% ISS a diária',
            'Incluso: café da manhã e Wi-Fi',
            'Check-in: 14:00 | Check-out: 12:00'
          ]
        },
        {
          _key: 'hotel-22',
          name: 'Ritter Hotéis',
          distance: '7,2 km da PUCRS',
          basePrice: 'R$ 263,00',
          details: [
            'Apartamento single luxo: R$ 263,00 a diária',
            'Apartamento duplo luxo: R$ 308,00 a diária',
            'Incluso: café da manhã e Wi-Fi',
            'Check-in: 14:00 | Check-out: 12:00'
          ]
        },
        {
          _key: 'hotel-23',
          name: 'Intercity Praia de Belas',
          distance: '7,4 km da PUCRS',
          basePrice: 'R$ 379,00',
          details: [
            'Apartamento single luxo superior: R$ 379,00 + 5% ISS a diária',
            'Apartamento duplo luxo superior: R$ 431,00 + 5% ISS a diária',
            'Incluso: café da manhã e Wi-Fi',
            'Check-in: 14:00 | Check-out: 12:00'
          ]
        },
        {
          _key: 'hotel-24',
          name: 'Blue Tree Towers Millenium',
          distance: '7,5 km da PUCRS',
          basePrice: 'R$ 342,00',
          badge: 'Premium',
          details: [
            'Apartamento single superior: R$ 342,00 + 5% ISS a diária',
            'Apartamento duplo superior: R$ 388,00 + 5% ISS a diária',
            'Apartamento single luxo: R$ 377,00 + 5% ISS a diária',
            'Apartamento duplo luxo: R$ 422,00 + 5% ISS a diária',
            'Apartamento single suíte luxo: R$ 468,00 + 5% ISS a diária',
            'Apartamento duplo suíte luxo: R$ 536,00 + 5% ISS a diária',
            'Incluso: café da manhã e Wi-Fi',
            'Check-in: 14:00 | Check-out: 12:00'
          ]
        },
        {
          _key: 'hotel-25',
          name: 'Plaza São Rafael',
          distance: '7,7 km da PUCRS',
          basePrice: 'R$ 387,00',
          details: [
            'Apartamento single standard: R$ 387,00 a diária',
            'Apartamento duplo standard: R$ 433,00 a diária',
            'Incluso: café da manhã e Wi-Fi',
            'Check-in: 14:00 | Check-out: 12:00'
          ]
        },
        {
          _key: 'hotel-26',
          name: 'Hotel Lancaster POA',
          distance: '7,9 km da PUCRS',
          basePrice: 'R$ 171,00',
          badge: 'Econômico',
          details: [
            'Apartamento single: R$ 171,00 a diária',
            'Apartamento duplo solteiro: R$ 206,00 a diária',
            'Incluso: café da manhã e Wi-Fi',
            'Check-in: 14:00 | Check-out: 12:00'
          ]
        },
        {
          _key: 'hotel-27',
          name: 'Master Express Grande Hotel',
          distance: '8,4 km da PUCRS',
          basePrice: 'R$ 228,00',
          details: [
            'Apartamento single classic: R$ 228,00 a diária',
            'Apartamento duplo classic: R$ 274,00 a diária',
            'Apartamento triplo classic (3 camas): R$ 320,00 a diária',
            'Apartamento família classic (1 casal + 1 solteiro): R$ 354,00 a diária',
            'Incluso: café da manhã e Wi-Fi',
            'Check-in: 14:00 | Check-out: 12:00'
          ]
        },
        {
          _key: 'hotel-28',
          name: 'Fast 10 City Hotel',
          distance: '8,4 km da PUCRS',
          basePrice: 'R$ 251,00',
          details: [
            'Apartamento single: R$ 251,00 a diária',
            'Apartamento duplo: R$ 285,00 a diária',
            'Incluso: café da manhã, Wi-Fi, lavanderia self service e espaço coliving com academia, churrasqueira e cozinha compartilhada',
            'Check-in: 14:00 | Check-out: 12:00'
          ]
        }
      ]
    },

    // Bloco 4 - Passagens Aéreas
    flights: {
      title: 'Passagens aéreas com os melhores preços',
      description: 'Trabalhamos com todas as companhias aéreas nacionais e internacionais. Nossa expertise garante os melhores preços e horários para sua viagem.',
      benefits: [
        {
          title: 'Todas as companhias em um só lugar',
          description: 'Compare e escolha a melhor opção para você'
        },
        {
          title: 'Melhor custo-benefício garantido',
          description: 'Negociação especial para o evento'
        }
      ],
      note: '* O parcelamento no cartão de crédito depende das regras de cada companhia.',
      ctaText: 'SOLICITAR COTAÇÃO!'
    },

    // Bloco 5 - Passeios Exclusivos (14 passeios)
    tours: {
      title: 'Aproveite sua estadia para conhecer o melhor de Porto Alegre e região com nossos tours privativos.',
      info: [
        'Experiências privativas com mínimo de duas pessoas.',
        'Veículos compatíveis com número de passageiros.',
        'City tours incluem parques, igrejas, museus, centros culturais e pontos turísticos (acesso gratuito).',
        'Menores devem estar acompanhados de pais ou responsável.',
        'Cafés e restaurantes podem ser substituídos por equivalentes em caso de fechamento permanente ou temporário da casa.'
      ],
      items: [
        {
          _key: 'tour-1',
          name: 'City tour meio turno com café ao fim da tarde e jantar italiano',
          price: 'R$ 665,00',
          priceDetail: 'por pessoa',
          minimum: 'Saída com mínimo de duas pessoas',
          description: 'Conheça os principais pontos turísticos de Porto Alegre com parada para café e jantar em restaurante italiano tradicional'
        },
        {
          _key: 'tour-2',
          name: 'City tour meio turno com café/happy hour e tempo livre no Cais',
          price: 'R$ 431,00',
          priceDetail: 'por pessoa',
          minimum: 'Saída com mínimo de duas pessoas',
          description: 'Tour pela cidade com parada para happy hour e tempo livre no Cais Embarcadero'
        },
        {
          _key: 'tour-3',
          name: 'Bate e volta de Porto Alegre para dois dias em Gramado e Canela',
          price: 'R$ 1.025,00',
          priceDetail: 'por pessoa',
          minimum: 'Saída com mínimo de duas pessoas',
          description: 'Dois dias completos conhecendo as cidades serranas mais famosas do Sul'
        },
        {
          _key: 'tour-4',
          name: 'Bate e volta de Porto Alegre para dois dias no Vale dos Vinhedos',
          price: 'R$ 1.025,00',
          priceDetail: 'por pessoa',
          minimum: 'Saída com mínimo de duas pessoas',
          description: 'Experiência completa no Vale dos Vinhedos com degustação e visita às vinícolas'
        },
        {
          _key: 'tour-5',
          name: 'Bate e volta de Porto Alegre para dois dias em Bento Gonçalves e Gramado',
          price: 'R$ 1.025,00',
          priceDetail: 'por pessoa',
          minimum: 'Saída com mínimo de duas pessoas',
          description: 'Combinação perfeita entre vinhos e chocolate em dois dias inesquecíveis'
        },
        {
          _key: 'tour-6',
          name: 'City tour meio turno com almoço italiano e tempo livre no Cais',
          price: 'R$ 665,00',
          priceDetail: 'por pessoa',
          minimum: 'Saída com mínimo de duas pessoas',
          description: 'Tour cultural com almoço em cantina italiana e passeio livre pelo Cais'
        },
        {
          _key: 'tour-7',
          name: 'City tour de meio turno com almoço churrasco mais tradicional da cidade',
          price: 'R$ 665,00',
          priceDetail: 'por pessoa',
          minimum: 'Saída com mínimo de duas pessoas',
          description: 'Conheça Porto Alegre e saboreie o autêntico churrasco gaúcho'
        },
        {
          _key: 'tour-8',
          name: 'Linha turismo e barco Cisne Branco com happy hour e tempo livre no Cais',
          price: 'R$ 324,00',
          priceDetail: 'por pessoa',
          minimum: 'Saída com mínimo de duas pessoas',
          description: 'Passeio de barco pelo Guaíba com happy hour e tempo livre'
        },
        {
          _key: 'tour-9',
          name: 'Combo linha turismo + barco Cisne Branco',
          price: 'R$ 192,00',
          priceDetail: 'por pessoa',
          minimum: 'Saída com mínimo de duas pessoas',
          description: 'Percurso: Centro Histórico e ilhas'
        },
        {
          _key: 'tour-10',
          name: 'City tour meio turno com happy hour italiano',
          price: 'R$ 560,00',
          priceDetail: 'por pessoa',
          minimum: 'Saída com mínimo de duas pessoas',
          description: 'Passeio cultural com happy hour em cantina italiana'
        },
        {
          _key: 'tour-11',
          name: 'City tour meio turno com café a tarde e jantar com vinhos e cachaças gaúchas',
          price: 'R$ 748,00',
          priceDetail: 'por pessoa',
          minimum: 'Saída com mínimo de duas pessoas',
          description: 'Experiência gastronômica completa com bebidas típicas gaúchas'
        },
        {
          _key: 'tour-12',
          name: 'Bate e volta Porto Alegre para Nova Petrópolis com city tour',
          price: 'R$ 722,00',
          priceDetail: 'por pessoa',
          minimum: 'Saída com mínimo de duas pessoas',
          description: 'Conheça a cidade mais alemã do Brasil em um dia completo'
        },
        {
          _key: 'tour-13',
          name: 'Bate e volta Porto Alegre para Gramado e Canela com city tour',
          price: 'R$ 722,00',
          priceDetail: 'por pessoa',
          minimum: 'Saída com mínimo de duas pessoas',
          description: 'Tour completo pelas cidades serranas em um dia'
        },
        {
          _key: 'tour-14',
          name: 'Bate e volta de Porto Alegre para Bento Gonçalves com city tour',
          price: 'R$ 722,00',
          priceDetail: 'por pessoa',
          minimum: 'Saída com mínimo de duas pessoas',
          description: 'Dia completo na capital do vinho brasileiro'
        }
      ]
    },

    // Bloco 6 - Condições de Pagamento
    payment: {
      title: 'Conheça nossas formas de pagamento',
      accommodationAndTours: {
        options: [
          {
            times: '1 vez',
            method: 'via boleto bancário ou Pix'
          },
          {
            times: '5 vezes',
            method: 'via Pix (parcelas mensais e quitação antes do check-in)'
          },
          {
            times: 'Até 10 vezes',
            method: 'via cartão de crédito (nesta modalidade, o valor pode sofrer alteração)'
          }
        ],
        note: 'O não pagamento na data estipulada, acarretará no cancelamento automático da reserva*'
      },
      travelInsurance: {
        period: 'Período: 23 a 26 de novembro',
        planName: 'Plano Nacional 60.000',
        prices: [
          {
            ageRange: 'Até 64 anos',
            price: 'R$ 41,80'
          },
          {
            ageRange: '65 até 85 anos',
            price: 'R$ 62,70'
          },
          {
            ageRange: '86 até 89 anos',
            price: 'R$ 125,40'
          }
        ],
        note: '*Consulte valores para períodos menores ou maiores!',
        paymentMethods: [
          '1 vez via boleto bancário ou Pix',
          '5 vezes via pix (parcelas mensais e quitação antes do check-in)',
          'Consulte o parcelamento no cartão de crédito'
        ]
      },
      ctaText: 'SOLICITAR COTAÇÃO'
    },

    // Bloco 7 - Por que Escolher
    whyChoose: {
      title: 'Por que escolher a 24H?',
      description: 'Somos especialistas em transformar a complexidade da organização de viagens para eventos em uma experiência fluida e tranquila.',
      benefits: [
        'Disponibilidade 24/7 - Suporte técnico permanente com atendimento especializado da própria equipe.',
        'Negociação de tarifas - Condições comerciais diferenciadas através de nossa rede de fornecedores.',
        'Expertise técnica - Equipe com formação superior e +20 anos de experiência no setor.',
        'Gestão personalizada - Atendimento dedicado com profissional especializado no seu perfil.',
        'Rede consolidada - Parcerias estratégicas com ampla rede de fornecedores nacionais e internacionais.',
        'Controle financeiro - Sistema de relatórios gerenciais parametrizados por centros de custos.'
      ],
      stats: [
        { _key: 'stat-1', number: '2015', text: 'Desde' },
        { _key: 'stat-2', number: '+20', text: 'Anos de experiência' },
        { _key: 'stat-3', number: '100%', text: 'Satisfação garantida' },
        { _key: 'stat-4', number: '24/7', text: 'Suporte durante o evento' }
      ]
    },

    // Bloco 8 - Sobre a 24H
    about24H: {
      title: 'Soluções completas para sua viagem de lazer ou negócios',
      description: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Fundada em 2015, a 24H Escritório de Viagens nasceu com uma proposta clara: oferecer soluções completas para viagens de lazer e corporativas. Nosso nome reflete exatamente nossa filosofia de trabalho - estar disponível quando você precisar, combinando a praticidade de um escritório de viagens com o profissionalismo que grandes eventos exigem.'
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Nossa equipe é majoritariamente composta por mulheres com mais de 20 anos de expertise no agenciamento de viagens, o que nos proporciona uma visão única sobre as necessidades dos viajantes e a sensibilidade necessária para cuidar de cada detalhe da sua experiência.'
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Trabalhamos com uma ampla gama de fornecedores estratégicos que nos permitem oferecer desde serviços avulsos como passagens aéreas, seguros, locação de veículos, hospedagem, vistos e câmbio, até a personalização completa de pacotes sob medida.'
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Quando você escolhe a 24H, está optando por uma parceria com experiência comprovada, relacionamentos sólidos no mercado e uma reputação construída dia após dia através da satisfação de nossos clientes.'
            }
          ]
        }
      ],
      foundedYear: '2015',
      ctaText: 'FALE COM UM ESPECIALISTA!'
    },

    // Bloco 9 - Formulário de Contato
    contact: {
      title: 'Preencha o formulário abaixo e receba uma proposta exclusiva em até 24 horas!',
      subtitle: 'Solicite seu pacote personalizado',
      ctaText: 'RECEBER PROPOSTA PERSONALIZADA'
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
    throw error;
  }
}

populateCBEnfPage()
  .then(() => {
    console.log('✅ População concluída!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Erro fatal:', error);
    process.exit(1);
  });
