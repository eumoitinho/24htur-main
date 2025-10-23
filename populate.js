const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'kyx4ncqy',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || ''
});

async function populateSanity() {
  console.log('🚀 Iniciando população do Sanity...');

  // Página Home
  const homeData = {
    _id: 'homePage-1',
    _type: 'homePage',
    hero: {
      title: 'Gestão completa de viagens de negócios e lazer',
      subtitle: 'Soluções estratégicas com atendimento 24/7 e mais de 20 anos de experiência no mercado',
      ctaText: 'FALE COM UM ESPECIALISTA!'
    },
    metrics: [
      {
        value: '+20',
        label: 'anos de experiência no mercado'
      },
      {
        value: '24/7',
        label: 'suporte operacional'
      },
      {
        value: '100%',
        label: 'gestão personalizada'
      },
      {
        value: '+1000',
        label: 'operações executadas com sucesso'
      }
    ],
    problems: {
      title: 'Descomplique sua rotina de viagens com quem entende do assunto',
      items: [
        {
          title: 'Sem tempo para planejar?',
          description: 'Nossa equipe especializada cuida de cada etapa da sua viagem, enquanto você foca no que realmente importa.'
        },
        {
          title: 'Gastos fora de controle?',
          description: 'Reduza custos com nossas tarifas corporativas e parcerias estratégicas com fornecedores do setor de turismo.'
        },
        {
          title: 'Problemas no meio da viagem?',
          description: 'Nossa equipe está disponível 24 horas por dia, pronta para resolver qualquer imprevisto durante a sua viagem.'
        },
        {
          title: 'Burocracia em excesso?',
          description: 'Oferecemos um sistema integrado para facilitar processos como reembolsos, solicitações e aprovações, com fluxos 100% digitais.'
        },
        {
          title: 'Roteiros genéricos?',
          description: 'Personalizamos roteiros, passeios e experiências para garantir que cada viagem seja única, agradável e memorável.'
        },
        {
          title: 'Desafios no exterior?',
          description: 'Auxiliamos no processo de compra de moeda estrangeira e aquisição de cartão de débito e chip internacional.'
        }
      ]
    },
    experience: {
      title: 'Viva a experiência 24H',
      description: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Na 24H, transformamos cada viagem em uma experiência única e sem preocupações. Seja a trabalho, lazer ou para um evento especial, somos sua consultoria estratégica completa em gestão de viagens.'
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Conte com a nossa ampla rede de fornecedores e a expertise da nossa equipe especializada para garantir excelência em cada etapa da sua viagem. Da seleção de destinos e passagens aéreas à hospedagem, traslados, atividades e roteiros, coordenamos cada detalhe com precisão para você.'
            }
          ]
        }
      ],
      ctaText: 'FALE COM UM ESPECIALISTA!'
    },
    clients: {
      title: 'NOSSOS CLIENTES',
      placeholder: '(Aguardando envio pela cliente)'
    },
    services: {
      title: 'NOSSOS SERVIÇOS',
      items: [
        {
          title: 'Viagens corporativas',
          description: 'Otimize sua gestão de viagens empresariais com nossa gestão de passagens, hospedagens, traslados executivos e relatórios detalhados por centro de custos. Atendemos desde viagens individuais até grandes grupos e programas de incentivo, garantindo economia, agilidade e total conformidade com as políticas da sua empresa.',
          link: '/corporate',
          ctaText: 'SAIBA MAIS!'
        },
        {
          title: 'Viagens de lazer',
          description: 'Transforme suas férias em experiências únicas com nosso planejamento especializado. Cuidamos de passagens, hospedagens, câmbio, roteiros turísticos e até passeios exclusivos. Nossa equipe resolve todos os detalhes operacionais para que você se preocupe apenas em aproveitar cada momento da sua viagem.',
          link: '/lazer',
          ctaText: 'SAIBA MAIS!'
        },
        {
          title: 'Viagens para eventos',
          description: 'Cuidamos de toda a logística de viagens para feiras, congressos, convenções e encontros corporativos, atendendo empresas, palestrantes e participantes. Fornecemos assessoria personalizada e gerimos passagens aéreas e rodoviárias, reservas, transfers e passeios pré e pós-evento.',
          link: '/eventos',
          ctaText: 'SAIBA MAIS!'
        }
      ]
    },
    whyChoose: {
      title: 'Por que escolher a 24H?',
      items: [
        {
          title: 'Disponibilidade 24/7',
          description: 'Suporte técnico permanente com atendimento especializado da própria equipe.'
        },
        {
          title: 'Negociação de tarifas',
          description: 'Condições comerciais diferenciadas através de nossa rede de fornecedores.'
        },
        {
          title: 'Expertise técnica',
          description: 'Equipe com formação superior e +20 anos de experiência no setor.'
        },
        {
          title: 'Gestão personalizada',
          description: 'Atendimento dedicado com profissional especializado no seu perfil.'
        },
        {
          title: 'Rede consolidada',
          description: 'Parcerias estratégicas com ampla rede de fornecedores nacionais e internacionais.'
        },
        {
          title: 'Controle financeiro',
          description: 'Sistema de relatórios gerenciais parametrizados por centros de custos.'
        }
      ]
    },
    about: {
      badge: 'SOBRE A 24H',
      title: 'Mais de duas décadas especializados em gestão de viagens',
      description: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'A 24H Escritório de Viagens é uma agência especializada em viagens corporativas, de lazer, turismo de incentivo e eventos. Com mais de 20 anos de experiência no mercado, nossa equipe atua com excelência na gestão de viagens nacionais e internacionais, oferecendo soluções completas e personalizadas para empresas, famílias e clientes individuais.'
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Cuidamos de todas as etapas da viagem, desde a cotação até a emissão de passagens, reservas de hotéis, traslados, câmbio, seguros, vistos, locação de veículos, roteiros turísticos e ingressos. Trabalhamos com uma ampla rede de fornecedores e parceiros nos setores aéreo, hoteleiro e de turismo, garantindo agilidade, economia e segurança em cada atendimento.'
            }
          ]
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Nosso compromisso é oferecer uma experiência de viagem tranquila, eficiente e sem imprevistos, com suporte disponível 24 horas por dia, 7 dias por semana.'
            }
          ]
        }
      ],
      ctaText: 'FALE COM UM ESPECIALISTA!',
      stats: [
        { value: '3', label: 'Escritórios no Brasil' },
        { value: '+20', label: 'Anos de experiência' },
        { value: '24/7', label: 'Suporte dedicado' },
        { value: '100%', label: 'Gestão personalizada' }
      ]
    },
    team: {
      title: 'NOSSA EQUIPE',
      members: [
        {
          name: 'Betinna Pavim',
          role: 'CEO|COO',
          education: 'Bacharel em Turismo com ênfase em Hotelaria',
          experience: '20 anos de experiência com agenciamento de viagens'
        },
        {
          name: 'Liciane Rossetto',
          role: 'CEO|CFO',
          education: 'Doutora em Turismo',
          experience: '30 anos de experiência no setor turístico'
        }
      ],
      ctaText: 'CONHEÇA NOSSA EQUIPE COMPLETA',
      ctaLink: '/equipe'
    },
    testimonials: {
      title: 'DEPOIMENTOS',
      subtitle: 'O que nossos clientes dizem sobre nós',
      items: [
        {
          name: 'Christian Bittencourt',
          text: 'Escritório sempre atento às necessidades dos clientes, e muito proativo nas resoluções de toda e qualquer situação.',
          rating: 5
        },
        {
          name: 'Renato Saffi',
          text: 'Já fiz várias viagens com a 24H. Sempre excelentes no atendimento, realizaram nossos sonhos de viagens e passeios com conforto e tranquilidade.',
          rating: 5
        },
        {
          name: 'Gabriela Vaz',
          text: 'Os pacotes foram de excelente custo-benefício. Ficamos em ótimos hotéis e os passeios propostos foram excelentes pedidas.',
          rating: 5
        }
      ]
    },
    contact: {
      title: 'Precisa de ajuda para organizar sua viagem?',
      subtitle: 'Preencha o formulário e nossa equipe especializada entrará em contato com você em breve.',
      ctaText: 'Enviar mensagem'
    }
  };

  try {
    const result = await client.createOrReplace(homeData);
    console.log('✅ Página Home criada:', result._id);
  } catch (error) {
    console.error('❌ Erro na página Home:', error.message);
  }

  // Página Sobre
  const sobreData = {
    _id: 'sobrePage-1',
    _type: 'sobrePage',
    title: 'SOBRE A 24H',
    intro: 'Com mais de 20 anos de expertise, a 24H Escritório de Viagens se consolidou como uma agência especializada e líder na gestão de viagens de lazer, negócios e eventos, nacionais e internacionais. Oferecemos soluções completas e personalizadas, atendendo às necessidades de empresas, famílias, grupos e clientes individuais com a máxima dedicação e profissionalismo.',
    description: 'Na 24H, cuidamos de todas as etapas da sua viagem, garantindo uma experiência tranquila e sem imprevistos. Nossos serviços abrangem desde a cotação e emissão de passagens até reservas de hotéis, traslados, câmbio, seguros, vistos, locação de veículos, roteiros turísticos e ingressos.\n\nTrabalhamos com uma ampla e consolidada rede de fornecedores e parceiros nos setores aéreo, hoteleiro e de turismo, o que nos permite assegurar agilidade, economia e segurança em cada atendimento. Nosso compromisso primordial é oferecer um suporte disponível 24 horas por dia, 7 dias por semana, para que você tenha total tranquilidade em qualquer situação.',
    purpose: {
      title: 'Nosso propósito',
      description: 'O propósito da 24H Escritório de Viagens é ir além do agenciamento. Buscamos a excelência e a disponibilidade contínua no agenciamento de viagens de lazer e negócios, com o objetivo de sempre superar as expectativas de nossos clientes. Valorizamos profundamente a colaboração e o relacionamento com nossos colaboradores e fornecedores, reconhecendo que são pilares essenciais para o nosso sucesso.'
    },
    values: {
      title: 'Nossos valores',
      intro: 'Nossos valores guiam todas as nossas ações e decisões, refletindo a essência da 24H Escritório de Viagens:',
      items: [
        {
          name: 'Personalização',
          description: 'Acreditamos que cada viagem é única. Por isso, adaptamos nossos serviços para atender às necessidades e desejos individuais de cada cliente, criando experiências sob medida.'
        },
        {
          name: 'Disponibilidade',
          description: 'Estamos sempre presentes para nossos clientes. Nosso suporte 24/7 e a acessibilidade da nossa equipe garantem que você nunca esteja sozinho, independentemente do fuso horário ou da situação.'
        },
        {
          name: 'Comprometimento',
          description: 'Nos dedicamos integralmente a cada projeto e a cada cliente, garantindo que todos os detalhes sejam cuidadosamente planejados e executados com a máxima precisão.'
        },
        {
          name: 'Ética profissional',
          description: 'Atuamos com transparência, integridade e responsabilidade em todas as nossas relações, construindo confiança e credibilidade no mercado.'
        },
        {
          name: 'Foco no resultado',
          description: 'Buscamos a eficiência e a otimização em todos os processos, visando sempre os melhores resultados para nossos clientes, seja em economia, agilidade ou satisfação.'
        },
        {
          name: 'Aperfeiçoamento constante',
          description: 'Investimos no desenvolvimento contínuo de nossa equipe e na busca por inovações, garantindo que estejamos sempre à frente no mercado de viagens.'
        },
        {
          name: 'Diversidade',
          description: 'Temos orgulho de ter uma equipe composta majoritariamente por mulheres em posições de liderança, possibilitando uma perspectiva mais diversa e empática em nosso atendimento.'
        }
      ]
    }
  };

  try {
    const result = await client.createOrReplace(sobreData);
    console.log('✅ Página Sobre criada:', result._id);
  } catch (error) {
    console.error('❌ Erro na página Sobre:', error.message);
  }

  // Página Equipe
  const equipeData = {
    _id: 'equipePage-1',
    _type: 'equipePage',
    title: 'NOSSA EQUIPE',
    intro: 'Por trás de cada viagem bem-sucedida e de cada cliente satisfeito, existe uma equipe de profissionais altamente qualificados e apaixonados pelo que fazem. São eles que transformam seus planos em realidade, oferecendo um atendimento personalizado e a excelência que nos diferencia no mercado.',
    subtitle: 'Conheça os membros da nossa equipe:',
    teamMembers: [
      {
        name: 'Betinna Pavim',
        position: 'CEO|COO',
        education: 'Bacharel em Turismo com ênfase em Hotelaria pelo Centro Universitário Medotista IPA',
        experience: '20 anos de experiência no turismo, dentro de agenciamento de viagens'
      },
      {
        name: 'Liciane Rossetto',
        position: 'CEO|CFO',
        education: 'Bacharel em Turismo pela PUCRS; Especialista pela UDESC; Mestre pela UFSC; Doutora pela PUCRS EPATUR',
        experience: 'Alitália; Anita Pires e Associados; Multieventos Promoção e Organização de Eventos; BRK Consultores Associados; Soluções Integradas Consulting – 30 anos de experiência no Turismo'
      },
      {
        name: 'Letícia Wonsovicz Bastos',
        position: 'Diretora SAO',
        education: 'Bacharel em Nutrição',
        experience: 'Empresária Mon Bureau Coworking em Alphaville'
      },
      {
        name: 'Marta Dal Molin',
        position: 'Diretora FLN',
        education: 'Tecnóloga em Gestão, Pós-Graduada em Administração e Marketing',
        experience: 'Empresária com 20 anos de experiência em Redes Hoteleiras'
      },
      {
        name: 'Renata Barbiani',
        position: 'Corporativo e Eventos',
        education: 'Bacharel em Turismo pela PUCRS',
        experience: 'Queensberry (2 anos); Secretaria Municipal de Turismo (2 anos); Ouro e Prata (12 anos); Sinal Viagens'
      },
      {
        name: 'Karine Vigil',
        position: 'Corporativo e Eventos',
        education: 'Bacharel em Turismo ênfase em Hotelaria pelo Centro Universitário Medotista IPA',
        experience: 'Oritur (1 ano); Plus Eventos (2 anos); Fellini Eventos (1 ano); Innovare Viagens (proprietária 15 anos)'
      },
      {
        name: 'Débora Galo',
        position: 'Corporativo',
        education: 'Bacharelado em Turismo pela FARGS',
        experience: 'GalFer\'s Viagens e Turismo (22 anos)'
      },
      {
        name: 'Fernanda Medeiros',
        position: 'Travel Designer',
        education: 'Bacharel Jornalismo e Comunicação Social (UNISINOS)',
        experience: 'Travel Plan Viagens (6 anos); Montrel Viagens & Turismo (1 ano); CVC Operadora (7 anos)'
      },
      {
        name: 'Jorge Gabriel',
        position: 'Roteiros Especiais',
        education: 'Licenciado em Geografia, Tecnólogo em Gestão Ambiental e pós-graduado',
        experience: 'Gol Linhas Aéreas (4 anos); FluTour PUCRS (5 anos); Gerente CVC (2 anos)'
      },
      {
        name: 'Elci Tem Pass',
        position: 'Financeiro',
        education: '',
        experience: 'Mercatur Operadora (4 anos); Skyteam Consolidadora (2 anos); Oritur (4 anos); Wagons Lits (14 anos)'
      }
    ]
  };

  try {
    const result = await client.createOrReplace(equipeData);
    console.log('✅ Página Equipe criada:', result._id);
  } catch (error) {
    console.error('❌ Erro na página Equipe:', error.message);
  }

  console.log('🎉 População concluída!');
}

populateSanity().catch(console.error);
