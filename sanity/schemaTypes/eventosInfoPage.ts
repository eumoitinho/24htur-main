import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'eventosInfoPage',
  title: 'Página Eventos Info',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Página',
      type: 'string',
      initialValue: 'Eventos Info',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      initialValue: 'Informações sobre nossos serviços de eventos'
    }),
    defineField({
      name: 'content',
      title: 'Conteúdo',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Título da Seção',
              type: 'string',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'content',
              title: 'Conteúdo',
              type: 'text',
              validation: Rule => Rule.required()
            })
          ]
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
})
