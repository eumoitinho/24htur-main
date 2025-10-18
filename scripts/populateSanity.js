import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'kyx4ncqy',
  dataset: 'production',
  useCdn: false,
  token: 'skh0fXGfGbFzV6JobCH6RB35eblxm2wbRbpgeMMgLG3flirT713Z4GnA54R5Qv6ZO7iqSeHU9vj4pfhg2W4KSdGm806ucyK73SP5WtUsreffIvMH6R4gXTMsKlX5OmYFtvmIPpnh7mTV2TXkxJsZUieAGwiSJnFuV250Gddol5FN9iXa2Qnq'
})

// Dados da Página Sobre
const sobrePageData = {
  _type: 'sobrePage',
  title: 'Sobre a 24H',
  isActive: true,
  seoTitle: 'Sobre a 24H Escritório de Viagens - Mais de 20 anos de experiência',
  seoDescription: 'Conheça a 24H Escritório de Viagens, especializada em gestão de viagens de lazer, negócios e eventos com mais de 20 anos de expertise.',
  hero: {
    title: 'Sobre a 24H',
    subtitle: 'Conheça nossa história, propósito e valores'
  },
  about: {
    title: 'Nossa História',
    description: 'Com mais de 20 anos de expertise, a 24H Escritório de Viagens se consolidou como uma agência especializada e líder na gestão de viagens de lazer, negócios e eventos, nacionais e internacionais. Oferecemos soluções completas e personalizadas, atendendo às necessidades de empresas, famílias, grupos e clientes individuais com a máxima dedicação e profissionalismo. Na 24H, cuidamos de todas as etapas da sua viagem, garantindo uma experiência tranquila e sem imprevistos. Nossos serviços abrangem desde a cotação e emissão de passagens até reservas de hotéis, traslados, câmbio, seguros, vistos, locação de veículos, roteiros turísticos e ingressos.',
    mission: 'O propósito da 24H Escritório de Viagens é ir além do agenciamento. Buscamos a excelência e a disponibilidade contínua no agenciamento de viagens de lazer e negócios, com o objetivo de sempre superar as expectativas de nossos clientes. Valorizamos profundamente a colaboração e o relacionamento com nossos colaboradores e fornecedores, reconhecendo que são pilares essenciais para o nosso sucesso.',
    vision: 'Trabalhamos com uma ampla e consolidada rede de fornecedores e parceiros nos setores aéreo, hoteleiro e de turismo, o que nos permite assegurar agilidade, economia e segurança em cada atendimento. Nosso compromisso primordial é oferecer um suporte disponível 24 horas por dia, 7 dias por semana, para que você tenha total tranquilidade em qualquer situação.'
  },
  values: [
    {
      title: 'Personalização',
      description: 'Acreditamos que cada viagem é única. Por isso, adaptamos nossos serviços para atender às necessidades e desejos individuais de cada cliente, criando experiências sob medida.'
    },
    {
      title: 'Disponibilidade',
      description: 'Estamos sempre presentes para nossos clientes. Nosso suporte 24/7 e a acessibilidade da nossa equipe garantem que você nunca esteja sozinho, independentemente do fuso horário ou da situação.'
    },
    {
      title: 'Comprometimento',
      description: 'Nos dedicamos integralmente a cada projeto e a cada cliente, garantindo que todos os detalhes sejam cuidadosamente planejados e executados com a máxima precisão.'
    },
    {
      title: 'Ética profissional',
      description: 'Atuamos com transparência, integridade e responsabilidade em todas as nossas relações, construindo confiança e credibilidade no mercado.'
    },
    {
      title: 'Foco no resultado',
      description: 'Buscamos a eficiência e a otimização em todos os processos, visando sempre os melhores resultados para nossos clientes, seja em economia, agilidade ou satisfação.'
    },
    {
      title: 'Aperfeiçoamento constante',
      description: 'Investimos no desenvolvimento contínuo de nossa equipe e na busca por inovações, garantindo que estejamos sempre à frente no mercado de viagens.'
    },
    {
      title: 'Diversidade',
      description: 'Temos orgulho de ter uma equipe composta majoritariamente por mulheres em posições de liderança, possibilitando uma perspectiva mais diversa e empática em nosso atendimento.'
    }
  ]
}

