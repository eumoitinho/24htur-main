const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'kyx4ncqy',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || 'skh0fXGfGbFzV6JobCH6RB35eblxm2wbRbpgeMMgLG3flirT713Z4GnA54R5Qv6ZO7iqSeHU9vj4pfhg2W4KSdGm806ucyK73SP5WtUsreffIvMH6R4gXTMsKlX5OmYFtvmIPpnh7mTV2TXkxJsZUieAGwiSJnFuV250Gddol5FN9iXa2Qnq',
  apiVersion: '2023-05-03'
})

// Função para deletar todos os documentos
async function deleteAllDocuments() {
  console.log('🗑️  Deletando todos os documentos existentes...')

  try {
    // Buscar todos os documentos
    const documents = await client.fetch('*[!(_id in path("drafts.**"))]')
    console.log(`📄 Encontrados ${documents.length} documentos para deletar`)

    if (documents.length === 0) {
      console.log('✅ Nenhum documento para deletar')
      return
    }

    // Deletar em lotes
    const deletePromises = documents.map(doc =>
      client.delete(doc._id).catch(err => {
        console.warn(`⚠️  Erro ao deletar ${doc._id}:`, err.message)
      })
    )

    await Promise.all(deletePromises)
    console.log('✅ Todos os documentos foram deletados')

  } catch (error) {
    console.error('❌ Erro ao deletar documentos:', error.message)
  }
}

