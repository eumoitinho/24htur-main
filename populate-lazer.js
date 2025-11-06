require('dotenv').config();
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'kyx4ncqy',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || process.env.SANITY_TOKEN
});

const DRY_RUN = !!process.env.DRY_RUN;

async function populateLazerPage() {
  console.log('🚀 Iniciando população da página Lazer no Sanity...');

  // Dados da página Lazer conforme especificação
  const lazerData = {
    _id: 'lazerPage-1',
    _type: 'lazerPage',
    title: '24H Escritório de Viagens - Viagens de Lazer',
    isActive: true,
    seoTitle: 'Viagens de Lazer | 24H Escritório de Viagens',
    seoDescription: 'Transforme suas férias em experiências únicas com nosso planejamento especializado. Roteiros personalizados, experiências memoráveis e momentos inesquecíveis.',

    // Bloco 1 - Hero
    hero: {
      title: 'Sua próxima aventura inesquecível começa aqui!',
      subtitle: 'Deixe a 24H Escritório de Viagens transformar seus sonhos em realidade, com roteiros personalizados e experiências que ficarão para sempre na sua memória.',
      ctaText: 'FALE AGORA COM UM ESPECIALISTA!'
    },

    // Bloco 2 - Métricas
    metrics: [
      {
        _key: 'metric-1',
        value: '+20 anos de experiência no mercado'
      },
      {
        _key: 'metric-2',
        value: '24/7 suporte operacional'
      },
      {
        _key: 'metric-3',
        value: '100% gestão personalizada'
      },
      {
        _key: 'metric-4',
        value: '+1000 operações executadas com sucesso'
      }
    ],

    // Bloco 3 - Argumentos
    arguments: {
      title: 'Mais segurança para sua viagem dos sonhos',
      items: [
        {
          _key: 'arg-1',
          question: 'Roteiros genéricos?',
          answer: 'Criamos roteiros personalizados que se encaixam no seu perfil e refletem seus interesses, ritmo e estilo.'
        },
        {
          _key: 'arg-2',
          question: 'Preocupação com o orçamento?',
          answer: 'Planejamos sua viagem para caber dentro do seu orçamento, buscando as melhores tarifas e prevenindo gastos inesperados.'
        },
        {
          _key: 'arg-3',
          question: 'Excesso de opções?',
          answer: 'Facilitamos sua decisão, filtrando o excesso de informações e encontrando o que combina com seu perfil.'
        },
        {
          _key: 'arg-4',
          question: 'Falta de tempo para planejar?',
          answer: 'Cuidamos de todo o planejamento para que você só precise se preocupar em fazer as malas.'
        },
        {
          _key: 'arg-5',
          question: 'Medo de imprevistos?',
          answer: 'Nosso suporte acompanha você durante toda a viagem, solucionando problemas e garantindo que tudo saia como planejado.'
        },
        {
          _key: 'arg-6',
          question: 'Burocracia e documentação?',
          answer: 'Vistos, seguros, vacinas… Orientamos e cuidamos de cada detalhe para que sua documentação esteja em dia.'
        }
      ]
    },

    // Bloco 4 - Experiências
    experiences: {
      title: 'Especialistas em proporcionar experiências memoráveis…',
      description: 'Cada viagem é uma oportunidade única de criar memórias e explorar novos horizontes. A 24H Escritório de Viagens oferece um serviço de agenciamento completo para sua viagem de lazer, cuidando de cada detalhe para que você desfrute ao máximo de seus momentos de descanso e diversão.\n\nCom uma equipe de profissionais com mais de 20 anos de expertise e uma rede extensa de fornecedores, operamos serviços personalizados no Brasil ou no exterior. Nossa missão é proporcionar uma experiência de viagem perfeita, sem preocupações, desde o momento em que você sonha com o destino até o momento em que retorna para casa com o coração cheio de boas lembranças.',
      ctaText: 'FALE AGORA COM UM ESPECIALISTA!'
    },

    // Bloco 5 - Tipos de Viagem
    travelTypes: {
      title: 'Seu roteiro do seu jeito',
      types: [
        {
          _key: 'type-1',
          name: 'Viagens de aventura',
          icon: 'adventure'
        },
        {
          _key: 'type-2',
          name: 'Viagens românticas',
          icon: 'romantic'
        },
        {
          _key: 'type-3',
          name: 'Viagens gastronômica',
          icon: 'food'
        },
        {
          _key: 'type-4',
          name: 'Viagens culturais',
          icon: 'culture'
        },
        {
          _key: 'type-5',
          name: 'Viagens para eventos',
          icon: 'events'
        },
        {
          _key: 'type-6',
          name: 'Viagens de compras',
          icon: 'shopping'
        },
        {
          _key: 'type-7',
          name: 'Viagens de verão',
          icon: 'summer'
        },
        {
          _key: 'type-8',
          name: 'Viagens de inverno',
          icon: 'winter'
        }
      ]
    },

    // Bloco 6 - Serviços
    services: {
      title: 'Serviços completos para sua viagem de lazer',
      ctaText: 'PERSONALIZE DO SEU JEITO!',
      items: [
        {
          _key: 'service-1',
          service: 'Bilhetes aéreos',
          description: 'Negociação de tarifas diferenciadas e busca pelas melhores opções para seu destino de sonho.'
        },
        {
          _key: 'service-2',
          service: 'Hospedagem',
          description: 'Auxílio especializado na escolha de hotéis, resorts ou pousadas que melhor se adequam ao seu estilo e orçamento.'
        },
        {
          _key: 'service-3',
          service: 'Câmbio',
          description: 'Facilidade para suas transações financeiras internacionais.'
        },
        {
          _key: 'service-4',
          service: 'Cartão de débito e chip internacional',
          description: 'Soluções financeiras e de conectividade para suas viagens ao exterior.'
        },
        {
          _key: 'service-5',
          service: 'Sala VIP',
          description: 'Conforto e exclusividade em aeroportos.'
        },
        {
          _key: 'service-6',
          service: 'Encaminhamento de visto',
          description: 'Agilidade nos processos burocráticos para que nada impeça sua viagem.'
        },
        {
          _key: 'service-7',
          service: 'Locação de veículos',
          description: 'Opções variadas para sua mobilidade no destino.'
        },
        {
          _key: 'service-8',
          service: 'Traslados privativos',
          description: 'Planejamento e execução de serviços de traslado Aeroporto/Hotel/Aeroporto.'
        },
        {
          _key: 'service-9',
          service: 'Transporte rodoviário',
          description: 'Soluções para deslocamentos terrestres intermunicipais e interestaduais.'
        },
        {
          _key: 'service-10',
          service: 'Ingressos',
          description: 'Acesso facilitado a eventos, shows, parques e atrações turísticas.'
        },
        {
          _key: 'service-11',
          service: 'Cruzeiros marítimos e fluviais',
          description: 'Opções diferenciadas para uma experiência de viagem única.'
        },
        {
          _key: 'service-12',
          service: 'Tickets de trem',
          description: 'Mobilidade eficiente e paisagens deslumbrantes em diversas regiões.'
        },
        {
          _key: 'service-13',
          service: 'Guias e tradutores',
          description: 'Suporte linguístico e cultural para enriquecer sua experiência.'
        },
        {
          _key: 'service-14',
          service: 'Opções de passeios',
          description: 'Sugestões e organização de roteiros personalizados, de acordo com seus interesses.'
        },
        {
          _key: 'service-15',
          service: 'Wine experiences',
          description: 'Roteiros exclusivos para amantes de vinho, explorando as melhores vinícolas.'
        }
      ]
    },

    // Bloco 7 - Por que escolher
    whyChoose: {
      title: 'Por que escolher a 24H?',
      items: [
        {
          _key: 'reason-1',
          title: 'Disponibilidade 24H',
          description: 'Suporte técnico permanente com atendimento especializado da própria equipe.'
        },
        {
          _key: 'reason-2',
          title: 'Negociação de tarifas',
          description: 'Condições comerciais diferenciadas através de nossa rede de fornecedores.'
        },
        {
          _key: 'reason-3',
          title: 'Expertise técnica',
          description: 'Equipe com formação superior e +20 anos de experiência no setor.'
        },
        {
          _key: 'reason-4',
          title: 'Gestão personalizada',
          description: 'Atendimento dedicado com profissional especializado no seu perfil.'
        },
        {
          _key: 'reason-5',
          title: 'Rede consolidada',
          description: 'Parcerias estratégicas com ampla rede de fornecedores nacionais e internacionais.'
        },
        {
          _key: 'reason-6',
          title: 'Controle financeiro',
          description: 'Sistema de relatórios gerenciais parametrizados por centros de custos.'
        }
      ]
    },

    // Bloco 8 - Sobre a 24H
    aboutCompany: {
      title: 'SOBRE A 24H',
      subtitle: 'Mais de duas décadas especializados em gestão de viagens',
      description: 'A 24H Escritório de Viagens é uma agência especializada em viagens corporativas, de lazer, turismo de incentivo e eventos. Com mais de 20 anos de experiência no mercado, nossa equipe atua com excelência na gestão de viagens nacionais e internacionais, oferecendo soluções completas e personalizadas para empresas, famílias e clientes individuais.\n\nCuidamos de todas as etapas da viagem, desde a cotação até a emissão de passagens, reservas de hotéis, traslados, câmbio, seguros, vistos, locação de veículos, roteiros turísticos e ingressos. Trabalhamos com uma ampla rede de fornecedores e parceiros nos setores aéreo, hoteleiro e de turismo, garantindo agilidade, economia e segurança em cada atendimento.\n\nNosso compromisso é oferecer uma experiência de viagem tranquila, eficiente e sem imprevistos, com suporte disponível 24 horas por dia, 7 dias por semana.',
      ctaText: 'FALE AGORA COM UM ESPECIALISTA!'
    },

    // Bloco 9 - Depoimentos
    testimonials: {
      title: 'DEPOIMENTOS',
      subtitle: 'O que nossos clientes dizem sobre nós',
      items: [
        {
          _key: 'testimonial-1',
          text: 'Escritório sempre atento às necessidades dos clientes, e muito proativo nas resoluções de toda e qualquer situação.',
          author: 'Christian Bittencourt',
          rating: 5
        },
        {
          _key: 'testimonial-2',
          text: 'Já fiz várias viagens com a 24H. Sempre excelentes no atendimento, realizaram nossos sonhos de viagens e passeios com conforto e tranquilidade.',
          author: 'Renato Saffi',
          rating: 5
        },
        {
          _key: 'testimonial-3',
          text: 'Os pacotes foram de excelente custo-benefício. Ficamos em ótimos hotéis e os passeios propostos foram excelentes pedidas.',
          author: 'Gabriela Vaz',
          rating: 5
        }
      ]
    },

    // Bloco 10 - Formulário de Contato
    contactForm: {
      title: 'Deixe a 24H cuidar de tudo',
      subtitle: 'Preencha o formulário abaixo e nossa equipe de especialistas em lazer entrará em contato para criar um roteiro personalizado e inesquecível para você.'
    },

    // Bloco 11 - Rodapé (informações da empresa)
    footer: {
      companyName: '24H Escritório de Viagens',
      addresses: [
        {
          _key: 'address-1',
          address: 'Avenida Carlos Gomes 1672, 7º andar',
          city: 'Porto Alegre, RS'
        },
        {
          _key: 'address-2',
          address: 'Alameda Rio Negro 503, 6º andar',
          city: 'Alphaville, SP'
        },
        {
          _key: 'address-3',
          address: 'Avenida Luiz Boiteaux Piazza, 1302',
          city: 'Florianópolis, SC'
        }
      ],
      phone: '(51) 3516-0098',
      email: 'contato@24h.tur.br',
      socialMedia: [
        {
          _key: 'social-1',
          platform: 'instagram',
          url: 'https://www.instagram.com/24hescritoriodeviagens'
        },
        {
          _key: 'social-2',
          platform: 'facebook',
          url: 'http://www.facebook.com/24HEscritoriodeViagens'
        },
        {
          _key: 'social-3',
          platform: 'linkedin',
          url: 'https://www.linkedin.com/company/24hescritoriodeviagens'
        }
      ]
    }
  };

  try {
    if (DRY_RUN) {
      console.log('🔍 DRY RUN - Dados que seriam enviados:');
      console.log(JSON.stringify(lazerData, null, 2));
      return;
    }

    // Verifica se já existe um documento com esse _id
    const existing = await client.fetch(`*[_id == "${lazerData._id}"][0]`);
    
    if (existing) {
      console.log(`📝 Atualizando documento existente: ${lazerData._id}`);
      const result = await client
        .patch(lazerData._id)
        .set(lazerData)
        .commit();
      console.log('✅ Página Lazer atualizada com sucesso!');
      console.log('📄 ID:', result._id);
    } else {
      console.log(`✨ Criando novo documento: ${lazerData._id}`);
      const result = await client.create(lazerData);
      console.log('✅ Página Lazer criada com sucesso!');
      console.log('📄 ID:', result._id);
    }

    console.log('\n🎉 População concluída!');
    console.log('💡 Acesse o Sanity Studio para visualizar os dados.');
    
  } catch (error) {
    console.error('❌ Erro ao popular página Lazer:', error);
    if (error.response) {
      console.error('📋 Detalhes do erro:', JSON.stringify(error.response.body, null, 2));
    }
    process.exit(1);
  }
}

// Executa o script
if (require.main === module) {
  populateLazerPage()
    .then(() => {
      console.log('✅ Script finalizado com sucesso!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Erro fatal:', error);
      process.exit(1);
    });
}

module.exports = { populateLazerPage };

