import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'kyx4ncqy',
  dataset: 'production',
  useCdn: false,
  token: 'skh0fXGfGbFzV6JobCH6RB35eblxm2wbRbpgeMMgLG3flirT713Z4GnA54R5Qv6ZO7iqSeHU9vj4pfhg2W4KSdGm806ucyK73SP5WtUsreffIvMH6R4gXTMsKlX5OmYFtvmIPpnh7mTV2TXkxJsZUieAGwiSJnFuV250Gddol5FN9iXa2Qnq'
})

// Dados da Página Eventos
const eventosPageData = {
  _type: 'eventosPage',
  title: 'Eventos Corporativos',
  isActive: true,
  seoTitle: 'Eventos Corporativos - 24H Escritório de Viagens',
  seoDescription: 'Organização completa de eventos corporativos, convenções e seminários com a 24H.',
  hero: {
    title: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Eventos Corporativos'
          }
        ]
      }
    ],
    subtitle: 'Transformamos ideias em experiências inesquecíveis'
  },
  services: {
    title: 'Serviços Completos para Eventos',
    items: [
      {
        _key: 'service1',
        icon: 'users',
        title: 'Eventos Corporativos',
        description: 'Convenções, seminários e confraternizações empresariais'
      },
      {
        _key: 'service2',
        icon: 'calendar',
        title: 'Gestão Completa',
        description: 'Do planejamento à execução, cuidamos de todos os detalhes'
      },
      {
        _key: 'service3',
        icon: 'target',
        title: 'Objetivos Alcançados',
        description: 'Focamos nos resultados que sua empresa precisa atingir'
      },
      {
        _key: 'service4',
        icon: 'award',
        title: 'Experiência Comprovada',
        description: 'Mais de 20 anos organizando eventos de sucesso'
      }
    ]
  },
  nextEvent: {
    title: 'Confira as condições especiais para nossos próximos eventos:',
    eventTitle: '75º Congresso Brasileiro de Enfermagem - Porto Alegre/RS',
    dates: {
      preEvent: '22 e 23 de novembro',
      mainEvent: '23 a 26 de novembro de 2025'
    },
    location: {
      name: 'Campus da PUCRS - Pontifícia Universidade Católica do Rio Grande do Sul',
      address: 'Bairro Partenon - Zona Leste de Porto Alegre'
    },
    ctaText: 'SAIBA MAIS!',
    ctaLink: '/eventos/cbenf'
  },
  cta: {
    title: 'Pronto para Criar um Evento Inesquecível?',
    subtitle: 'Nossa equipe de especialistas está pronta para transformar sua visão em realidade.',
    buttonText: 'FALE CONOSCO'
  }
}

async function populateEventosPage() {
  try {
    console.log('Criando documento Eventos Page...')
    const eventosResult = await client.create(eventosPageData)
    console.log('Eventos Page criada:', eventosResult._id)
    console.log('Eventos Page populada com sucesso!')
  } catch (error) {
    console.error('Erro ao criar eventos page:', error)
  }
}

populateEventosPage()