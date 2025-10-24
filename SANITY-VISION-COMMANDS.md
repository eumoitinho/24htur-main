// COLE ESTE CÓDIGO NO SANITY STUDIO
// Acesse: http://localhost:3000/studio
// Vá em Tools > Vision
// Cole este código e execute:

// 1. SOBRE PAGE
const sobrePageData = {
  _type: 'sobrePage',
  hero: {
    title: "SOBRE A 24H",
    subtitle: "Com mais de 20 anos de expertise, a 24H Escritório de Viagens se consolidou como uma agência especializada e líder na gestão de viagens de lazer, negócios e eventos, nacionais e internacionais. Oferecemos soluções completas e personalizadas, atendendo às necessidades de empresas, famílias, grupos e clientes individuais com a máxima dedicação e profissionalismo.",
    ctaText: "CONHEÇA NOSSA HISTÓRIA!"
  },
  about: {
    title: "Nossa História",
    description: "Na 24H, cuidamos de todas as etapas da sua viagem, garantindo uma experiência tranquila e sem imprevistos. Nossos serviços abrangem desde a cotação e emissão de passagens até reservas de hotéis, traslados, câmbio, seguros, vistos, locação de veículos, roteiros turísticos e ingressos.\n\nTrabalhamos com uma ampla e consolidada rede de fornecedores e parceiros nos setores aéreo, hoteleiro e de turismo, o que nos permite assegurar agilidade, economia e segurança em cada atendimento. Nosso compromisso primordial é oferecer um suporte disponível 24 horas por dia, 7 dias por semana, para que você tenha total tranquilidade em qualquer situação."
  },
  purpose: {
    title: "Nosso propósito",
    description: "O propósito da 24H Escritório de Viagens é ir além do agenciamento. Buscamos a excelência e a disponibilidade contínua no agenciamento de viagens de lazer e negócios, com o objetivo de sempre superar as expectativas de nossos clientes. Valorizamos profundamente a colaboração e o relacionamento com nossos colaboradores e fornecedores, reconhecendo que são pilares essenciais para o nosso sucesso."
  },
  values: {
    title: "Nossos valores",
    intro: "Nossos valores guiam todas as nossas ações e decisões, refletindo a essência da 24H Escritório de Viagens:",
    items: [
      {
        name: "Personalização",
        description: "Acreditamos que cada viagem é única. Por isso, adaptamos nossos serviços para atender às necessidades e desejos individuais de cada cliente, criando experiências sob medida."
      },
      {
        name: "Disponibilidade",
        description: "Estamos sempre presentes para nossos clientes. Nosso suporte 24/7 e a acessibilidade da nossa equipe garantem que você nunca esteja sozinho, independentemente do fuso horário ou da situação."
      },
      {
        name: "Comprometimento",
        description: "Nos dedicamos integralmente a cada projeto e a cada cliente, garantindo que todos os detalhes sejam cuidadosamente planejados e executados com a máxima precisão."
      },
      {
        name: "Ética profissional",
        description: "Atuamos com transparência, integridade e responsabilidade em todas as nossas relações, construindo confiança e credibilidade no mercado."
      },
      {
        name: "Foco no resultado",
        description: "Buscamos a eficiência e a otimização em todos os processos, visando sempre os melhores resultados para nossos clientes, seja em economia, agilidade ou satisfação."
      },
      {
        name: "Aperfeiçoamento constante",
        description: "Investimos no desenvolvimento contínuo de nossa equipe e na busca por inovações, garantindo que estejamos sempre à frente no mercado de viagens."
      },
      {
        name: "Diversidade",
        description: "Temos orgulho de ter uma equipe composta majoritariamente por mulheres em posições de liderança, possibilitando uma perspectiva mais diversa e empática em nosso atendimento."
      }
    ]
  }
};

// Execute este comando para criar a página sobre:
client.create(sobrePageData).then(result => {
  console.log('✅ sobrePage criada:', result._id);
}).catch(error => {
  console.error('❌ Erro:', error.message);
});

