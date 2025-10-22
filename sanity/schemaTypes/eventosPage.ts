import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'eventosPage',
  title: 'Página Eventos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      initialValue: 'VIAGENS PARA EVENTOS',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'intro',
      title: 'Introdução',
      type: 'text',
      initialValue: 'Somos especialistas em transformar a complexidade da organização de viagens para eventos em uma experiência fluida e tranquila, garantindo que palestrantes, equipes, organizadores e visitantes cheguem ao seu destino com conforto e pontualidade.',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'services',
      title: 'Serviços',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Título do Serviço',
              type: 'string',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'description',
              title: 'Descrição',
              type: 'text',
              validation: Rule => Rule.required()
            })
          ]
        }
      ],
      initialValue: [
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
        },
        {
          title: 'Cotação e locação de salas para eventos',
          description: 'Auxiliamos na escolha e reserva de espaços ideais para suas reuniões, conferências ou workshops.'
        },
        {
          title: 'Contratação de Serviços de Alimentos e Bebidas (A&B)',
          description: 'Gerenciamos a parte gastronômica do seu evento, desde coffee breaks a jantares de gala, com opções que se encaixam no seu perfil e orçamento.'
        }
      ]
    }),
    defineField({
      name: 'upcomingEvents',
      title: 'Próximos Eventos',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título da Seção',
          type: 'string',
          initialValue: 'Confira as condições especiais para nossos próximos eventos:',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'events',
          title: 'Eventos',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Nome do Evento',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'preCongress',
                  title: 'Pré-congresso',
                  type: 'string'
                }),
                defineField({
                  name: 'mainEvent',
                  title: 'Evento Principal',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'location',
                  title: 'Local',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'address',
                  title: 'Endereço',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'link',
                  title: 'Link para Mais Informações',
                  type: 'url'
                }),
                defineField({
                  name: 'linkText',
                  title: 'Texto do Link',
                  type: 'string',
                  initialValue: 'SAIBA MAIS!'
                })
              ]
            }
          ],
          initialValue: [
            {
              name: '75º Congresso Brasileiro de Enfermagem - Porto Alegre/RS',
              preCongress: '22 e 23 de novembro',
              mainEvent: '23 a 26 de novembro de 2025',
              location: 'Campus da PUCRS - Pontifícia Universidade Católica do Rio Grande do Sul',
              address: 'Bairro Partenon - Zona Leste de Porto Alegre',
              linkText: 'SAIBA MAIS!'
            }
          ]
        })
      ]
    })
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
})

