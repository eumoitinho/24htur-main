import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'eventPage',
  title: 'Página de Evento',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título interno',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'isActive',
      title: 'Ativo',
      type: 'boolean',
      initialValue: true
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string'
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'string'
    }),

    defineField({
      name: 'card',
      title: 'Card do evento',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Nome do evento',
          type: 'string'
        }),
        defineField({
          name: 'preCongress',
          title: 'Datas do pré-evento',
          type: 'string'
        }),
        defineField({
          name: 'mainEvent',
          title: 'Datas do evento principal',
          type: 'string'
        }),
        defineField({
          name: 'location',
          title: 'Local',
          type: 'string'
        }),
        defineField({
          name: 'address',
          title: 'Endereço',
          type: 'string'
        }),
        defineField({
          name: 'linkText',
          title: 'Texto do link',
          type: 'string',
          initialValue: 'SAIBA MAIS!'
        })
      ]
    }),

    // Hero Section
    defineField({
      name: 'hero',
      title: 'Bloco 1 - Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título Principal',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'eventName',
          title: 'Nome do Evento',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'preCongressDates',
          title: 'Datas do Pré-evento',
          type: 'string'
        }),
        defineField({
          name: 'mainEventDates',
          title: 'Datas do Evento Principal',
          type: 'string'
        }),
        defineField({
          name: 'location',
          title: 'Local',
          type: 'string'
        }),
        defineField({
          name: 'participants',
          title: 'Participantes',
          type: 'string'
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Imagem de fundo',
          type: 'image',
          options: { hotspot: true }
        })
      ]
    }),

    // About Section
    defineField({
      name: 'about',
      title: 'Bloco 2 - Sobre o Evento',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string'
        }),
        defineField({
          name: 'description',
          title: 'Descrição',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'expectedParticipants',
          title: 'Participantes Esperados',
          type: 'string'
        }),
        defineField({
          name: 'edition',
          title: 'Edição',
          type: 'string'
        }),
        defineField({
          name: 'parallelEvents',
          title: 'Eventos Paralelos',
          type: 'string'
        }),
        defineField({
          name: 'preCongressDescription',
          title: 'Descrição do Pré-evento',
          type: 'string'
        }),
        defineField({
          name: 'mainEventDescription',
          title: 'Descrição do Evento Principal',
          type: 'string'
        }),
        defineField({
          name: 'locationDescription',
          title: 'Descrição do Local',
          type: 'string'
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'image',
          title: 'Imagem',
          type: 'image',
          options: { hotspot: true }
        })
      ]
    }),

    // Services Section
    defineField({
      name: 'services',
      title: 'Bloco 3 - Serviços',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string'
        }),
        defineField({
          name: 'items',
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
                  type: 'string',
                  validation: Rule => Rule.required()
                })
              ]
            }
          ],
          initialValue: []
        })
      ]
    }),

    // Accommodation Section
    defineField({
      name: 'accommodation',
      title: 'Bloco 4 - Hospedagem',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string'
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
                  name: 'distance',
                  title: 'Distância do Evento',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'basePrice',
                  title: 'Preço Base',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'badge',
                  title: 'Badge (ex: Recomendado)',
                  type: 'string'
                }),
                defineField({
                  name: 'image',
                  title: 'Imagem do Hotel',
                  type: 'image'
                }),
                defineField({
                  name: 'details',
                  title: 'Detalhes',
                  type: 'array',
                  of: [{ type: 'string' }],
                  initialValue: []
                })
              ]
            }
          ],
          initialValue: []
        })
      ]
    }),

    // Why Choose Section
    defineField({
      name: 'whyChoose',
      title: 'Bloco 5 - Por que Escolher',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'description',
          title: 'Descrição',
          type: 'string'
        }),
        defineField({
          name: 'benefits',
          title: 'Benefícios',
          type: 'array',
          of: [{ type: 'string' }],
          initialValue: []
        }),
        defineField({
          name: 'stats',
          title: 'Estatísticas',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'number',
                  title: 'Número',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'text',
                  title: 'Texto',
                  type: 'string',
                  validation: Rule => Rule.required()
                })
              ]
            }
          ],
          initialValue: []
        })
      ]
    }),

    // Flights Section
    defineField({
      name: 'flights',
      title: 'Bloco 6 - Passagens Aéreas',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'description',
          title: 'Descrição',
          type: 'string'
        }),
        defineField({
          name: 'benefits',
          title: 'Benefícios',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Título',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'description',
                  title: 'Descrição',
                  type: 'string',
                  validation: Rule => Rule.required()
                })
              ]
            }
          ],
          initialValue: []
        }),
        defineField({
          name: 'note',
          title: 'Nota',
          type: 'string'
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string'
        }),
        defineField({
          name: 'image',
          title: 'Imagem',
          type: 'image',
          options: { hotspot: true }
        })
      ]
    }),

    // Tours Section
    defineField({
      name: 'tours',
      title: 'Bloco 7 - Passeios Exclusivos',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'info',
          title: 'Informações Importantes',
          type: 'array',
          of: [{ type: 'string' }],
          initialValue: []
        }),
        defineField({
          name: 'items',
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
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'priceDetail',
                  title: 'Detalhe do Preço',
                  type: 'string',
                  initialValue: 'por pessoa'
                }),
                defineField({
                  name: 'minimum',
                  title: 'Mínimo de Pessoas',
                  type: 'string',
                  initialValue: 'Saída com mínimo de duas pessoas'
                }),
                defineField({
                  name: 'description',
                  title: 'Descrição',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'image',
                  title: 'Imagem',
                  type: 'image',
                  options: { hotspot: true }
                })
              ]
            }
          ],
          initialValue: []
        })
      ]
    }),

    // Payment Section
    defineField({
      name: 'payment',
      title: 'Bloco 8 - Condições de Pagamento',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'accommodationAndTours',
          title: 'Hospedagem e Passeios',
          type: 'object',
          fields: [
            defineField({
              name: 'options',
              title: 'Opções de Pagamento',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'times',
                      title: 'Vezes',
                      type: 'string',
                      validation: Rule => Rule.required()
                    }),
                    defineField({
                      name: 'method',
                      title: 'Método',
                      type: 'string',
                      validation: Rule => Rule.required()
                    })
                  ]
                }
              ],
              initialValue: []
            }),
            defineField({
              name: 'note',
              title: 'Nota',
              type: 'string'
            })
          ]
        }),
        defineField({
          name: 'travelInsurance',
          title: 'Seguro Viagem',
          type: 'object',
          fields: [
            defineField({
              name: 'period',
              title: 'Período',
              type: 'string'
            }),
            defineField({
              name: 'planName',
              title: 'Nome do Plano',
              type: 'string'
            }),
            defineField({
              name: 'prices',
              title: 'Preços por Idade',
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
              initialValue: []
            }),
            defineField({
              name: 'note',
              title: 'Nota',
              type: 'string'
            }),
            defineField({
              name: 'paymentMethods',
              title: 'Formas de Pagamento',
              type: 'array',
              of: [{ type: 'string' }],
              initialValue: []
            })
          ]
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string'
        })
      ]
    }),

    // About Reveal Section
    defineField({
      name: 'about24H',
      title: 'Bloco 9 - Sobre a 24H',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'description',
          title: 'Descrição',
          type: 'array',
          of: [{ type: 'block' }],
          initialValue: []
        }),
        defineField({
          name: 'foundedYear',
          title: 'Ano de Fundação',
          type: 'string'
        }),
        defineField({
          name: 'image',
          title: 'Imagem da Equipe',
          type: 'image',
          options: { hotspot: true }
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string'
        })
      ]
    }),

    // Contact Section
    defineField({
      name: 'contact',
      title: 'Bloco 10 - Formulário de Contato',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string'
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do Botão',
          type: 'string'
        })
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'hero.eventName'
    }
  }
})