// 2. EQUIPE PAGE
const equipePageData = {
  _type: 'equipePage',
  hero: {
    title: "NOSSA EQUIPE",
    subtitle: "Por trás de cada viagem bem-sucedida e de cada cliente satisfeito, existe uma equipe de profissionais altamente qualificados e apaixonados pelo que fazem. São eles que transformam seus planos em realidade, oferecendo um atendimento personalizado e a excelência que nos diferencia no mercado.",
    ctaText: "CONHEÇA NOSSA EQUIPE!"
  },
  team: [
    {
      name: "Betinna Pavim",
      position: "CEO|COO",
      education: "Bacharel em Turismo com ênfase em Hotelaria pelo Centro Universitário Medotista IPA",
      experience: "20 anos de experiência no turismo, dentro de agenciamento de viagens"
    },
    {
      name: "Liciane Rossetto",
      position: "CEO|CFO",
      education: "Bacharel em Turismo pela PUCRS; Especialista pela UDESC; Mestre pela UFSC; Doutora pela PUCRS EPATUR",
      experience: "Alitália; Anita Pires e Associados; Multieventos Promoção e Organização de Eventos; BRK Consultores Associados; Soluções Integradas Consulting – 30 anos de experiência no Turismo"
    },
    {
      name: "Letícia Wonsovicz Bastos",
      position: "Diretora SAO",
      education: "Bacharel em Nutrição",
      experience: "Empresária Mon Bureau Coworking em Alphaville"
    },
    {
      name: "Marta Dal Molin",
      position: "Diretora FLN",
      education: "Tecnóloga em Gestão, Pós-Graduada em Administração e Marketing",
      experience: "Empresária com 20 anos de experiência em Redes Hoteleiras"
    },
    {
      name: "Renata Barbiani",
      position: "Corporativo e Eventos",
      education: "Bacharel em Turismo pela PUCRS",
      experience: "Queensberry (2 anos); Secretaria Municipal de Turismo (2 anos); Ouro e Prata (12 anos); Sinal Viagens"
    },
    {
      name: "Karine Vigil",
      position: "Corporativo e Eventos",
      education: "Bacharel em Turismo ênfase em Hotelaria pelo Centro Universitário Medotista IPA",
      experience: "Oritur (1 ano); Plus Eventos (2 anos); Fellini Eventos (1 ano); Innovare Viagens (proprietária 15 anos)"
    },
    {
      name: "Débora Galo",
      position: "Corporativo",
      education: "Bacharelado em Turismo pela FARGS",
      experience: "GalFer's Viagens e Turismo (22 anos)"
    },
    {
      name: "Fernanda Medeiros",
      position: "Travel Designer",
      education: "Bacharel Jornalismo e Comunicação Social (UNISINOS)",
      experience: "Travel Plan Viagens (6 anos); Montrel Viagens & Turismo (1 ano); CVC Operadora (7 anos)"
    },
    {
      name: "Jorge Gabriel",
      position: "Roteiros Especiais",
      education: "Licenciado em Geografia, Tecnólogo em Gestão Ambiental e pós-graduado",
      experience: "Gol Linhas Aéreas (4 anos); FluTour PUCRS (5 anos); Gerente CVC (2 anos)"
    },
    {
      name: "Elci Tem Pass",
      position: "Financeiro",
      education: "",
      experience: "Mercatur Operadora (4 anos); Skyteam Consolidadora (2 anos); Oritur (4 anos); Wagons Lits (14 anos)"
    }
  ]
};

// Execute este comando para criar a página equipe:
client.create(equipePageData).then(result => {
  console.log('✅ equipePage criada:', result._id);
}).catch(error => {
  console.error('❌ Erro:', error.message);
});

