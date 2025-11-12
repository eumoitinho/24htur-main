import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'eventosInfoPage',
  title: 'Página Eventos Info',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'hero',
      title: 'Seção Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título Principal',
          type: 'string',
          initialValue: 'Eventos Corporativos',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          initialValue: 'Transformamos ideias em experiências inesquecíveis',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string',
          initialValue: 'SOLICITE SEU ORÇAMENTO',
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
    
    // About Section
    defineField({
      name: 'about',
      title: 'Seção Sobre',
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
    }),

    // Features Section
    defineField({
      name: 'features',
      title: 'Características',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Ícone',
              type: 'string'
            }),
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
      ]
    }),

    // Services Section
    defineField({
      name: 'services',
      title: 'Serviços',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Ícone',
              type: 'string'
            }),
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
      ]
    }),

    // CTA Section
    defineField({
      name: 'cta',
      title: 'Seção CTA',
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
    })
  ],
  preview: {
    select: {
      title: 'hero.title'
    }
  }
})

