import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'opcoesViagemPage',
  title: 'Página Opções de Viagem',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      initialValue: 'Opções de Viagem',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      initialValue: 'Descubra as melhores opções de viagem para você',
      validation: Rule => Rule.required()
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