import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Página',
      type: 'string',
      initialValue: '24H Escritório de Viagens - Homepage',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'isActive',
      title: 'Página Ativa',
      type: 'boolean',
      initialValue: true
    }),
    defineField({
      name: 'seoTitle',
      title: 'Título SEO',
      type: 'string',
      initialValue: '24H Escritório de Viagens - Gestão completa de viagens de negócios e lazer'
    }),
    defineField({
      name: 'seoDescription',
      title: 'Descrição SEO',
      type: 'text',
      initialValue: 'Soluções estratégicas com atendimento 24/7 e mais de 20 anos de experiência no mercado'
    }),

    // Hero Section
    defineField({
      name: 'hero',
      title: 'Seção Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título Principal',
          type: 'array',
          of: [{ type: 'block' }],
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'text',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string',
          initialValue: 'FALE COM UM ESPECIALISTA!'
        })
      ]
    }),

    // Metrics Section
    defineField({
      name: 'metrics',
      title: 'Seção de Métricas',
      type: 'object',
      fields: [
        defineField({
          name: 'items',
          title: 'Métricas',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'value',
                  title: 'Valor',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'label',
                  title: 'Rótulo',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'icon',
                  title: 'Ícone',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Calendário', value: 'calendar' },
                      { title: 'Relógio', value: 'clock' },
                      { title: 'Usuário', value: 'user' },
                      { title: 'Check', value: 'checkmark' }
                    ]
                  }
                })
              ]
            }
          ]
        })
      ]
    }),

    // Problems Section
    defineField({
      name: 'problems',
      title: 'Seção de Problemas',
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
          type: 'text'
        }),
        defineField({
          name: 'items',
          title: 'Problemas',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Título do Problema',
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
          ]
        })
      ]
    }),

    // Experience Section
    defineField({
      name: 'experience',
      title: 'Seção de Experiência',
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
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string'
        })
      ]
    }),

    // Clients Section
    defineField({
      name: 'clients',
      title: 'Seção de Clientes',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Nossos Clientes'
        }),
        defineField({
          name: 'logos',
          title: 'Logos dos Clientes',
          type: 'array',
          of: [
            {
              type: 'image',
              options: {
                hotspot: true
              }
            }
          ]
        })
      ]
    }),

    // Services Section
    defineField({
      name: 'services',
      title: 'Seção de Serviços',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Nossos Serviços'
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
                  type: 'text',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'link',
                  title: 'Link',
                  type: 'string'
                }),
                defineField({
                  name: 'ctaText',
                  title: 'Texto do CTA',
                  type: 'string'
                })
              ]
            }
          ]
        })
      ]
    }),

    // Why Choose Section
    defineField({
      name: 'whyChoose',
      title: 'Seção Por que Escolher',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Por que escolher a 24H?'
        }),
        defineField({
          name: 'items',
          title: 'Itens',
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
                  type: 'text',
                  validation: Rule => Rule.required()
                })
              ]
            }
          ]
        })
      ]
    }),

    // About Company Section
    defineField({
      name: 'aboutCompany',
      title: 'Seção Sobre a Empresa',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Sobre a 24H'
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string'
        }),
        defineField({
          name: 'description',
          title: 'Descrição',
          type: 'array',
          of: [{ type: 'block' }],
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string'
        })
      ]
    }),

    // Team Section
    defineField({
      name: 'team',
      title: 'Seção da Equipe',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Nossa Equipe'
        }),
        defineField({
          name: 'members',
          title: 'Membros da Equipe',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Nome',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'role',
                  title: 'Cargo',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'education',
                  title: 'Formação',
                  type: 'string'
                }),
                defineField({
                  name: 'experience',
                  title: 'Experiência',
                  type: 'string'
                })
              ]
            }
          ]
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string'
        })
      ]
    }),

    // Testimonials Section
    defineField({
      name: 'testimonials',
      title: 'Seção de Depoimentos',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Depoimentos'
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          initialValue: 'O que nossos clientes dizem sobre nós'
        }),
        defineField({
          name: 'items',
          title: 'Depoimentos',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Nome do Cliente',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'text',
                  title: 'Texto do Depoimento',
                  type: 'text',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'rating',
                  title: 'Avaliação',
                  type: 'number',
                  validation: Rule => Rule.min(1).max(5)
                })
              ]
            }
          ]
        })
      ]
    }),

    // Contact Section
    defineField({
      name: 'contact',
      title: 'Seção de Contato',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Precisa de ajuda para organizar sua viagem?'
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'text'
        }),
        defineField({
          name: 'formTitle',
          title: 'Título do Formulário',
          type: 'string',
          initialValue: 'Formulário de Contato'
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