// Dados da Página Equipe
const equipePageData = {
  _type: 'equipePage',
  title: 'Nossa Equipe',
  isActive: true,
  seoTitle: 'Nossa Equipe - Profissionais especializados em turismo',
  seoDescription: 'Conheça nossa equipe de profissionais altamente qualificados e apaixonados por turismo, com mais de 20 anos de experiência.',
  hero: {
    title: 'Nossa Equipe',
    subtitle: 'Por trás de cada viagem bem-sucedida e de cada cliente satisfeito, existe uma equipe de profissionais altamente qualificados e apaixonados pelo que fazem.'
  },
  team: [
    {
      name: 'Betinna Pavim',
      position: 'CEO|COO',
      bio: 'Bacharel em Turismo com ênfase em Hotelaria pelo Centro Universitário Medotista IPA',
      email: 'betinna@24h.tur.br',
      phone: '(51) 3516-0098'
    },
    {
      name: 'Liciane Rossetto',
      position: 'CEO|CFO',
      bio: 'Bacharel em Turismo pela PUCRS; Especialista pela UDESC; Mestre pela UFSC; Doutora pela PUCRS EPATUR; Alitália; Anita Pires e Associados; Multieventos Promoção e Organização de Eventos; BRK Consultores Associados; Soluções Integradas Consulting – 30 anos de experiência no Turismo',
      email: 'liciane@24h.tur.br',
      phone: '(51) 3516-0098'
    },
    {
      name: 'Letícia Wonsovicz Bastos',
      position: 'Diretora SAO',
      bio: 'Bacharel em Nutrição. Empresária Mon Bureau Coworking em Alphaville',
      email: 'leticia@24h.tur.br',
      phone: '(11) 99999-9999'
    },
    {
      name: 'Marta Dal Molin',
      position: 'Diretora FLN',
      bio: 'Tecnóloga em Gestão, Pós-Graduada em Administração e Marketing. Empresária com 20 anos de experiência em Redes Hoteleiras',
      email: 'marta@24h.tur.br',
      phone: '(48) 99999-9999'
    },
    {
      name: 'Renata Barbiani',
      position: 'Corporativo e Eventos',
      bio: 'Bacharel em Turismo pela PUCRS. Queensberry (2 anos); Secretaria Municipal de Turismo (2 anos); Ouro e Prata (12 anos); Sinal Viagens',
      email: 'renata@24h.tur.br',
      phone: '(51) 3516-0098'
    },
    {
      name: 'Karine Vigil',
      position: 'Corporativo e Eventos',
      bio: 'Bacharel em Turismo ênfase em Hotelaria pelo Centro Universitário Medotista IPA. Oritur (1 ano); Plus Eventos (2 anos); Fellini Eventos (1 ano); Innovare Viagens (proprietária 15 anos)',
      email: 'karine@24h.tur.br',
      phone: '(51) 3516-0098'
    },
    {
      name: 'Débora Galo',
      position: 'Corporativo',
      bio: 'Bacharelado em Turismo pela FARGS. GalFer\'s Viagens e Turismo (22 anos)',
      email: 'debora@24h.tur.br',
      phone: '(51) 3516-0098'
    },
    {
      name: 'Fernanda Medeiros',
      position: 'Travel Designer',
      bio: 'Bacharel Jornalismo e Comunicação Social (UNISINOS). Travel Plan Viagens (6 anos); Montrel Viagens & Turismo (1 ano); CVC Operadora (7 anos)',
      email: 'fernanda@24h.tur.br',
      phone: '(51) 3516-0098'
    },
    {
      name: 'Jorge Gabriel',
      position: 'Roteiros Especiais',
      bio: 'Licenciado em Geografia, Tecnólogo em Gestão Ambiental e pós-graduado. Gol Linhas Aéreas (4 anos); FluTour PUCRS (5 anos); Gerente CVC (2 anos)',
      email: 'jorge@24h.tur.br',
      phone: '(51) 3516-0098'
    },
    {
      name: 'Elci Tem Pass',
      position: 'Financeiro',
      bio: 'Mercatur Operadora (4 anos); Skyteam Consolidadora (2 anos); Oritur (4 anos); Wagons Lits (14 anos)',
      email: 'elci@24h.tur.br',
      phone: '(51) 3516-0098'
    }
  ],
  benefits: [
    {
      title: 'Ambiente Colaborativo',
      description: 'Trabalhe em uma equipe unida e apoie uns aos outros.'
    },
    {
      title: 'Desenvolvimento Profissional',
      description: 'Oportunidades de crescimento e capacitação constante.'
    },
    {
      title: 'Benefícios Únicos',
      description: 'Pacote de benefícios competitivo e flexibilidade no trabalho.'
    }
  ]
}

// Dados da Página Eventos Info
const eventosInfoPageData = {
  _type: 'eventosInfoPage',
  title: 'Viagens para Eventos',
  isActive: true,
  seoTitle: 'Viagens para Eventos - Especialistas em logística de eventos',
  seoDescription: 'Somos especialistas em transformar a complexidade da organização de viagens para eventos em uma experiência fluida e tranquila.',
  hero: {
    title: 'Viagens para Eventos',
    subtitle: 'Somos especialistas em transformar a complexidade da organização de viagens para eventos em uma experiência fluida e tranquila, garantindo que palestrantes, equipes, organizadores e visitantes cheguem ao seu destino com conforto e pontualidade.',
    ctaText: 'SAIBA MAIS!'
  },
  about: {
    title: 'Eventos que Marcam',
    description: 'Criamos eventos corporativos memoráveis que conectam pessoas, fortalecem relacionamentos e geram resultados concretos para sua empresa.'
  },
  features: [
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
    }
  ],
  services: [
    {
      title: 'Cotação e locação de salas para eventos',
      description: 'Auxiliamos na escolha e reserva de espaços ideais para suas reuniões, conferências ou workshops.'
    },
    {
      title: 'Contratação de Serviços de Alimentos e Bebidas (A&B)',
      description: 'Gerenciamos a parte gastronômica do seu evento, desde coffee breaks a jantares de gala, com opções que se encaixam no seu perfil e orçamento.'
    }
  ],
  cta: {
    title: 'Pronto para Criar um Evento Inesquecível?',
    description: 'Nossa equipe de especialistas está pronta para transformar sua visão em realidade. Vamos conversar sobre seu próximo evento?'
  }
}

// Função para criar documentos
async function populateSanity() {
  try {
    console.log('Criando documento Sobre Page...')
    const sobreResult = await client.create(sobrePageData)
    console.log('Sobre Page criada:', sobreResult._id)

    console.log('Criando documento Equipe Page...')
    const equipeResult = await client.create(equipePageData)
    console.log('Equipe Page criada:', equipeResult._id)

    console.log('Criando documento Eventos Info Page...')
    const eventosInfoResult = await client.create(eventosInfoPageData)
    console.log('Eventos Info Page criada:', eventosInfoResult._id)

    console.log('Todos os documentos foram criados com sucesso!')
  } catch (error) {
    console.error('Erro ao criar documentos:', error)
  }
}

populateSanity()