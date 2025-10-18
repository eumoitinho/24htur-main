import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'landingPageEventos',
  title: 'Landing Page Eventos',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug (URL do evento)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
      description: 'URL do evento (ex: cbenf, cogem, etc.)'
    }),
    defineField({
      name: 'title',
      title: 'Nome do Evento',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'Nome completo do evento'
    }),
    defineField({
      name: 'shortTitle',
      title: 'Título Curto',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'Título usado no card da listagem'
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
      validation: Rule => Rule.required(),
      description: 'Descrição que aparece no card da listagem'
    }),
    defineField({
      name: 'status',
      title: 'Status do Evento',
      type: 'string',
      options: {
        list: [
          { title: 'Ativo', value: 'active' },
          { title: 'Em Breve', value: 'coming-soon' },
          { title: 'Finalizado', value: 'past' }
        ]
      },
      initialValue: 'active',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'eventDates',
      title: 'Datas do Evento',
      type: 'object',
      fields: [
        defineField({
          name: 'preCongress',
          title: 'Pré-congresso',
          type: 'string',
          description: 'Ex: 22-23 de Novembro'
        }),
        defineField({
          name: 'mainEvent',
          title: 'Evento Principal',
          type: 'string',
          validation: Rule => Rule.required(),
          description: 'Ex: 23-26 de Novembro'
        }),
        defineField({
          name: 'year',
          title: 'Ano',
          type: 'number',
          validation: Rule => Rule.required()
        })
      ]
    }),
    defineField({
      name: 'location',
      title: 'Local do Evento',
      type: 'object',
      fields: [
        defineField({
          name: 'venue',
          title: 'Nome do Local',
          type: 'string',
          validation: Rule => Rule.required(),
          description: 'Ex: Campus PUCRS'
        }),
        defineField({
          name: 'city',
          title: 'Cidade',
          type: 'string',
          validation: Rule => Rule.required(),
          description: 'Ex: Porto Alegre - RS'
        }),
        defineField({
          name: 'fullAddress',
          title: 'Endereço Completo',
          type: 'text',
          description: 'Endereço completo para o mapa'
        })
      ]
    }),
    defineField({
      name: 'participation',
      title: 'Informações de Participação',
      type: 'object',
      fields: [
        defineField({
          name: 'expectedParticipants',
          title: 'Participantes Esperados',
          type: 'string',
          description: 'Ex: +5.000'
        }),
        defineField({
          name: 'edition',
          title: 'Edição',
          type: 'string',
          description: 'Ex: 75º'
        }),
        defineField({
          name: 'parallelEvents',
          title: 'Eventos Paralelos',
          type: 'string',
          description: 'Ex: 7º CLAHEN • 8º SENABS'
        })
      ]
    }),
    defineField({
      name: 'images',
      title: 'Imagens',
      type: 'object',
      fields: [
        defineField({
          name: 'heroImage',
          title: 'Imagem Principal (Hero)',
          type: 'image',
          options: {
            hotspot: true
          }
        }),
        defineField({
          name: 'aboutImage',
          title: 'Imagem da Seção Sobre',
          type: 'image',
          options: {
            hotspot: true
          }
        }),
        defineField({
          name: 'cardImage',
          title: 'Imagem do Card (Listagem)',
          type: 'image',
          options: {
            hotspot: true
          }
        })
      ]
    }),
    defineField({
      name: 'hotels',
      title: 'Hotéis',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Nome do Hotel',
              type: 'string',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'pricePerNight',
              title: 'Preço por Noite',
              type: 'string',
              validation: Rule => Rule.required(),
              description: 'Ex: R$ 320,00'
            }),
            defineField({
              name: 'distance',
              title: 'Distância do Local',
              type: 'string',
              description: 'Ex: 2,5 km do evento'
            }),
            defineField({
              name: 'rating',
              title: 'Avaliação',
              type: 'number',
              validation: Rule => Rule.min(1).max(5)
            }),
            defineField({
              name: 'breakfast',
              title: 'Café da Manhã Incluso',
              type: 'boolean',
              initialValue: false
            }),
            defineField({
              name: 'checkIn',
              title: 'Check-in',
              type: 'string',
              description: 'Ex: 14h'
            }),
            defineField({
              name: 'checkOut',
              title: 'Check-out',
              type: 'string',
              description: 'Ex: 12h'
            }),
            defineField({
              name: 'amenities',
              title: 'Comodidades',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'Ex: Wi-Fi gratuito, Estacionamento, Academia'
            }),
            defineField({
              name: 'image',
              title: 'Imagem do Hotel',
              type: 'image',
              options: {
                hotspot: true
              }
            })
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'pricePerNight',
              media: 'image'
            }
          }
        }
      ]
    }),
    defineField({
      name: 'tours',
      title: 'Passeios',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Nome do Passeio',
              type: 'string',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'price',
              title: 'Preço',
              type: 'string',
              validation: Rule => Rule.required(),
              description: 'Ex: R$ 665,00'
            }),
            defineField({
              name: 'priceDetails',
              title: 'Detalhes do Preço',
              type: 'string',
              initialValue: 'por pessoa'
            }),
            defineField({
              name: 'minimum',
              title: 'Participação Mínima',
              type: 'string',
              initialValue: 'Saída com mínimo de duas pessoas'
            }),
            defineField({
              name: 'description',
              title: 'Descrição',
              type: 'text',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'image',
              title: 'Imagem do Passeio',
              type: 'image',
              options: {
                hotspot: true
              }
            })
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'price',
              media: 'image'
            }
          }
        }
      ]
    }),
    defineField({
      name: 'paymentOptions',
      title: 'Opções de Pagamento',
      type: 'object',
      fields: [
        defineField({
          name: 'accommodation',
          title: 'Hospedagem e Passeios',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'method',
                  title: 'Forma de Pagamento',
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
              method: '1 vez',
              description: 'via boleto bancário ou Pix'
            },
            {
              method: '5 vezes',
              description: 'via Pix (parcelas mensais e quitação antes do check-in)'
            },
            {
              method: 'Até 10 vezes',
              description: 'via cartão de crédito (nesta modalidade, o valor pode sofrer alteração)'
            }
          ]
        }),
        defineField({
          name: 'insurance',
          title: 'Seguro Viagem',
          type: 'object',
          fields: [
            defineField({
              name: 'plan',
              title: 'Plano',
              type: 'string',
              initialValue: 'Plano Nacional 60.000'
            }),
            defineField({
              name: 'period',
              title: 'Período',
              type: 'string',
              description: 'Ex: 23 a 26 de novembro'
            }),
            defineField({
              name: 'prices',
              title: 'Preços por Faixa Etária',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'ageRange',
                      title: 'Faixa Etária',
                      type: 'string',
                      validation: Rule => Rule.required()
                    }),
                    defineField({
                      name: 'price',
                      title: 'Preço',
                      type: 'string',
                      validation: Rule => Rule.required()
                    })
                  ]
                }
              ],
              initialValue: [
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
              ]
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'isActive',
      title: 'Página Ativa',
      type: 'boolean',
      initialValue: true,
      description: 'Desmarque para ocultar o evento da listagem'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'images.cardImage'
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title,
        subtitle: `/${subtitle}`
      }
    }
  }
})