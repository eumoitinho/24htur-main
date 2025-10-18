import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'equipePage',
  title: 'Página Equipe',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título Principal',
          type: 'string',
          initialValue: 'Nossa Equipe de Especialistas',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'text',
          initialValue: 'Profissionais experientes e apaixonados por viagens, dedicados a tornar seus sonhos realidade.',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Imagem de Fundo',
          type: 'image',
          options: {
            hotspot: true
          }
        })
      ]
    }),

    // Team Introduction
    defineField({
      name: 'teamIntro',
      title: 'Introdução da Equipe',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Conheça quem faz a diferença',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'description',
          title: 'Descrição',
          type: 'text',
          initialValue: 'Nossa equipe é formada por profissionais altamente qualificados e experientes no mercado de viagens. Cada membro traz sua expertise única para garantir que sua experiência seja excepcional.',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'stats',
          title: 'Estatísticas da Equipe',
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
                  title: 'Label',
                  type: 'string',
                  validation: Rule => Rule.required()
                })
              ]
            }
          ],
          initialValue: [
            { value: '15+', label: 'Especialistas' },
            { value: '50+', label: 'Anos de experiência combinada' },
            { value: '100%', label: 'Certificados' },
            { value: '24/7', label: 'Disponibilidade' }
          ]
        })
      ]
    }),

    // Team Members
    defineField({
      name: 'teamMembers',
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
              name: 'position',
              title: 'Cargo',
              type: 'string',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'bio',
              title: 'Biografia',
              type: 'text',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'photo',
              title: 'Foto',
              type: 'image',
              options: {
                hotspot: true
              },
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'experience',
              title: 'Anos de Experiência',
              type: 'number',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'specialties',
              title: 'Especialidades',
              type: 'array',
              of: [
                {
                  type: 'string'
                }
              ]
            }),
            defineField({
              name: 'certifications',
              title: 'Certificações',
              type: 'array',
              of: [
                {
                  type: 'string'
                }
              ]
            }),
            defineField({
              name: 'languages',
              title: 'Idiomas',
              type: 'array',
              of: [
                {
                  type: 'string'
                }
              ]
            }),
            defineField({
              name: 'isLeadership',
              title: 'É Liderança',
              type: 'boolean',
              initialValue: false
            })
          ]
        }
      ]
    }),

    // Departments
    defineField({
      name: 'departments',
      title: 'Departamentos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Nome do Departamento',
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
              name: 'icon',
              title: 'Ícone',
              type: 'string',
              options: {
                list: [
                  { title: 'Viagens', value: 'plane' },
                  { title: 'Atendimento', value: 'headphones' },
                  { title: 'Financeiro', value: 'calculator' },
                  { title: 'Operações', value: 'settings' },
                  { title: 'Marketing', value: 'megaphone' },
                  { title: 'Tecnologia', value: 'monitor' }
                ]
              }
            }),
            defineField({
              name: 'members',
              title: 'Membros',
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
                      name: 'position',
                      title: 'Cargo',
                      type: 'string',
                      validation: Rule => Rule.required()
                    })
                  ]
                }
              ]
            })
          ]
        }
      ],
      initialValue: [
        {
          name: 'Atendimento ao Cliente',
          description: 'Especialistas dedicados a proporcionar a melhor experiência de atendimento',
          icon: 'headphones'
        },
        {
          name: 'Operações de Viagem',
          description: 'Profissionais responsáveis pela execução perfeita de cada viagem',
          icon: 'plane'
        },
        {
          name: 'Suporte Financeiro',
          description: 'Equipe especializada em gestão financeira e câmbio',
          icon: 'calculator'
        }
      ]
    }),

    // Why Choose Our Team
    defineField({
      name: 'whyChooseTeam',
      title: 'Por que Escolher Nossa Equipe',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Por que nossa equipe faz a diferença?',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'items',
          title: 'Motivos',
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
          ],
          initialValue: [
            {
              title: 'Experiência Comprovada',
              description: 'Nossa equipe possui anos de experiência no mercado de viagens, garantindo conhecimento profundo dos destinos e serviços.'
            },
            {
              title: 'Atendimento Personalizado',
              description: 'Cada cliente recebe atenção individualizada, com soluções sob medida para suas necessidades específicas.'
            },
            {
              title: 'Disponibilidade 24/7',
              description: 'Nossa equipe está sempre disponível para auxiliar nossos clientes, independentemente do horário ou localização.'
            },
            {
              title: 'Formação Contínua',
              description: 'Investimos constantemente na capacitação de nossa equipe, mantendo-os atualizados com as últimas tendências do mercado.'
            }
          ]
        })
      ]
    }),

    // Contact CTA
    defineField({
      name: 'contactCTA',
      title: 'Call to Action de Contato',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Converse com nossos especialistas',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'text',
          initialValue: 'Nossa equipe está pronta para ajudar você a planejar sua próxima viagem perfeita.',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string',
          initialValue: 'FALE COM UM ESPECIALISTA',
          validation: Rule => Rule.required()
        })
      ]
    })
  ],
  preview: {
    select: {
      title: 'hero.title'
    }
  }
})