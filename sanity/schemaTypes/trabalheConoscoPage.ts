import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'trabalheConoscoPage',
  title: 'Página Trabalhe Conosco',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      initialValue: 'Trabalhe Conosco',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      initialValue: 'Faça parte da nossa equipe de especialistas em viagens',
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
    }),
    defineField({
      name: 'openPositions',
      title: 'Vagas Abertas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Título da Vaga',
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
              name: 'requirements',
              title: 'Requisitos',
              type: 'array',
              of: [{ type: 'string' }]
            }),
            defineField({
              name: 'benefits',
              title: 'Benefícios',
              type: 'array',
              of: [{ type: 'string' }]
            }),
            defineField({
              name: 'location',
              title: 'Localização',
              type: 'string'
            }),
            defineField({
              name: 'type',
              title: 'Tipo de Contrato',
              type: 'string',
              options: {
                list: [
                  { title: 'CLT', value: 'clt' },
                  { title: 'PJ', value: 'pj' },
                  { title: 'Estágio', value: 'estagio' },
                  { title: 'Freelancer', value: 'freelancer' }
                ]
              }
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