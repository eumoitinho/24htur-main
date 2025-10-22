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
      initialValue: 'TRABALHE CONOSCO',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
      initialValue: 'Conecte-se com a 24H Escritório de Viagens',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'intro',
      title: 'Introdução',
      type: 'text',
      initialValue: 'Se você busca uma oportunidade de fazer parte de uma equipe experiente e dedicada, que transforma sonhos em realidade e oferece soluções inovadoras no mercado de turismo, você encontrou o lugar certo.\n\nSe você é apaixonado (a) por desafios, tem experiência no setor de turismo e deseja crescer profissionalmente em um ambiente dinâmico e colaborativo, queremos te conhecer!\n\nPreencha o formulário abaixo e anexe seu currículo. Sua próxima jornada profissional pode começar aqui.',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'contact',
      title: 'Informações de Contato',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título da Seção',
          type: 'string',
          initialValue: 'CONTATO',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'companyName',
          title: 'Nome da Empresa',
          type: 'string',
          initialValue: '24H Escritório de Viagens',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'addresses',
          title: 'Endereços',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'address',
                  title: 'Endereço',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'city',
                  title: 'Cidade',
                  type: 'string',
                  validation: Rule => Rule.required()
                })
              ]
            }
          ],
          initialValue: [
            { address: 'Avenida Carlos Gomes 1672, 7º andar', city: 'Porto Alegre, RS' },
            { address: 'Alameda Rio Negro 503, 6º andar', city: 'Alphaville, SP' },
            { address: 'Avenida Luiz Boiteaux Piazza, 1302', city: 'Florianópolis, SC' }
          ]
        }),
        defineField({
          name: 'phone',
          title: 'Telefone',
          type: 'string',
          initialValue: '(51) 3516-0098',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
          initialValue: 'contato@24h.tur.br',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'socialMedia',
          title: 'Redes Sociais',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'platform',
                  title: 'Plataforma',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Instagram', value: 'instagram' },
                      { title: 'Facebook', value: 'facebook' },
                      { title: 'LinkedIn', value: 'linkedin' }
                    ]
                  }
                }),
                defineField({
                  name: 'url',
                  title: 'URL',
                  type: 'url',
                  validation: Rule => Rule.required()
                })
              ]
            }
          ],
          initialValue: [
            { platform: 'instagram', url: 'https://www.instagram.com/24hescritoriodeviagens' },
            { platform: 'facebook', url: 'http://www.facebook.com/24HEscritoriodeViagens' },
            { platform: 'linkedin', url: 'https://www.linkedin.com/company/24hescritoriodeviagens' }
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

