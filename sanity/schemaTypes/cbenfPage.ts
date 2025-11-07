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

    // Flights Section
    defineField({
      name: 'flights',
      title: 'Bloco 4 - Passagens Aéreas',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Passagens aéreas com os melhores preços',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'description',
          title: 'Descrição',
          type: 'text',
          initialValue: 'Trabalhamos com todas as companhias aéreas nacionais e internacionais. Nossa expertise garante os melhores preços e horários para sua viagem.'
        }),
        defineField({
          name: 'benefits',
          title: 'Benefícios',
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
                  type: 'string',
                  validation: Rule => Rule.required()
                })
              ]
            }
          ],
          initialValue: [
            {
              title: 'Todas as companhias em um só lugar',
              description: 'Compare e escolha a melhor opção para você'
            },
            {
              title: 'Melhor custo-benefício garantido',
              description: 'Negociação especial para o evento'
            }
          ]
        }),
        defineField({
          name: 'note',
          title: 'Nota',
          type: 'string',
          initialValue: '* O parcelamento no cartão de crédito depende das regras de cada companhia.'
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string',
          initialValue: 'SOLICITAR COTAÇÃO!'
        }),
        defineField({
          name: 'image',
          title: 'Imagem',
          type: 'image',
          options: {
            hotspot: true
          }
        })
      ]
    }),

    // Tours Section
    defineField({
      name: 'tours',
      title: 'Bloco 5 - Passeios Exclusivos',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Aproveite sua estadia para conhecer o melhor de Porto Alegre e região com nossos tours privativos.',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'info',
          title: 'Informações Importantes',
          type: 'array',
          of: [{ type: 'string' }],
          initialValue: [
            'Experiências privativas com mínimo de duas pessoas.',
            'Veículos compatíveis com número de passageiros.',
            'City tours incluem parques, igrejas, museus, centros culturais e pontos turísticos (acesso gratuito).',
            'Menores devem estar acompanhados de pais ou responsável.',
            'Cafés e restaurantes podem ser substituídos por equivalentes em caso de fechamento permanente ou temporário da casa.'
          ]
        }),
        defineField({
          name: 'items',
          title: 'Passeios',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Nome do Passeio',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'price',
                  title: 'Preço',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'priceDetail',
                  title: 'Detalhe do Preço',
                  type: 'string',
                  initialValue: 'por pessoa'
                }),
                defineField({
                  name: 'minimum',
                  title: 'Mínimo de Pessoas',
                  type: 'string',
                  initialValue: 'Saída com mínimo de duas pessoas'
                }),
                defineField({
                  name: 'description',
                  title: 'Descrição',
                  type: 'text',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'image',
                  title: 'Imagem',
                  type: 'image',
                  options: {
                    hotspot: true
                  }
                })
              ]
            }
          ],
          initialValue: []
        })
      ]
    }),

    // Payment Section
    defineField({
      name: 'payment',
      title: 'Bloco 6 - Condições de Pagamento',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Conheça nossas formas de pagamento',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'accommodationAndTours',
          title: 'Hospedagem e Passeios',
          type: 'object',
          fields: [
            defineField({
              name: 'options',
              title: 'Opções de Pagamento',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'times',
                      title: 'Vezes',
                      type: 'string',
                      validation: Rule => Rule.required()
                    }),
                    defineField({
                      name: 'method',
                      title: 'Método',
                      type: 'string',
                      validation: Rule => Rule.required()
                    })
                  ]
                }
              ],
              initialValue: [
                { times: '1 vez', method: 'via boleto bancário ou Pix' },
                { times: '5 vezes', method: 'via Pix (parcelas mensais e quitação antes do check-in)' },
                { times: 'Até 10 vezes', method: 'via cartão de crédito (nesta modalidade, o valor pode sofrer alteração)' }
              ]
            }),
            defineField({
              name: 'note',
              title: 'Nota',
              type: 'string',
              initialValue: 'O não pagamento na data estipulada, acarretará no cancelamento automático da reserva*'
            })
          ]
        }),
        defineField({
          name: 'travelInsurance',
          title: 'Seguro Viagem',
          type: 'object',
          fields: [
            defineField({
              name: 'period',
              title: 'Período',
              type: 'string',
              initialValue: 'Período: 23 a 26 de novembro'
            }),
            defineField({
              name: 'planName',
              title: 'Nome do Plano',
              type: 'string',
              initialValue: 'Plano Nacional 60.000'
            }),
            defineField({
              name: 'prices',
              title: 'Preços por Idade',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'ageRange',
                      title: 'Faixa Etária',
                      type: 'string',
                      validation: Rule => Rule.required()
                    }),
                    defineField({
                      name: 'price',
                      title: 'Preço',
                      type: 'string',
                      validation: Rule => Rule.required()
                    })
                  ]
                }
              ],
              initialValue: [
                { ageRange: 'Até 64 anos', price: 'R$ 41,80' },
                { ageRange: '65 até 85 anos', price: 'R$ 62,70' },
                { ageRange: '86 até 89 anos', price: 'R$ 125,40' }
              ]
            }),
            defineField({
              name: 'note',
              title: 'Nota',
              type: 'string',
              initialValue: '*Consulte valores para períodos menores ou maiores!'
            }),
            defineField({
              name: 'paymentMethods',
              title: 'Formas de Pagamento',
              type: 'array',
              of: [{ type: 'string' }],
              initialValue: [
                '1 vez via boleto bancário ou Pix',
                '5 vezes via pix (parcelas mensais e quitação antes do check-in)',
                'Consulte o parcelamento no cartão de crédito'
              ]
            })
          ]
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string',
          initialValue: 'SOLICITAR COTAÇÃO'
        })
      ]
    }),

    // About 24H Section
    defineField({
      name: 'about24H',
      title: 'Bloco 7 - Sobre a 24H',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Soluções completas para sua viagem de lazer ou negócios',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'description',
          title: 'Descrição',
          type: 'array',
          of: [{ type: 'block' }],
          initialValue: [
            {
              _type: 'block',
              children: [
                {
                  _type: 'span',
                  text: 'Fundada em 2015, a 24H Escritório de Viagens nasceu com uma proposta clara: oferecer soluções completas para viagens de lazer e corporativas. Nosso nome reflete exatamente nossa filosofia de trabalho - estar disponível quando você precisar, combinando a praticidade de um escritório de viagens com o profissionalismo que grandes eventos exigem.'
                }
              ]
            },
            {
              _type: 'block',
              children: [
                {
                  _type: 'span',
                  text: 'Nossa equipe é majoritariamente composta por mulheres com mais de 20 anos de expertise no agenciamento de viagens, o que nos proporciona uma visão única sobre as necessidades dos viajantes e a sensibilidade necessária para cuidar de cada detalhe da sua experiência.'
                }
              ]
            },
            {
              _type: 'block',
              children: [
                {
                  _type: 'span',
                  text: 'Trabalhamos com uma ampla gama de fornecedores estratégicos que nos permitem oferecer desde serviços avulsos como passagens aéreas, seguros, locação de veículos, hospedagem, vistos e câmbio, até a personalização completa de pacotes sob medida.'
                }
              ]
            },
            {
              _type: 'block',
              children: [
                {
                  _type: 'span',
                  text: 'Quando você escolhe a 24H, está optando por uma parceria com experiência comprovada, relacionamentos sólidos no mercado e uma reputação construída dia após dia através da satisfação de nossos clientes.'
                }
              ]
            }
          ]
        }),
        defineField({
          name: 'foundedYear',
          title: 'Ano de Fundação',
          type: 'string',
          initialValue: '2015'
        }),
        defineField({
          name: 'image',
          title: 'Imagem da Equipe',
          type: 'image',
          options: {
            hotspot: true
          }
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string',
          initialValue: 'FALE COM UM ESPECIALISTA!'
        })
      ]
    }),

    // Contact Section
    defineField({
      name: 'contact',
      title: 'Bloco 8 - Formulário de Contato',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Preencha o formulário abaixo e receba uma proposta exclusiva em até 24 horas!',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          initialValue: 'Solicite seu pacote personalizado'
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do Botão',
          type: 'string',
          initialValue: 'RECEBER PROPOSTA PERSONALIZADA'
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

