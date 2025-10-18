import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'kyx4ncqy',
  dataset: 'production',
  useCdn: false,
  token: 'skh0fXGfGbFzV6JobCH6RB35eblxm2wbRbpgeMMgLG3flirT713Z4GnA54R5Qv6ZO7iqSeHU9vj4pfhg2W4KSdGm806ucyK73SP5WtUsreffIvMH6R4gXTMsKlX5OmYFtvmIPpnh7mTV2TXkxJsZUieAGwiSJnFuV250Gddol5FN9iXa2Qnq'
})

// Dados da Página Opções de Viagem
const opcoesViagemPageData = {
  _type: 'opcoesViagemPage',
  title: 'Opções de Viagem',
  isActive: true,
  seoTitle: 'Opções de Viagem - Descubra o mundo com a 24H',
  seoDescription: 'Explore nossas categorias de viagem e encontre a aventura perfeita para você.',
  hero: {
    title: 'Opções de Viagem',
    subtitle: 'Descubra o mundo com a 24H Escritório de Viagens'
  },
  options: [
    {
      title: '24H ÚNICO',
      description: 'Para clientes que buscam o extraordinário, o programa 24H Único cria roteiros de viagem sob medida, com experiências verdadeiramente exclusivas. Mergulhe em roteiros personalizados, onde cada detalhe é pensado para superar suas expectativas e proporcionar momentos de luxo, privacidade e exclusividade.',
      features: ['Roteiros personalizados', 'Experiências exclusivas', 'Luxo e privacidade']
    },
    {
      title: 'VIVA 24H',
      description: 'Desconecte-se da rotina e reconecte-se com o essencial. O Viva 24H é ideal para quem busca escapadinhas revigorantes, finais de semana inesquecíveis ou a flexibilidade de um home office outdoor. Privilegiamos pequenas hospedagens regionais, charmosas e acolhedoras, que oferecem uma imersão autêntica na cultura local e na beleza natural.',
      features: ['Escapadinhas revigorantes', 'Home office outdoor', 'Hospedagens charmosas']
    },
    {
      title: 'VIAGENS DE INCENTIVO',
      description: 'Nossas Viagens de Incentivo são programas de recompensa corporativos, desenhados para motivar e engajar colaboradores, equipes ou parceiros de negócios. Criamos grupos sob medida, alinhados ao budget da sua empresa e aos objetivos da premiação, garantindo que a experiência de viagem seja um poderoso estímulo para o alcance de metas e a fidelização.',
      features: ['Programas de recompensa', 'Motivação de equipes', 'ROI comprovado']
    },
    {
      title: 'VIAGENS CORPORATIVAS',
      description: 'Para o mundo corporativo, oferecemos soluções completas que garantem a eficiência e a produtividade de cada deslocamento. Seja para produtos individuais – como passagens aéreas, reservas de hotéis, locação de carros ou transporte rodoviário – ou para pacotes de serviços integrados, nosso foco é proporcionar o melhor atendimento para sua viagem de negócios.',
      features: ['Soluções empresariais', 'Gestão integrada', 'Produtividade garantida']
    },
    {
      title: 'VIAJEIRAS',
      description: 'Explore o mundo com a liberdade e a segurança de um grupo feminino. As Viajeiras são viagens criadas para mulheres que buscam experiências personalizadas, em pequenos grupos, com roteiros que refletem seus interesses e paixões.',
      features: ['Grupos femininos', 'Experiências personalizadas', 'Segurança garantida']
    },
    {
      title: 'VIAGENS DE LAZER',
      description: 'Seja para roteiros personalizados, criados exclusivamente para você, ou para produtos de prateleira, como circuitos de viagens e roteiros econômicos, somos especialistas em moldar as oportunidades existentes aos seus desejos, expectativas e possibilidades.',
      features: ['Roteiros exclusivos', 'Circuitos econômicos', 'Experiências únicas']
    },
    {
      title: 'VIAGENS SEGMENTADAS',
      description: 'Nossas Viagens Segmentadas são criadas conforme a preferência do grupo de viajantes, unindo interesses específicos – como práticas esportivas, gastronomia, cultura ou aventura. Montamos pacotes que incluem visitas culturais, experiências gastronômicas e atividades que enriquecem sua jornada, tornando-a verdadeiramente única.',
      features: ['Interesses específicos', 'Experiências gastronômicas', 'Jornadas únicas']
    }
  ],
  benefits: [
    {
      title: 'Disponibilidade 24h',
      description: 'Suporte técnico permanente com atendimento especializado da própria equipe.'
    },
    {
      title: 'Segurança Garantida',
      description: 'Seguros de viagem e assistência completa durante todo o período.'
    },
    {
      title: 'Qualidade Premium',
      description: 'Parcerias com as melhores empresas do setor hoteleiro e aéreo.'
    },
    {
      title: 'Suporte Personalizado',
      description: 'Atendimento dedicado com profissional especializado no seu perfil.'
    }
  ],
  cta: {
    title: 'Pronto para Sua Próxima Viagem?',
    description: 'Entre em contato conosco e descubra como podemos transformar seus planos de viagem em experiências inesquecíveis.'
  }
}