// Função para criar documentos vazios
async function createEmptyDocuments() {
  console.log('📝 Criando documentos vazios para todas as páginas...')

  const documents = [
    // 1. Homepage
    {
      _type: 'homepage',
      title: '24H Escritório de Viagens - Homepage',
      isActive: true,
      seoTitle: '24H Escritório de Viagens | Gestão de Viagens de Negócios e Lazer',
      seoDescription: 'Soluções estratégicas em viagens corporativas e de lazer com atendimento 24/7 e mais de 20 anos de experiência. Fale com um especialista!',
      hero: {
        title: [
            {
                _type: 'block',
                children: [
                    { _type: 'span', text: 'Gestão completa de viagens de ' },
                    { _type: 'span', text: 'negócios e lazer', marks: ['strong'] }
                ]
            }
        ],
        subtitle: 'Soluções estratégicas com atendimento 24/7 e mais de 20 anos de experiência no mercado',
        ctaText: 'FALE COM UM ESPECIALISTA!'
      },
      metrics: {
        items: [
            { metric: '+20', description: 'anos de experiência no mercado' },
            { metric: '24/7', description: 'suporte operacional' },
            { metric: '100%', description: 'gestão personalizada' },
            { metric: '+1000', description: 'operações executadas com sucesso' }
        ]
      },
      problems: {
        title: 'Descomplique sua rotina de viagens com quem entende do assunto',
        subtitle: '',
        items: [
            { title: 'Sem tempo para planejar?', description: 'Nossa equipe especializada cuida de cada etapa da sua viagem, enquanto você foca no que realmente importa.' },
            { title: 'Gastos fora de controle?', description: 'Reduza custos com nossas tarifas corporativas e parcerias estratégicas com fornecedores do setor de turismo.' },
            { title: 'Problemas no meio da viagem?', description: 'Nossa equipe está disponível 24 horas por dia, pronta para resolver qualquer imprevisto durante a sua viagem.' },
            { title: 'Burocracia em excesso?', description: 'Oferecemos um sistema integrado para facilitar processos como reembolsos, solicitações e aprovações, com fluxos 100% digitais.' },
            { title: 'Roteiros genéricos?', description: 'Personalizamos roteiros, passeios e experiências para garantir que cada viagem seja única, agradável e memorável.' },
            { title: 'Desafios no exterior?', description: 'Auxiliamos no processo de compra de moeda estrangeira e aquisição de cartão de débito e chip internacional.' }
        ]
      },
      experience: {
        title: 'Viva a experiência 24H',
        description: [
            {
                _type: 'block',
                children: [
                    { _type: 'span', text: 'Na 24H, transformamos cada viagem em uma experiência única e sem preocupações. Seja a trabalho, lazer ou para um evento especial, somos sua consultoria estratégica completa em gestão de viagens.' }
                ]
            },
            {
                _type: 'block',
                children: [
                    { _type: 'span', text: 'Conte com a nossa ampla rede de fornecedores e a expertise da nossa equipe especializada para garantir excelência em cada etapa da sua viagem. Da seleção de destinos e passagens aéreas à hospedagem, traslados, atividades e roteiros, coordenamos cada detalhe com precisão para você.' }
                ]
            }
        ],
        ctaText: 'FALE COM UM ESPECIALISTA!'
      },
      clients: {
        title: 'NOSSOS CLIENTES',
        logos: [] // Aguardando envio pela cliente
      },
      services: {
        title: 'NOSSOS SERVIÇOS',
        items: [
            { title: 'Viagens corporativas', description: 'Otimize sua gestão de viagens empresariais com nossa gestão de passagens, hospedagens, traslados executivos e relatórios detalhados por centro de custos. Atendemos desde viagens individuais até grandes grupos e programas de incentivo, garantindo economia, agilidade e total conformidade com as políticas da sua empresa.', ctaText: 'SAIBA MAIS!' },
            { title: 'Viagens de lazer', description: 'Transforme suas férias em experiências únicas com nosso planejamento especializado. Cuidamos de passagens, hospedagens, câmbio, roteiros turísticos e até passeios exclusivos. Nossa equipe resolve todos os detalhes operacionais para que você se preocupe apenas em aproveitar cada momento da sua viagem.', ctaText: 'SAIBA MAIS!' },
            { title: 'Viagens para eventos', description: 'Cuidamos de toda a logística de viagens para feiras, congressos, convenções e encontros corporativos, atendendo empresas, palestrantes e participantes. Fornecemos assessoria personalizada e gerimos passagens aéreas e rodoviárias, reservas, transfers e passeios pré e pós-evento.', ctaText: 'SAIBA MAIS!' }
        ]
      },
      whyChoose: {
        title: 'Por que escolher a 24H?',
        items: [
            { title: 'Disponibilidade 24/7', description: 'Suporte técnico permanente com atendimento especializado da própria equipe.' },
            { title: 'Negociação de tarifas', description: 'Condições comerciais diferenciadas através de nossa rede de fornecedores.' },
            { title: 'Expertise técnica', description: 'Equipe com formação superior e +20 anos de experiência no setor.' },
            { title: 'Gestão personalizada', description: 'Atendimento dedicado com profissional especializado no seu perfil.' },
            { title: 'Rede consolidada', description: 'Parcerias estratégicas com ampla rede de fornecedores nacionais e internacionais.' },
            { title: 'Controle financeiro', description: 'Sistema de relatórios gerenciais parametrizados por centros de custos.' }
        ]
      },
      aboutCompany: {
        title: 'SOBRE A 24H',
        subtitle: 'Mais de duas décadas especializados em gestão de viagens',
        description: [
            {
                _type: 'block',
                children: [
                    { _type: 'span', text: 'A 24H Escritório de Viagens é uma agência especializada em viagens corporativas, de lazer, turismo de incentivo e eventos. Com mais de 20 anos de experiência no mercado, nossa equipe atua com excelência na gestão de viagens nacionais e internacionais, oferecendo soluções completas e personalizadas para empresas, famílias e clientes individuais.' }
                ]
            },
            {
                _type: 'block',
                children: [
                    { _type: 'span', text: 'Cuidamos de todas as etapas da viagem, desde a cotação até a emissão de passagens, reservas de hotéis, traslados, câmbio, seguros, vistos, locação de veículos, roteiros turísticos e ingressos. Trabalhamos com uma ampla rede de fornecedores e parceiros nos setores aéreo, hoteleiro e de turismo, garantindo agilidade, economia e segurança em cada atendimento.' }
                ]
            },
            {
                _type: 'block',
                children: [
                    { _type: 'span', text: 'Nosso compromisso é oferecer uma experiência de viagem tranquila, eficiente e sem imprevistos, com suporte disponível 24 horas por dia, 7 dias por semana.' }
                ]
            }
        ],
        ctaText: 'FALE COM UM ESPECIALISTA!'
      },
      team: {
        title: 'NOSSA EQUIPE',
        members: [
            { name: 'Betinna Pavim', role: 'CEO|COO', description: 'Bacharel em Turismo com ênfase em Hotelaria\n20 anos de experiência com agenciamento de viagens' },
            { name: 'Liciane Rossetto', role: 'CEO|CFO', description: 'Doutora em Turismo\n30 anos de experiência no setor turístico' }
        ],
        ctaText: 'CONHEÇA NOSSA EQUIPE COMPLETA'
      },
      testimonials: {
        title: 'DEPOIMENTOS',
        subtitle: 'O que nossos clientes dizem sobre nós',
        items: [
            { rating: 5, quote: 'Escritório sempre atento às necessidades dos clientes, e muito proativo nas resoluções de toda e qualquer situação.', author: 'Christian Bittencourt' },
            { rating: 5, quote: 'Já fiz várias viagens com a 24H. Sempre excelentes no atendimento, realizaram nossos sonhos de viagens e passeios com conforto e tranquilidade.', author: 'Renato Saffi' },
            { rating: 5, quote: 'Os pacotes foram de excelente custo-benefício. Ficamos em ótimos hotéis e os passeios propostos foram excelentes pedidas.', author: 'Gabriela Vaz' }
        ]
      },
      contact: {
        title: 'Precisa de ajuda para organizar sua viagem?',
        subtitle: 'Preencha o formulário e nossa equipe especializada entrará em contato com você em breve.',
        formTitle: ''
      }
    },

    // 2. Eventos Page (Landing)
    {
      _type: 'eventosPage',
      title: 'Viagens para Eventos',
      subtitle: 'Cuidamos de toda a logística de viagens para feiras, congressos, convenções e encontros corporativos.',
      services: [
        { title: 'Atendimento a palestrantes e congressistas', description: 'Garantimos que seus convidados de honra tenham uma experiência de viagem VIP, com todo o suporte necessário.' },
        { title: 'Emissão de passagens aéreas', description: 'Buscamos as melhores rotas e tarifas, otimizando custos e tempo de deslocamento.' },
        { title: 'Reserva de hospedagem', description: 'Selecionamos e reservamos os hotéis mais adequados, considerando localização, conforto e orçamento.' },
        { title: 'Transportes e programação de apoio', description: 'Organizamos traslados eficientes e seguros, além de criar programações de apoio para acompanhantes e familiares.' },
        { title: 'Cotação e locação de salas', description: 'Auxiliamos na escolha e reserva de espaços ideais para suas reuniões, conferências ou workshops.' },
        { title: 'Contratação de A&B', description: 'Gerenciamos a parte gastronômica do seu evento, desde coffee breaks a jantares de gala.' }
      ],
      upcomingEvents: [
        { 
          title: '75º Congresso Brasileiro de Enfermagem - Porto Alegre/RS', 
          preEvent: 'Pré-congresso: 22 e 23 de novembro',
          mainEvent: 'Evento principal: 23 a 26 de novembro de 2025',
          location: 'Campus da PUCRS - Pontifícia Universidade Católica do Rio Grande do Sul',
          address: 'Bairro Partenon - Zona Leste de Porto Alegre',
          ctaText: 'SAIBA MAIS!' 
        }
      ]
    },

    // 3. Lazer Page (Landing)
    {
      _type: 'lazerPage',
      hero: {
        title: 'Sua próxima aventura inesquecível começa aqui!',
        subtitle: 'Deixe a 24H Escritório de Viagens transformar seus sonhos em realidade, com roteiros personalizados e experiências que ficarão para sempre na sua memória.',
        ctaText: 'FALE AGORA COM UM ESPECIALISTA!'
      },
      metrics: [
        { metric: '+20', description: 'anos de experiência no mercado' },
        { metric: '24/7', description: 'suporte operacional' },
        { metric: '100%', description: 'gestão personalizada' },
        { metric: '+1000', description: 'operações executadas com sucesso' }
      ],
      arguments: {
        title: 'Mais segurança para sua viagem dos sonhos',
        items: [
            { title: 'Roteiros genéricos?', description: 'Criamos roteiros personalizados que se encaixam no seu perfil e refletem seus interesses, ritmo e estilo.' },
            { title: 'Preocupação com o orçamento?', description: 'Planejamos sua viagem para caber dentro do seu orçamento, buscando as melhores tarifas e prevenindo gastos inesperados.' },
            { title: 'Excesso de opções?', description: 'Facilitamos sua decisão, filtrando o excesso de informações e encontrando o que combina com seu perfil.' },
            { title: 'Falta de tempo para planejar?', description: 'Cuidamos de todo o planejamento para que você só precise se preocupar em fazer as malas.' },
            { title: 'Medo de imprevistos?', description: 'Nosso suporte acompanha você durante toda a viagem, solucionando problemas e garantindo que tudo saia como planejado.' },
            { title: 'Burocracia e documentação?', description: 'Vistos, seguros, vacinas… Orientamos e cuidamos de cada detalhe para que sua documentação esteja em dia.' }
        ]
      },
      experiences: {
        title: 'Especialistas em proporcionar experiências memoráveis…',
        description: 'Cada viagem é uma oportunidade única de criar memórias e explorar novos horizontes. A 24H Escritório de Viagens oferece um serviço de agenciamento completo para sua viagem de lazer, cuidando de cada detalhe para que você desfrute ao máximo de seus momentos de descanso e diversão.\n\nCom uma equipe de profissionais com mais de 20 anos de expertise e uma rede extensa de fornecedores, operamos serviços personalizados no Brasil ou no exterior. Nossa missão é proporcionar uma experiência de viagem perfeita, sem preocupações, desde o momento em que você sonha com o destino até o momento em que retorna para casa com o coração cheio de boas lembranças.',
        ctaText: 'FALE AGORA COM UM ESPECIALISTA!'
      },
      travelTypes: {
        title: 'Seu roteiro do seu jeito',
        types: [
            { name: 'Viagens de aventura' },
            { name: 'Viagens românticas' },
            { name: 'Viagens gastronômica' },
            { name: 'Viagens culturais' },
            { name: 'Viagens para eventos' },
            { name: 'Viagens de compras' },
            { name: 'Viagens de verão' },
            { name: 'Viagens de inverno' }
        ]
      },
      services: {
        title: 'Serviços completos para sua viagem de lazer',
        ctaText: 'PERSONALIZE DO SEU JEITO!',
        items: [
            { name: 'Bilhetes aéreos', description: 'Negociação de tarifas diferenciadas e busca pelas melhores opções para seu destino de sonho.' },
            { name: 'Hospedagem', description: 'Auxílio especializado na escolha de hotéis, resorts ou pousadas que melhor se adequam ao seu estilo e orçamento.' },
            { name: 'Câmbio', description: 'Facilidade para suas transações financeiras internacionais.' },
            { name: 'Cartão de débito e chip internacional', description: 'Soluções financeiras e de conectividade para suas viagens ao exterior.' },
            { name: 'Sala VIP', description: 'Conforto e exclusividade em aeroportos.' },
            { name: 'Encaminhamento de visto', description: 'Agilidade nos processos burocráticos para que nada impeça sua viagem.' },
            { name: 'Locação de veículos', description: 'Opções variadas para sua mobilidade no destino.' },
            { name: 'Traslados privativos', description: 'Planejamento e execução de serviços de traslado Aeroporto/Hotel/Aeroporto.' },
            { name: 'Transporte rodoviário', description: 'Soluções para deslocamentos terrestres intermunicipais e interestaduais.' },
            { name: 'Ingressos', description: 'Acesso facilitado a eventos, shows, parques e atrações turísticas.' },
            { name: 'Cruzeiros marítimos e fluviais', description: 'Opções diferenciadas para uma experiência de viagem única.' },
            { name: 'Tickets de trem', description: 'Mobilidade eficiente e paisagens deslumbrantes em diversas regiões.' },
            { name: 'Guias e tradutores', description: 'Suporte linguístico e cultural para enriquecer sua experiência.' },
            { name: 'Opções de passeios', description: 'Sugestões e organização de roteiros personalizados, de acordo com seus interesses.' },
            { name: 'Wine experiences', description: 'Roteiros exclusivos para amantes de vinho, explorando as melhores vinícolas.' }
        ]
      },
      whyChoose: {
        title: 'Por que escolher a 24H?',
        items: [
            { title: 'Disponibilidade 24H', description: 'Suporte técnico permanente com atendimento especializado da própria equipe.' },
            { title: 'Negociação de tarifas', description: 'Condições comerciais diferenciadas através de nossa rede de fornecedores.' },
            { title: 'Expertise técnica', description: 'Equipe com formação superior e +20 anos de experiência no setor.' },
            { title: 'Gestão personalizada', description: 'Atendimento dedicado com profissional especializado no seu perfil.' },
            { title: 'Rede consolidada', description: 'Parcerias estratégicas com ampla rede de fornecedores nacionais e internacionais.' },
            { title: 'Controle financeiro', description: 'Sistema de relatórios gerenciais parametrizados por centros de custos.' }
        ]
      },
      aboutCompany: {
        title: 'SOBRE A 24H',
        subtitle: 'Mais de duas décadas especializados em gestão de viagens',
        description: 'A 24H Escritório de Viagens é uma agência especializada em viagens corporativas, de lazer, turismo de incentivo e eventos. Com mais de 20 anos de experiência no mercado, nossa equipe atua com excelência na gestão de viagens nacionais e internacionais, oferecendo soluções completas e personalizadas para empresas, famílias e clientes individuais.\n\nCuidamos de todas as etapas da viagem, desde a cotação até a emissão de passagens, reservas de hotéis, traslados, câmbio, seguros, vistos, locação de veículos, roteiros turísticos e ingressos. Trabalhamos com uma ampla rede de fornecedores e parceiros nos setores aéreo, hoteleiro e de turismo, garantindo agilidade, economia e segurança em cada atendimento.\n\nNosso compromisso é oferecer uma experiência de viagem tranquila, eficiente e sem imprevistos, com suporte disponível 24 horas por dia, 7 dias por semana.',
        ctaText: 'FALE AGORA COM UM ESPECIALISTA!'
      },
      testimonials: {
        title: 'DEPOIMENTOS',
        subtitle: 'O que nossos clientes dizem sobre nós',
        items: [
            { rating: 5, quote: 'Escritório sempre atento às necessidades dos clientes, e muito proativo nas resoluções de toda e qualquer situação.', author: 'Christian Bittencourt' },
            { rating: 5, quote: 'Já fiz várias viagens com a 24H. Sempre excelentes no atendimento, realizaram nossos sonhos de viagens e passeios com conforto e tranquilidade.', author: 'Renato Saffi' },
            { rating: 5, quote: 'Os pacotes foram de excelente custo-benefício. Ficamos em ótimos hotéis e os passeios propostos foram excelentes pedidas.', author: 'Gabriela Vaz' }
        ]
      },
      contactForm: {
        title: 'Deixe a 24H cuidar de tudo',
        subtitle: 'Preencha o formulário abaixo e nossa equipe de especialistas em lazer entrará em contato para criar um roteiro personalizado e inesquecível para você.'
      },
      footer: {
        companyName: '24H Escritório de Viagens',
        addresses: [
            'Avenida Carlos Gomes 1672, 7º andar | Porto Alegre, RS',
            'Alameda Rio Negro 503, 6º andar | Alphaville, SP',
            'Avenida Luiz Boiteaux Piazza, 1302 | Florianópolis, SC'
        ],
        phone: '(51) 3516-0098',
        email: 'contato@24h.tur.br',
        socialMedia: [
            { name: 'Instagram', url: 'https://www.instagram.com/24hescritoriodeviagens' },
            { name: 'Facebook', url: 'http://www.facebook.com/24HEscritoriodeViagens' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/company/24hescritoriodeviagens' }
        ]
      }
    },

    // 4. Sobre Page
    {
      _type: 'sobrePage',
      hero: {
        title: 'SOBRE A 24H',
        subtitle: 'Mais de 20 anos de expertise em gestão de viagens'
      },
      aboutCompany: {
        title: 'Nossa História',
        description: 'Com mais de 20 anos de expertise, a 24H Escritório de Viagens se consolidou como uma agência especializada e líder na gestão de viagens de lazer, negócios e eventos, nacionais e internacionais. Oferecemos soluções completas e personalizadas, atendendo às necessidades de empresas, famílias, grupos e clientes individuais com a máxima dedicação e profissionalismo.\n\nNa 24H, cuidamos de todas as etapas da sua viagem, garantindo uma experiência tranquila e sem imprevistos. Nossos serviços abrangem desde a cotação e emissão de passagens até reservas de hotéis, traslados, câmbio, seguros, vistos, locação de veículos, roteiros turísticos e ingressos.\n\nTrabalhamos com uma ampla e consolidada rede de fornecedores e parceiros nos setores aéreo, hoteleiro e de turismo, o que nos permite assegurar agilidade, economia e segurança em cada atendimento. Nosso compromisso primordial é oferecer um suporte disponível 24 horas por dia, 7 dias por semana, para que você tenha total tranquilidade em qualquer situação.',
        stats: []
      },
      missionVisionValues: {
        mission: {
          title: 'Nosso Propósito',
          description: 'O propósito da 24H Escritório de Viagens é ir além do agenciamento. Buscamos a excelência e a disponibilidade contínua no agenciamento de viagens de lazer e negócios, com o objetivo de sempre superar as expectativas de nossos clientes. Valorizamos profundamente a colaboração e o relacionamento com nossos colaboradores e fornecedores, reconhecendo que são pilares essenciais para o nosso sucesso.'
        },
        vision: {
          title: '', // Não fornecido
          description: '' // Não fornecido
        },
        values: [
            { title: 'Personalização', description: 'Acreditamos que cada viagem é única. Por isso, adaptamos nossos serviços para atender às necessidades e desejos individuais de cada cliente, criando experiências sob medida.' },
            { title: 'Disponibilidade', description: 'Estamos sempre presentes para nossos clientes. Nosso suporte 24/7 e a acessibilidade da nossa equipe garantem que você nunca esteja sozinho, independentemente do fuso horário ou da situação.' },
            { title: 'Comprometimento', description: 'Nos dedicamos integralmente a cada projeto e a cada cliente, garantindo que todos os detalhes sejam cuidadosamente planejados e executados com a máxima precisão.' },
            { title: 'Ética profissional', description: 'Atuamos com transparência, integridade e responsabilidade em todas as nossas relações, construindo confiança e credibilidade no mercado.' },
            { title: 'Foco no resultado', description: 'Buscamos a eficiência e a otimização em todos os processos, visando sempre os melhores resultados para nossos clientes, seja em economia, agilidade ou satisfação.' },
            { title: 'Aperfeiçoamento constante', description: 'Investimos no desenvolvimento contínuo de nossa equipe e na busca por inovações, garantindo que estejamos sempre à frente no mercado de viagens.' },
            { title: 'Diversidade', description: 'Temos orgulho de ter uma equipe composta majoritariamente por mulheres em posições de liderança, possibilitando uma perspectiva mais diversa e empática em nosso atendimento.' }
        ]
      },
      team: {
        title: '', // Título já existe na página de Equipe
        subtitle: '',
        members: []
      },
      certifications: {
        title: '',
        items: []
      },
      contactCTA: {
        title: '',
        subtitle: '',
        ctaText: ''
      }
    },

    // 5. Equipe Page
    {
      _type: 'equipePage',
      hero: {
        title: 'NOSSA EQUIPE',
        subtitle: 'Profissionais qualificados e apaixonados por transformar seus planos em realidade.'
      },
      teamIntro: {
        title: 'Conheça quem faz a 24H acontecer',
        description: 'Por trás de cada viagem bem-sucedida e de cada cliente satisfeito, existe uma equipe de profissionais altamente qualificados e apaixonados pelo que fazem. São eles que transformam seus planos em realidade, oferecendo um atendimento personalizado и a excelência que nos diferencia no mercado.',
        stats: []
      },
      teamMembers: [
        { name: 'Betinna Pavim', role: 'CEO|COO', description: 'Bacharel em Turismo com ênfase em Hotelaria pelo Centro Universitário Medotista IPA\n20 anos de experiência no turismo, dentro de agenciamento de viagens' },
        { name: 'Liciane Rossetto', role: 'CEO|CFO', description: 'Bacharel em Turismo pela PUCRS; Especialista pela UDESC; Mestre pela UFSC; Doutora pela PUCRS EPATUR; Alitália; Anita Pires e Associados; Multieventos Promoção e Organização de Eventos; BRK Consultores Associados; Soluções Integradas Consulting – 30 anos de experiência no Turismo' },
        { name: 'Letícia Wonsovicz Bastos', role: 'Diretora SAO', description: 'Bacharel em Nutrição\nEmpresária Mon Bureau Coworking em Alphaville' },
        { name: 'Marta Dal Molin', role: 'Diretora FLN', description: 'Tecnóloga em Gestão, Pós-Graduada em Administração e Marketing\nEmpresária com 20 anos de experiência em Redes Hoteleiras' },
        { name: 'Renata Barbiani', role: 'Corporativo e Eventos', description: 'Bacharel em Turismo pela PUCRS\nQueensberry (2 anos); Secretaria Municipal de Turismo (2 anos); Ouro e Prata (12 anos); Sinal Viagens' },
        { name: 'Karine Vigil', role: 'Corporativo e Eventos', description: 'Bacharel em Turismo ênfase em Hotelaria pelo Centro Universitário Medotista IPA\nOritur (1 ano); Plus Eventos (2 anos); Fellini Eventos (1 ano); Innovare Viagens (proprietária 15 anos)' },
        { name: 'Débora Galo', role: 'Corporativo', description: 'Bacharelado em Turismo pela FARGS\nGalFer\'s Viagens e Turismo (22 anos)' },
        { name: 'Fernanda Medeiros', role: 'Travel Designer', description: 'Bacharel Jornalismo e Comunicação Social (UNISINOS)\nTravel Plan Viagens (6 anos); Montrel Viagens & Turismo (1 ano); CVC Operadora (7 anos)' },
        { name: 'Jorge Gabriel', role: 'Roteiros Especiais', description: 'Licenciado em Geografia, Tecnólogo em Gestão Ambiental e pós-graduado\nGol Linhas Aéreas (4 anos); FluTour PUCRS (5 anos); Gerente CVC (2 anos)' },
        { name: 'Elci Tem Pass', role: 'Financeiro', description: 'Mercatur Operadora (4 anos); Skyteam Consolidadora (2 anos); Oritur (4 anos); Wagons Lits (14 anos)' }
      ],
      departments: [],
      whyChooseTeam: {
        title: '',
        items: []
      },
      contactCTA: {
        title: '',
        subtitle: '',
        ctaText: ''
      }
    },

    // 6. Eventos Info Page (Genérica)
    {
      _type: 'eventosInfoPage',
      title: 'Viagens para Eventos',
      subtitle: 'Somos especialistas em transformar a complexidade da organização de viagens para eventos em uma experiência fluida e tranquila, garantindo que palestrantes, equipes, organizadores e visitantes cheguem ao seu destino com conforto e pontualidade.',
      content: [
          { _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'Atendimento a palestrantes e congressistas' }] },
          { _type: 'block', children: [{ _type: 'span', text: 'Garantimos que seus convidados de honra tenham uma experiência de viagem VIP, com todo o suporte necessário.' }] },
          { _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'Emissão de passagens aéreas' }] },
          { _type: 'block', children: [{ _type: 'span', text: 'Buscamos as melhores rotas e tarifas, otimizando custos e tempo de deslocamento, tanto para organizadores como para visitantes.' }] },
          { _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'Reserva de hospedagem' }] },
          { _type: 'block', children: [{ _type: 'span', text: 'Selecionamos e reservamos os hotéis mais adequados, considerando localização, conforto e orçamento, para que todos estejam bem acomodados.' }] },
          { _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'Transportes e programação de apoio' }] },
          { _type: 'block', children: [{ _type: 'span', text: 'Organizamos traslados eficientes e seguros, além de criar programações de apoio para acompanhantes e familiares, garantindo que todos desfrutem da melhor experiência de viagem possível.' }] },
          { _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'Cotação e locação de salas para eventos' }] },
          { _type: 'block', children: [{ _type: 'span', text: 'Auxiliamos na escolha e reserva de espaços ideais para suas reuniões, conferências ou workshops.' }] },
          { _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'Contratação de Serviços de Alimentos e Bebidas (A&B)' }] },
          { _type: 'block', children: [{ _type: 'span', text: 'Gerenciamos a parte gastronômica do seu evento, desde coffee breaks a jantares de gala, com opções que se encaixam no seu perfil e orçamento.' }] }
      ]
    },

    // 7. Opções Viagem Page
    {
      _type: 'opcoesViagemPage',
      title: 'Opções de Viagem',
      subtitle: 'Descubra o mundo com a 24H Escritório de Viagens. Explore nossas categorias e encontre a aventura perfeita para você.',
      content: [
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '24H ÚNICO' }] },
        { _type: 'block', children: [{ _type: 'span', text: 'Para clientes que buscam o extraordinário, o programa 24H Único cria roteiros de viagem sob medida, com experiências verdadeiramente exclusivas. Mergulhe em roteiros personalizados, onde cada detalhe é pensado para superar suas expectativas e proporcionar momentos de luxo, privacidade e exclusividade.' }] },
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'VIVA 24H' }] },
        { _type: 'block', children: [{ _type: 'span', text: 'Desconecte-se da rotina e reconecte-se com o essencial. O Viva 24H é ideal para quem busca escapadinhas revigorantes, finais de semana inesquecíveis ou a flexibilidade de um home office outdoor. Privilegiamos pequenas hospedagens regionais, charmosas e acolhedoras, que oferecem uma imersão autêntica na cultura local e na beleza natural.' }] },
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'VIAGENS DE INCENTIVO' }] },
        { _type: 'block', children: [{ _type: 'span', text: 'Nossas Viagens de Incentivo são programas de recompensa corporativos, desenhados para motivar e engajar colaboradores, equipes ou parceiros de negócios. Criamos grupos sob medida, alinhados ao budget da sua empresa e aos objetivos da premiação, garantindo que a experiência de viagem seja um poderoso estímulo para o alcance de metas e a fidelização.' }] },
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'VIAGENS CORPORATIVAS' }] },
        { _type: 'block', children: [{ _type: 'span', text: 'Para o mundo corporativo, oferecemos soluções completas que garantem a eficiência e a produtividade de cada deslocamento. Seja para produtos individuais – como passagens aéreas, reservas de hotéis, locação de carros ou transporte rodoviário – ou para pacotes de serviços integrados, nosso foco é proporcionar o melhor atendimento para sua viagem de negócios.' }] },
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'VIAJEIRAS' }] },
        { _type: 'block', children: [{ _type: 'span', text: 'Explore o mundo com a liberdade e a segurança de um grupo feminino. As Viajeiras são viagens criadas para mulheres que buscam experiências personalizadas, em pequenos grupos, com roteiros que refletem seus interesses e paixões.' }] },
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'VIAGENS DE LAZER' }] },
        { _type: 'block', children: [{ _type: 'span', text: 'Seja para roteiros personalizados, criados exclusivamente para você, ou para produtos de prateleira, como circuitos de viagens e roteiros econômicos, somos especialistas em moldar as oportunidades existentes aos seus desejos, expectativas e possibilidades.' }] },
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'VIAGENS SEGMENTADAS' }] },
        { _type: 'block', children: [{ _type: 'span', text: 'Nossas Viagens Segmentadas são criadas conforme a preferência do grupo de viajantes, unindo interesses específicos – como práticas esportivas, gastronomia, cultura ou aventura. Montamos pacotes que incluem visitas culturais, experiências gastronômicas e atividades que enriquecem sua jornada, tornando-a verdadeiramente única.' }] }
      ]
    },

    // 8. Trabalhe Conosco Page
    {
      _type: 'trabalheConoscoPage',
      title: 'Trabalhe Conosco',
      subtitle: 'Conecte-se com a 24H Escritório de Viagens',
      content: [
          { _type: 'block', children: [{ _type: 'span', text: 'Se você busca uma oportunidade de fazer parte de uma equipe experiente e dedicada, que transforma sonhos em realidade e oferece soluções inovadoras no mercado de turismo, você encontrou o lugar certo.' }] },
          { _type: 'block', children: [{ _type: 'span', text: 'Se você é apaixonado (a) por desafios, tem experiência no setor de turismo e deseja crescer profissionalmente em um ambiente dinâmico e colaborativo, queremos te conhecer!' }] },
          { _type: 'block', children: [{ _type: 'span', text: 'Preencha o formulário abaixo e anexe seu currículo. Sua próxima jornada profissional pode começar aqui.' }] }
      ],
      openPositions: []
    }
  ]

  try {
    for (const doc of documents) {
      try {
        const result = await client.create(doc)
        console.log(`✅ Criado: ${doc._type} (${result._id})`)
      } catch (error) {
        console.error(`❌ Erro ao criar ${doc._type}:`, error.message)
      }
    }

    console.log('🎉 Todos os documentos vazios foram criados!')

  } catch (error) {
    console.error('❌ Erro geral:', error.message)
  }
}

// Função principal
async function setupSanityClean() {
  console.log('🚀 Iniciando limpeza e setup do Sanity...')
  console.log('')


  try {
    // Etapa 1: Deletar tudo
    await deleteAllDocuments()

    console.log('')
    console.log('⏳ Aguardando 2 segundos para sincronização...')
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('')

    // Etapa 2: Criar documentos vazios
    await createEmptyDocuments()

    console.log('')
    console.log('🎯 PRÓXIMOS PASSOS:')
    console.log('1. Acesse http://localhost:3000/studio')
    console.log('2. Preencha os conteúdos de cada página')
    console.log('3. Para CBEnf: crie um "Landing Page Eventos" com slug "cbenf"')
    console.log('')
    console.log('✨ Setup concluído com sucesso!')

  } catch (error) {
    console.error('💥 Erro fatal:', error.message)
    process.exit(1)
  }
}

// Executar se chamado diretamente
if (require.main === module) {
  setupSanityClean()
    .then(() => {
      console.log('🏁 Processo finalizado')
      process.exit(0)
    })
    .catch((error) => {
      console.error('💥 Script falhou:', error.message)
      process.exit(1)
    })
}

module.exports = { setupSanityClean, deleteAllDocuments, createEmptyDocuments }