// 3. OPÇÕES DE VIAGEM PAGE
const opcoesViagemPageData = {
  _type: 'opcoesViagemPage',
  hero: {
    title: "OPÇÕES DE VIAGEM",
    subtitle: "Descubra o mundo com a 24H Escritório de Viagens",
    ctaText: "EXPLORE NOSSAS OPÇÕES!"
  },
  intro: "Explore nossas categorias e encontre a aventura perfeita para você:",
  options: [
    {
      name: "24H ÚNICO",
      description: "Para clientes que buscam o extraordinário, o programa 24H Único cria roteiros de viagem sob medida, com experiências verdadeiramente exclusivas. Mergulhe em roteiros personalizados, onde cada detalhe é pensado para superar suas expectativas e proporcionar momentos de luxo, privacidade e exclusividade."
    },
    {
      name: "VIVA 24H",
      description: "Desconecte-se da rotina e reconecte-se com o essencial. O Viva 24H é ideal para quem busca escapadinhas revigorantes, finais de semana inesquecíveis ou a flexibilidade de um home office outdoor. Privilegiamos pequenas hospedagens regionais, charmosas e acolhedoras, que oferecem uma imersão autêntica na cultura local e na beleza natural."
    },
    {
      name: "VIAGENS DE INCENTIVO",
      description: "Nossas Viagens de Incentivo são programas de recompensa corporativos, desenhados para motivar e engajar colaboradores, equipes ou parceiros de negócios. Criamos grupos sob medida, alinhados ao budget da sua empresa e aos objetivos da premiação, garantindo que a experiência de viagem seja um poderoso estímulo para o alcance de metas e a fidelização."
    },
    {
      name: "VIAGENS CORPORATIVAS",
      description: "Para o mundo corporativo, oferecemos soluções completas que garantem a eficiência e a produtividade de cada deslocamento. Seja para produtos individuais – como passagens aéreas, reservas de hotéis, locação de carros ou transporte rodoviário – ou para pacotes de serviços integrados, nosso foco é proporcionar o melhor atendimento para sua viagem de negócios."
    },
    {
      name: "VIAJEIRAS",
      description: "Explore o mundo com a liberdade e a segurança de um grupo feminino. As Viajeiras são viagens criadas para mulheres que buscam experiências personalizadas, em pequenos grupos, com roteiros que refletem seus interesses e paixões."
    },
    {
      name: "VIAGENS DE LAZER",
      description: "Seja para roteiros personalizados, criados exclusivamente para você, ou para produtos de prateleira, como circuitos de viagens e roteiros econômicos, somos especialistas em moldar as oportunidades existentes aos seus desejos, expectativas e possibilidades."
    },
    {
      name: "VIAGENS SEGMENTADAS",
      description: "Nossas Viagens Segmentadas são criadas conforme a preferência do grupo de viajantes, unindo interesses específicos – como práticas esportivas, gastronomia, cultura ou aventura. Montamos pacotes que incluem visitas culturais, experiências gastronômicas e atividades que enriquecem sua jornada, tornando-a verdadeiramente única."
    }
  ]
};

// Execute este comando para criar a página opções de viagem:
client.create(opcoesViagemPageData).then(result => {
  console.log('✅ opcoesViagemPage criada:', result._id);
}).catch(error => {
  console.error('❌ Erro:', error.message);
});

// 4. TRABALHE CONOSCO PAGE
const trabalheConoscoPageData = {
  _type: 'trabalheConoscoPage',
  hero: {
    title: "TRABALHE CONOSCO",
    subtitle: "Conecte-se com a 24H Escritório de Viagens",
    ctaText: "ENVIE SEU CURRÍCULO!"
  },
  intro: "Se você busca uma oportunidade de fazer parte de uma equipe experiente e dedicada, que transforma sonhos em realidade e oferece soluções inovadoras no mercado de turismo, você encontrou o lugar certo.\n\nSe você é apaixonado (a) por desafios, tem experiência no setor de turismo e deseja crescer profissionalmente em um ambiente dinâmico e colaborativo, queremos te conhecer!\n\nPreencha o formulário abaixo e anexe seu currículo. Sua próxima jornada profissional pode começar aqui.",
  contact: {
    title: "CONTATO",
    companyName: "24H Escritório de Viagens",
    addresses: [
      {
        address: "Avenida Carlos Gomes 1672, 7º andar",
        city: "Porto Alegre, RS"
      },
      {
        address: "Alameda Rio Negro 503, 6º andar",
        city: "Alphaville, SP"
      },
      {
        address: "Avenida Luiz Boiteaux Piazza, 1302",
        city: "Florianópolis, SC"
      }
    ],
    phone: "(51) 3516-0098",
    email: "contato@24h.tur.br",
    socialMedia: [
      {
        platform: "instagram",
        url: "https://www.instagram.com/24hescritoriodeviagens"
      },
      {
        platform: "facebook",
        url: "http://www.facebook.com/24HEscritoriodeViagens"
      },
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/company/24hescritoriodeviagens"
      }
    ]
  }
};

// Execute este comando para criar a página trabalhe conosco:
client.create(trabalheConoscoPageData).then(result => {
  console.log('✅ trabalheConoscoPage criada:', result._id);
}).catch(error => {
  console.error('❌ Erro:', error.message);
});