// Dados da Página Trabalhe Conosco
const trabalheConoscoPageData = {
  _type: 'trabalheConoscoPage',
  title: 'Trabalhe Conosco',
  isActive: true,
  seoTitle: 'Trabalhe Conosco - Conecte-se com a 24H',
  seoDescription: 'Se você busca uma oportunidade de fazer parte de uma equipe experiente e dedicada, você encontrou o lugar certo.',
  hero: {
    title: 'Trabalhe Conosco',
    subtitle: 'Conecte-se com a 24H Escritório de Viagens',
    ctaText: 'VER VAGAS DISPONÍVEIS'
  },
  benefits: [
    {
      title: 'Ambiente Colaborativo',
      description: 'Se você busca uma oportunidade de fazer parte de uma equipe experiente e dedicada, que transforma sonhos em realidade e oferece soluções inovadoras no mercado de turismo, você encontrou o lugar certo.'
    },
    {
      title: 'Crescimento Profissional',
      description: 'Se você é apaixonado (a) por desafios, tem experiência no setor de turismo e deseja crescer profissionalmente em um ambiente dinâmico e colaborativo, queremos te conhecer!'
    },
    {
      title: 'Oportunidades Únicas',
      description: 'Preencha o formulário e anexe seu currículo. Sua próxima jornada profissional pode começar aqui.'
    }
  ],
  positions: []
}

// Dados da Página Lazer (usando schema eventosPage temporariamente)
const lazerPageData = {
  _type: 'lazerPage',
  title: 'Viagens de Lazer',
  isActive: true,
  seoTitle: '24H Viagens de Lazer - Sua próxima aventura inesquecível',
  seoDescription: 'Deixe a 24H Escritório de Viagens transformar seus sonhos em realidade, com roteiros personalizados e experiências memoráveis.',
  hero: {
    title: 'Sua próxima aventura inesquecível começa aqui!',
    subtitle: 'Deixe a 24H Escritório de Viagens transformar seus sonhos em realidade, com roteiros personalizados e experiências que ficarão para sempre na sua memória.',
    ctaText: 'FALE AGORA COM UM ESPECIALISTA!'
  },
  services: {
    title: 'Serviços completos para sua viagem de lazer',
    subtitle: 'Tudo que você precisa para uma experiência perfeita',
    items: [
      {
        icon: 'plane',
        title: 'Bilhetes aéreos',
        description: 'Negociação de tarifas diferenciadas e busca pelas melhores opções para seu destino de sonho.'
      },
      {
        icon: 'bed',
        title: 'Hospedagem',
        description: 'Auxílio especializado na escolha de hotéis, resorts ou pousadas que melhor se adequam ao seu estilo e orçamento.'
      },
      {
        icon: 'currency',
        title: 'Câmbio',
        description: 'Facilidade para suas transações financeiras internacionais.'
      },
      {
        icon: 'car',
        title: 'Locação de veículos',
        description: 'Opções variadas para sua mobilidade no destino.'
      },
      {
        icon: 'shield',
        title: 'Seguros de viagem',
        description: 'Proteção completa para você viajar com tranquilidade.'
      },
      {
        icon: 'ticket',
        title: 'Ingressos e passeios',
        description: 'Acesso facilitado a eventos, shows, parques e atrações turísticas.'
      }
    ]
  },
  destinations: {
    title: 'Seu roteiro do seu jeito',
    subtitle: 'Explore diferentes tipos de experiências',
    items: [
      {
        name: 'Viagens de aventura',
        description: 'Para quem busca adrenalina e experiências radicais'
      },
      {
        name: 'Viagens românticas',
        description: 'Momentos especiais para casais apaixonados'
      },
      {
        name: 'Viagens gastronômicas',
        description: 'Descubra sabores únicos ao redor do mundo'
      },
      {
        name: 'Viagens culturais',
        description: 'Explore a história e cultura de diferentes destinos'
      },
      {
        name: 'Viagens para eventos',
        description: 'Participe de festivais e eventos especiais'
      },
      {
        name: 'Viagens de compras',
        description: 'Os melhores destinos para fazer aquela compra especial'
      },
      {
        name: 'Viagens de verão',
        description: 'Destinos paradisíacos para curtir o calor'
      },
      {
        name: 'Viagens de inverno',
        description: 'Experiências únicas na neve e no frio'
      }
    ]
  },
  benefits: {
    title: 'Por que escolher a 24H?',
    items: [
      {
        title: 'Disponibilidade 24H',
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
  cta: {
    title: 'Deixe a 24H cuidar de tudo',
    subtitle: 'Preencha o formulário abaixo e nossa equipe de especialistas em lazer entrará em contato para criar um roteiro personalizado e inesquecível para você.',
    buttonText: 'FALE AGORA COM UM ESPECIALISTA!'
  }
}

// Função para criar documentos restantes
async function populateRemainingPages() {
  try {
    console.log('Criando documento Opções de Viagem Page...')
    const opcoesViagemResult = await client.create(opcoesViagemPageData)
    console.log('Opções de Viagem Page criada:', opcoesViagemResult._id)

    console.log('Criando documento Trabalhe Conosco Page...')
    const trabalheConoscoResult = await client.create(trabalheConoscoPageData)
    console.log('Trabalhe Conosco Page criada:', trabalheConoscoResult._id)

    console.log('Criando documento Lazer Page...')
    const lazerResult = await client.create(lazerPageData)
    console.log('Lazer Page criada:', lazerResult._id)

    console.log('Todos os documentos restantes foram criados com sucesso!')
  } catch (error) {
    console.error('Erro ao criar documentos:', error)
  }
}

populateRemainingPages()