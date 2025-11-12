import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Configurações do Site',
  type: 'document',
  fields: [
    // Navegação do Header
    defineField({
      name: 'headerNavigation',
      title: 'Navegação do Header',
      type: 'object',
      fields: [
        {
          name: 'phoneNumber',
          title: 'Telefone do Header',
          type: 'string',
          description: 'Telefone exibido no header (ex: (51) 3516-0098)'
        },
        {
          name: 'menuItems',
          title: 'Itens do Menu',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'href',
                  title: 'Link',
                  type: 'string',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'hasDropdown',
                  title: 'Tem Dropdown?',
                  type: 'boolean',
                  initialValue: false
                },
                {
                  name: 'dropdownItems',
                  title: 'Itens do Dropdown',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        {
                          name: 'label',
                          title: 'Label',
                          type: 'string',
                          validation: Rule => Rule.required()
                        },
                        {
                          name: 'href',
                          title: 'Link',
                          type: 'string',
                          validation: Rule => Rule.required()
                        }
                      ]
                    }
                  ],
                  hidden: ({ parent }) => !parent?.hasDropdown
                }
              ],
              preview: {
                select: {
                  title: 'label',
                  subtitle: 'href'
                }
              }
            }
          ]
        }
      ]
    }),

    // Navegação do Footer
    defineField({
      name: 'footerNavigation',
      title: 'Navegação do Footer',
      type: 'object',
      fields: [
        {
          name: 'menuItems',
          title: 'Itens do Menu',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'href',
                  title: 'Link',
                  type: 'string',
                  validation: Rule => Rule.required()
                }
              ],
              preview: {
                select: {
                  title: 'label',
                  subtitle: 'href'
                }
              }
            }
          ]
        },
        {
          name: 'socialLinks',
          title: 'Links das Redes Sociais',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'platform',
                  title: 'Plataforma',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Instagram', value: 'instagram' },
                      { title: 'Facebook', value: 'facebook' },
                      { title: 'LinkedIn', value: 'linkedin' },
                      { title: 'Twitter', value: 'twitter' },
                      { title: 'YouTube', value: 'youtube' }
                    ]
                  },
                  validation: Rule => Rule.required()
                },
                {
                  name: 'url',
                  title: 'URL',
                  type: 'url',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'label',
                  title: 'Label (acessibilidade)',
                  type: 'string',
                  validation: Rule => Rule.required()
                }
              ],
              preview: {
                select: {
                  title: 'platform',
                  subtitle: 'url'
                }
              }
            }
          ]
        },
        {
          name: 'copyrightText',
          title: 'Texto de Copyright',
          type: 'string',
          description: 'O ano será adicionado automaticamente. Ex: "24H Escritório de Viagens. Todos os direitos reservados."'
        },
        {
          name: 'privacyLink',
          title: 'Link de Privacidade',
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string'
            },
            {
              name: 'href',
              title: 'Link',
              type: 'string'
            }
          ]
        },
        {
          name: 'termsLink',
          title: 'Link de Termos',
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string'
            },
            {
              name: 'href',
              title: 'Link',
              type: 'string'
            }
          ]
        }
      ]
    }),

    // WhatsApp
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp',
      type: 'object',
      fields: [
        {
          name: 'phoneNumber',
          title: 'Número do WhatsApp',
          type: 'string',
          description: 'Número com código do país (ex: 5551999555555)'
        },
        {
          name: 'defaultMessage',
          title: 'Mensagem Padrão',
          type: 'text',
          rows: 3
        },
        {
          name: 'buttonTitle',
          title: 'Título do Botão',
          type: 'string'
        }
      ]
    }),

    // Configurações do Formulário de Contato
    defineField({
      name: 'contactForm',
      title: 'Formulário de Contato',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título do Formulário',
          type: 'string'
        },
        {
          name: 'subtitle',
          title: 'Subtítulo do Formulário',
          type: 'text',
          rows: 2
        },
        {
          name: 'calendlyUrl',
          title: 'URL do Calendly',
          type: 'url',
          description: 'URL para agendamento de reuniões'
        },
        {
          name: 'fields',
          title: 'Campos do Formulário',
          type: 'object',
          fields: [
            {
              name: 'empresa',
              title: 'Campo Empresa',
              type: 'object',
              fields: [
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'placeholder', title: 'Placeholder', type: 'string' }
              ]
            },
            {
              name: 'nome',
              title: 'Campo Nome',
              type: 'object',
              fields: [
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'placeholder', title: 'Placeholder', type: 'string' }
              ]
            },
            {
              name: 'email',
              title: 'Campo E-mail',
              type: 'object',
              fields: [
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'placeholder', title: 'Placeholder', type: 'string' }
              ]
            },
            {
              name: 'telefone',
              title: 'Campo Telefone',
              type: 'object',
              fields: [
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'placeholder', title: 'Placeholder', type: 'string' }
              ]
            },
            {
              name: 'assunto',
              title: 'Campo Assunto',
              type: 'object',
              fields: [
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'placeholder', title: 'Placeholder', type: 'string' }
              ]
            },
            {
              name: 'pax',
              title: 'Campo PAX',
              type: 'object',
              fields: [
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'placeholder', title: 'Placeholder', type: 'string' }
              ]
            },
            {
              name: 'interesses',
              title: 'Campo Interesses',
              type: 'object',
              fields: [
                { name: 'label', title: 'Label', type: 'string' }
              ]
            },
            {
              name: 'mensagem',
              title: 'Campo Mensagem',
              type: 'object',
              fields: [
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'placeholder', title: 'Placeholder', type: 'string' }
              ]
            }
          ]
        },
        {
          name: 'interessesOptions',
          title: 'Opções de Interesses',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'value',
                  title: 'Value',
                  type: 'string',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  validation: Rule => Rule.required()
                }
              ],
              preview: {
                select: {
                  title: 'label',
                  subtitle: 'value'
                }
              }
            }
          ]
        },
        {
          name: 'assuntoOptions',
          title: 'Opções de Assunto',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Lista de opções para o campo Assunto'
        },
        {
          name: 'paxOptions',
          title: 'Opções de PAX',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Lista de opções para o campo PAX'
        },
        {
          name: 'lgpdText',
          title: 'Texto LGPD',
          type: 'text',
          rows: 2
        },
        {
          name: 'submitButtonText',
          title: 'Texto do Botão de Envio',
          type: 'string'
        },
        {
          name: 'successMessage',
          title: 'Mensagem de Sucesso',
          type: 'text',
          rows: 2
        },
        {
          name: 'errorMessage',
          title: 'Mensagem de Erro',
          type: 'text',
          rows: 2
        }
      ]
    }),

    // Informações de Contato
    defineField({
      name: 'contactInfo',
      title: 'Informações de Contato',
      type: 'object',
      fields: [
        {
          name: 'mainPhone',
          title: 'Telefone Principal',
          type: 'string'
        },
        {
          name: 'mainEmail',
          title: 'E-mail Principal',
          type: 'string'
        },
        {
          name: 'offices',
          title: 'Escritórios',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'city',
                  title: 'Cidade',
                  type: 'string',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'state',
                  title: 'Estado',
                  type: 'string',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'address',
                  title: 'Endereço',
                  type: 'string',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'phone',
                  title: 'Telefone (opcional)',
                  type: 'string'
                },
                {
                  name: 'email',
                  title: 'E-mail (opcional)',
                  type: 'string'
                }
              ],
              preview: {
                select: {
                  title: 'city',
                  subtitle: 'address'
                }
              }
            }
          ]
        }
      ]
    }),

    // Branding
    defineField({
      name: 'branding',
      title: 'Branding',
      type: 'object',
      fields: [
        {
          name: 'logoAltText',
          title: 'Texto Alternativo do Logo',
          type: 'string',
          description: 'Texto para acessibilidade do logo'
        },
        {
          name: 'siteName',
          title: 'Nome do Site',
          type: 'string'
        },
        {
          name: 'siteDescription',
          title: 'Descrição do Site',
          type: 'text',
          rows: 3
        }
      ]
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Configurações do Site'
      }
    }
  }
})
