import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'kyx4ncqy',
  dataset: 'production',
  useCdn: false,
  token: 'skh0fXGfGbFzV6JobCH6RB35eblxm2wbRbpgeMMgLG3flirT713Z4GnA54R5Qv6ZO7iqSeHU9vj4pfhg2W4KSdGm806ucyK73SP5WtUsreffIvMH6R4gXTMsKlX5OmYFtvmIPpnh7mTV2TXkxJsZUieAGwiSJnFuV250Gddol5FN9iXa2Qnq'
})

// Dados da Homepage
const homepageData = {
  _type: 'homepage',
  title: '24H Escritório de Viagens - Homepage',
  isActive: true,
  seoTitle: '24H Escritório de Viagens - Gestão completa de viagens de negócios e lazer',
  seoDescription: 'Soluções estratégicas com atendimento 24/7 e mais de 20 anos de experiência no mercado',
  hero: {
    title: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Gestão completa de viagens de negócios e lazer'
          }
        ]
      }
    ],
    subtitle: 'Soluções estratégicas com atendimento 24/7 e mais de 20 anos de experiência no mercado',
    ctaText: 'FALE COM UM ESPECIALISTA!'
  },
  metrics: {
    items: [
      {
        _key: 'metric1',
        value: '+20',
        label: 'anos de experiência no mercado',
        icon: 'calendar'
      },
      {
        _key: 'metric2',
        value: '24/7',
        label: 'suporte operacional',
        icon: 'clock'
      },
      {
        _key: 'metric3',
        value: '100%',
        label: 'gestão personalizada',
        icon: 'user'
      },
      {
        _key: 'metric4',
        value: '+1000',
        label: 'operações executadas com sucesso',
        icon: 'checkmark'
      }
    ]
  },
  problems: {
    title: 'Descomplique sua rotina de viagens com quem entende do assunto',
    subtitle: 'Resolvemos os principais problemas de quem viaja',
    items: [
      {
        _key: 'problem1',
        title: 'Sem tempo para planejar?',
        description: 'Nossa equipe especializada cuida de cada etapa da sua viagem, enquanto você foca no que realmente importa.'
      },
      {
        _key: 'problem2',
        title: 'Gastos fora de controle?',
        description: 'Reduza custos com nossas tarifas corporativas e parcerias estratégicas com fornecedores do setor de turismo.'
      },
      {
        _key: 'problem3',
        title: 'Problemas no meio da viagem?',
        description: 'Nossa equipe está disponível 24 horas por dia, pronta para resolver qualquer imprevisto durante a sua viagem.'
      },
      {
        _key: 'problem4',
        title: 'Burocracia em excesso?',
        description: 'Oferecemos um sistema integrado para facilitar processos como reembolsos, solicitações e aprovações, com fluxos 100% digitais.'
      },
      {
        _key: 'problem5',
        title: 'Roteiros genéricos?',
        description: 'Personalizamos roteiros, passeios e experiências para garantir que cada viagem seja única, agradável e memorável.'
      },
      {
        _key: 'problem6',
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
            text: 'Na 24H, transformamos cada viagem em uma experiência única e sem preocupações. Seja a trabalho, lazer ou para um evento especial, somos sua consultoria estratégica completa em gestão de viagens. Conte com a nossa ampla rede de fornecedores e a expertise da nossa equipe especializada para garantir excelência em cada etapa da sua viagem. Da seleção de destinos e passagens aéreas à hospedagem, traslados, atividades e roteiros, coordenamos cada detalhe com precisão para você.'
          }
        ]
      }
    ],
    ctaText: 'FALE COM UM ESPECIALISTA!'
  },
  clients: {
    title: 'Nossos Clientes',
    logos: []
  },
  services: {
    title: 'Nossos Serviços',
    items: [
      {
        _key: 'service1',
        title: 'Viagens corporativas',
        description: 'Otimize sua gestão de viagens empresariais com nossa gestão de passagens, hospedagens, traslados executivos e relatórios detalhados por centro de custos. Atendemos desde viagens individuais até grandes grupos e programas de incentivo, garantindo economia, agilidade e total conformidade com as políticas da sua empresa.',
        link: '/corporate',
        ctaText: 'SAIBA MAIS!'
      },
      {
        _key: 'service2',
        title: 'Viagens de lazer',
        description: 'Transforme suas férias em experiências únicas com nosso planejamento especializado. Cuidamos de passagens, hospedagens, câmbio, roteiros turísticos e até passeios exclusivos. Nossa equipe resolve todos os detalhes operacionais para que você se preocupe apenas em aproveitar cada momento da sua viagem.',
        link: '/lazer',
        ctaText: 'SAIBA MAIS!'
      },
      {
        _key: 'service3',
        title: 'Viagens para eventos',
        description: 'Cuidamos de toda a logística de viagens para feiras, congressos, convenções e encontros corporativos, atendendo empresas, palestrantes e participantes. Fornecemos assessoria personalizada e gerimos passagens aéreas e rodoviárias, reservas, transfers e passeios pré e pós-evento.',
        link: '/eventos-info',
        ctaText: 'SAIBA MAIS!'
      }
    ]
  },
  whyChoose: {
    title: 'Por que escolher a 24H?',
    items: [
      {
        _key: 'why1',
        title: 'Disponibilidade 24/7',
        description: 'Suporte técnico permanente com atendimento especializado da própria equipe.'
      },
      {
        _key: 'why2',
        title: 'Negociação de tarifas',
        description: 'Condições comerciais diferenciadas através de nossa rede de fornecedores.'
      },
      {
        _key: 'why3',
        title: 'Expertise técnica',
        description: 'Equipe com formação superior e +20 anos de experiência no setor.'
      },
      {
        _key: 'why4',
        title: 'Gestão personalizada',
        description: 'Atendimento dedicado com profissional especializado no seu perfil.'
      },
      {
        _key: 'why5',
        title: 'Rede consolidada',
        description: 'Parcerias estratégicas com ampla rede de fornecedores nacionais e internacionais.'
      },
      {
        _key: 'why6',
        title: 'Controle financeiro',
        description: 'Sistema de relatórios gerenciais parametrizados por centros de custos.'
      }
    ]
  },
  aboutCompany: {
    title: 'Sobre a 24H',
    subtitle: 'Mais de duas décadas especializados em gestão de viagens',
    description: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'A 24H Escritório de Viagens é uma agência especializada em viagens corporativas, de lazer, turismo de incentivo e eventos. Com mais de 20 anos de experiência no mercado, nossa equipe atua com excelência na gestão de viagens nacionais e internacionais, oferecendo soluções completas e personalizadas para empresas, famílias e clientes individuais. Cuidamos de todas as etapas da viagem, desde a cotação até a emissão de passagens, reservas de hotéis, traslados, câmbio, seguros, vistos, locação de veículos, roteiros turísticos e ingressos. Trabalhamos com uma ampla rede de fornecedores e parceiros nos setores aéreo, hoteleiro e de turismo, garantindo agilidade, economia e segurança em cada atendimento. Nosso compromisso é oferecer uma experiência de viagem tranquila, eficiente e sem imprevistos, com suporte disponível 24 horas por dia, 7 dias por semana.'
          }
        ]
      }
    ],
    ctaText: 'FALE COM UM ESPECIALISTA!'
  },
  team: {
    title: 'Nossa Equipe',
    members: [
      {
        _key: 'member1',
        name: 'Betinna Pavim',
        role: 'CEO|COO',
        education: 'Bacharel em Turismo com ênfase em Hotelaria',
        experience: '20 anos de experiência com agenciamento de viagens'
      },
      {
        _key: 'member2',
        name: 'Liciane Rossetto',
        role: 'CEO|CFO',
        education: 'Doutora em Turismo',
        experience: '30 anos de experiência no setor turístico'
      }
    ],
    ctaText: 'CONHEÇA NOSSA EQUIPE COMPLETA'
  },
  testimonials: {
    title: 'Depoimentos',
    subtitle: 'O que nossos clientes dizem sobre nós',
    items: [
      {
        _key: 'testimonial1',
        name: 'Christian Bittencourt',
        text: 'Escritório sempre atento às necessidades dos clientes, e muito proativo nas resoluções de toda e qualquer situação.',
        rating: 5
      },
      {
        _key: 'testimonial2',
        name: 'Renato Saffi',
        text: 'Já fiz várias viagens com a 24H. Sempre excelentes no atendimento, realizaram nossos sonhos de viagens e passeios com conforto e tranquilidade.',
        rating: 5
      },
      {
        _key: 'testimonial3',
        name: 'Gabriela Vaz',
        text: 'Os pacotes foram de excelente custo-benefício. Ficamos em ótimos hotéis e os passeios propostos foram excelentes pedidas.',
        rating: 5
      }
    ]
  },
  contact: {
    title: 'Precisa de ajuda para organizar sua viagem?',
    subtitle: 'Preencha o formulário e nossa equipe especializada entrará em contato com você em breve.',
    formTitle: 'Formulário de Contato'
  }
}

async function populateHomepage() {
  try {
    console.log('Criando documento Homepage...')
    const homepageResult = await client.create(homepageData)
    console.log('Homepage criada:', homepageResult._id)
    console.log('Homepage populada com sucesso!')
  } catch (error) {
    console.error('Erro ao criar homepage:', error)
  }
}

populateHomepage()