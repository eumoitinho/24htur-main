import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sobrePage',
  title: 'Página Sobre',
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
          initialValue: 'Conheça a história da 24H',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'text',
          initialValue: 'Mais de duas décadas transformando sonhos em viagens inesquecíveis',
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

    // About Company Section
    defineField({
      name: 'aboutCompany',
      title: 'Sobre a Empresa',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Nossa História',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'description',
          title: 'Descrição',
          type: 'text',
          initialValue: 'A 24H Escritório de Viagens nasceu do sonho de democratizar o acesso a experiências de viagem únicas e memoráveis. Com mais de 20 anos de experiência no mercado, construímos uma reputação sólida baseada na excelência do atendimento, na qualidade dos serviços e no compromisso com nossos clientes.',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'image',
          title: 'Imagem',
          type: 'image',
          options: {
            hotspot: true
          }
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
            { value: '+20', label: 'Anos de experiência' },
            { value: '+1000', label: 'Viagens realizadas' },
            { value: '24/7', label: 'Suporte disponível' },
            { value: '100%', label: 'Satisfação garantida' }
          ]
        })
      ]
    }),

    // Mission, Vision, Values
    defineField({
      name: 'missionVisionValues',
      title: 'Missão, Visão e Valores',
      type: 'object',
      fields: [
        defineField({
          name: 'mission',
          title: 'Missão',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Título',
              type: 'string',
              initialValue: 'Nossa Missão',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'description',
              title: 'Descrição',
              type: 'text',
              initialValue: 'Proporcionar experiências de viagem excepcionais, personalizadas e seguras, superando as expectativas de nossos clientes através de um atendimento dedicado e soluções inovadoras.',
              validation: Rule => Rule.required()
            })
          ]
        }),
        defineField({
          name: 'vision',
          title: 'Visão',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Título',
              type: 'string',
              initialValue: 'Nossa Visão',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'description',
              title: 'Descrição',
              type: 'text',
              initialValue: 'Ser reconhecida como a principal referência em agenciamento de viagens no Brasil, conhecida pela excelência, inovação e compromisso com a satisfação total do cliente.',
              validation: Rule => Rule.required()
            })
          ]
        }),
        defineField({
          name: 'values',
          title: 'Valores',
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
              title: 'Excelência',
              description: 'Buscamos sempre a perfeição em cada detalhe do nosso atendimento e serviços.'
            },
            {
              title: 'Transparência',
              description: 'Mantemos comunicação clara e honesta em todas as nossas relações.'
            },
            {
              title: 'Inovação',
              description: 'Estamos sempre em busca de novas soluções e tecnologias para melhorar nossos serviços.'
            },
            {
              title: 'Compromisso',
              description: 'Nos dedicamos integralmente à satisfação e sucesso de nossos clientes.'
            }
          ]
        })
      ]
    }),

    // Team Section
    defineField({
      name: 'team',
      title: 'Nossa Equipe',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Conheça Nossa Equipe',
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
                  name: 'position',
                  title: 'Cargo',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'bio',
                  title: 'Biografia',
                  type: 'text'
                }),
                defineField({
                  name: 'photo',
                  title: 'Foto',
                  type: 'image',
                  options: {
                    hotspot: true
                  }
                }),
                defineField({
                  name: 'experience',
                  title: 'Anos de Experiência',
                  type: 'number'
                })
              ]
            }
          ]
        })
      ]
    }),

    // Certifications and Awards
    defineField({
      name: 'certifications',
      title: 'Certificações e Prêmios',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Certificações e Reconhecimentos',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'items',
          title: 'Certificações',
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
                  name: 'description',
                  title: 'Descrição',
                  type: 'text'
                }),
                defineField({
                  name: 'year',
                  title: 'Ano',
                  type: 'number'
                }),
                defineField({
                  name: 'logo',
                  title: 'Logo',
                  type: 'image',
                  options: {
                    hotspot: true
                  }
                })
              ]
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
          initialValue: 'Pronto para sua próxima aventura?',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'text',
          initialValue: 'Entre em contato conosco e deixe que transformemos seus sonhos em realidade.',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string',
          initialValue: 'FALE CONOSCO AGORA',
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