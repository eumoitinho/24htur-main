import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'cbenfPage',
  title: 'Página CBENF',
  type: 'document',
  fields: [
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
          initialValue: 'Sua participação no 75º CBEn sem complicações!',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'text',
          initialValue: 'Esqueça o estresse de organizar hospedagem, passagens e passeios. A 24H Escritório de Viagens cuida de tudo para você focar no que realmente importa: o conhecimento e networking do maior congresso de enfermagem do Brasil.',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string',
          initialValue: 'QUERO MEU PACOTE EXCLUSIVO!',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'eventName',
          title: 'Nome do Evento',
          type: 'string',
          initialValue: '75º Congresso Brasileiro de Enfermagem',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'preCongressDates',
          title: 'Datas do Pré-congresso',
          type: 'string',
          initialValue: '22-23 de Novembro'
        }),
        defineField({
          name: 'mainEventDates',
          title: 'Datas do Evento Principal',
          type: 'string',
          initialValue: '23-26 de Novembro 2025'
        }),
        defineField({
          name: 'location',
          title: 'Local',
          type: 'string',
          initialValue: 'Campus da PUCRS - Porto Alegre - RS'
        }),
        defineField({
          name: 'participants',
          title: 'Participantes',
          type: 'string',
          initialValue: 'Profissionais e estudantes de todo o Brasil'
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
          initialValue: '75º Congresso Brasileiro de Enfermagem',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          initialValue: 'O maior evento da enfermagem brasileira está chegando a Porto Alegre'
        }),
        defineField({
          name: 'description',
          title: 'Descrição',
          type: 'text',
          initialValue: 'A Associação Brasileira de Enfermagem (ABEn) promove este encontro fundamental para profissionais, estudantes, pesquisadores e gestores de todo o país.\n\nUma oportunidade única de atualização científica, networking e desenvolvimento profissional em um ambiente de excelência acadêmica.',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'expectedParticipants',
          title: 'Participantes Esperados',
          type: 'string',
          initialValue: '+5.000'
        }),
        defineField({
          name: 'edition',
          title: 'Edição',
          type: 'string',
          initialValue: '75º'
        }),
        defineField({
          name: 'parallelEvents',
          title: 'Eventos Paralelos',
          type: 'string',
          initialValue: '7º CLAHEN • 8º SENABS'
        }),
        defineField({
          name: 'preCongressDescription',
          title: 'Descrição do Pré-congresso',
          type: 'text',
          initialValue: 'Workshops e cursos preparatórios com especialistas renomados'
        }),
        defineField({
          name: 'mainEventDescription',
          title: 'Descrição do Evento Principal',
          type: 'text',
          initialValue: 'Palestras, painéis, apresentações de trabalhos e networking'
        }),
        defineField({
          name: 'locationDescription',
          title: 'Descrição do Local',
          type: 'text',
          initialValue: 'Porto Alegre - RS\nEstrutura completa e moderna'
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string',
          initialValue: 'QUERO PARTICIPAR',
          validation: Rule => Rule.required()
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
          initialValue: 'Tudo incluído para sua experiência completa',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'text',
          initialValue: 'Cuidamos de cada detalhe da sua viagem ao CBEnf 2024. Desde a chegada até a partida, nossa equipe especializada garante que você aproveite ao máximo este importante evento.'
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
                })
              ]
            }
          ],
          initialValue: [
            {
              title: 'Passagens Aéreas',
              description: 'Voos diretos ou com conexão para Goiânia, com as melhores tarifas e horários convenientes.'
            },
            {
              title: 'Hospedagem Exclusiva',
              description: 'Hotéis selecionados próximos ao evento, com tarifas especiais negociadas para congressistas.'
            },
            {
              title: 'Translado Incluso',
              description: 'Transfer aeroporto-hotel-evento, garantindo comodidade e pontualidade durante todo o congresso.'
            },
            {
              title: 'City Tour Goiânia',
              description: 'Conheça os principais pontos turísticos da capital, incluindo centro histórico e mercado central.'
            }
          ]
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
          initialValue: 'Hotéis Selecionados',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'text',
          initialValue: 'Hotéis estrategicamente localizados próximos ao evento, com tarifas especiais para congressistas.'
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
          initialValue: 'Especialistas em turismo científico',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'description',
          title: 'Descrição',
          type: 'text',
          initialValue: 'Somos referência na organização de viagens para eventos científicos e congressos médicos. Nossa experiência garante que você chegue descansado, hospedado no melhor local e pronto para aproveitar cada momento do CBEnf 2024.'
        }),
        defineField({
          name: 'benefits',
          title: 'Benefícios',
          type: 'array',
          of: [{ type: 'string' }],
          initialValue: [
            'Experiência de 15+ anos organizando viagens para eventos científicos',
            'Parcerias exclusivas com hotéis próximos ao convention center',
            'Tarifas especiais negociadas diretamente com companhias aéreas',
            'Equipe especializada em turismo científico e de saúde',
            'Suporte presencial durante todo o evento em Goiânia',
            'Flexibilidade para personalizar seu pacote conforme necessidade'
          ]
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
          initialValue: [
            { number: '2.500+', text: 'Congressistas atendidos em eventos anteriores' },
            { number: '15+', text: 'Anos organizando viagens científicas' },
            { number: '100%', text: 'Satisfação garantida' },
            { number: '24/7', text: 'Suporte durante o evento' }
          ]
        })
      ]
    }),

    // Contact Section
    defineField({
      name: 'contact',
      title: 'Bloco 6 - Formulário de Contato',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Garanta sua participação',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'text',
          initialValue: 'Preencha o formulário abaixo e nossa equipe entrará em contato para criar um pacote personalizado para sua participação no 75º CBEn.'
        })
      ]
    })
  ],
  preview: {
    select: {
      title: 'hero.eventName'
    }
  }
})

