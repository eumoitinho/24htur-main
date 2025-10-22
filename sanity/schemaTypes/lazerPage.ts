import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'lazerPage',
  title: 'Página Lazer',
  type: 'document',
  fields: [
    // Bloco 1 - Hero
    defineField({
      name: 'hero',
      title: 'Bloco 1 - Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título Principal',
          type: 'string',
          initialValue: 'Sua próxima aventura inesquecível começa aqui!',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'text',
          initialValue: 'Deixe a 24H Escritório de Viagens transformar seus sonhos em realidade, com roteiros personalizados e experiências que ficarão para sempre na sua memória.',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string',
          initialValue: 'FALE AGORA COM UM ESPECIALISTA!',
          validation: Rule => Rule.required()
        })
      ]
    }),

    // Bloco 2 - Métricas
    defineField({
      name: 'metrics',
      title: 'Bloco 2 - Métricas',
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
            })
          ]
        }
      ],
      initialValue: [
        { value: '+20 anos de experiência no mercado' },
        { value: '24/7 suporte operacional' },
        { value: '100% gestão personalizada' },
        { value: '+1000 operações executadas com sucesso' }
      ]
    }),

    // Bloco 3 - Argumentos
    defineField({
      name: 'arguments',
      title: 'Bloco 3 - Argumentos',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Mais segurança para sua viagem dos sonhos',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'items',
          title: 'Argumentos',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'question',
                  title: 'Pergunta',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'answer',
                  title: 'Resposta',
                  type: 'text',
                  validation: Rule => Rule.required()
                })
              ]
            }
          ],
          initialValue: [
            {
              question: 'Roteiros genéricos?',
              answer: 'Criamos roteiros personalizados que se encaixam no seu perfil e refletem seus interesses, ritmo e estilo.'
            },
            {
              question: 'Preocupação com o orçamento?',
              answer: 'Planejamos sua viagem para caber dentro do seu orçamento, buscando as melhores tarifas e prevenindo gastos inesperados.'
            },
            {
              question: 'Excesso de opções?',
              answer: 'Facilitamos sua decisão, filtrando o excesso de informações e encontrando o que combina com seu perfil.'
            },
            {
              question: 'Falta de tempo para planejar?',
              answer: 'Cuidamos de todo o planejamento para que você só precise se preocupar em fazer as malas.'
            },
            {
              question: 'Medo de imprevistos?',
              answer: 'Nosso suporte acompanha você durante toda a viagem, solucionando problemas e garantindo que tudo saia como planejado.'
            },
            {
              question: 'Burocracia e documentação?',
              answer: 'Vistos, seguros, vacinas… Orientamos e cuidamos de cada detalhe para que sua documentação esteja em dia.'
            }
          ]
        })
      ]
    }),

    // Bloco 4 - Experiências
    defineField({
      name: 'experiences',
      title: 'Bloco 4 - Experiências',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Especialistas em proporcionar experiências memoráveis…',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'description',
          title: 'Descrição',
          type: 'text',
          initialValue: 'Cada viagem é uma oportunidade única de criar memórias e explorar novos horizontes. A 24H Escritório de Viagens oferece um serviço de agenciamento completo para sua viagem de lazer, cuidando de cada detalhe para que você desfrute ao máximo de seus momentos de descanso e diversão.\n\nCom uma equipe de profissionais com mais de 20 anos de expertise e uma rede extensa de fornecedores, operamos serviços personalizados no Brasil ou no exterior. Nossa missão é proporcionar uma experiência de viagem perfeita, sem preocupações, desde o momento em que você sonha com o destino até o momento em que retorna para casa com o coração cheio de boas lembranças.',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string',
          initialValue: 'FALE AGORA COM UM ESPECIALISTA!',
          validation: Rule => Rule.required()
        })
      ]
    }),

    // Bloco 5 - Tipos de Viagem
    defineField({
      name: 'travelTypes',
      title: 'Bloco 5 - Tipos de Viagem',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Seu roteiro do seu jeito',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'types',
          title: 'Tipos de Viagem',
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
                  name: 'icon',
                  title: 'Ícone',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Aventura', value: 'adventure' },
                      { title: 'Romântico', value: 'romantic' },
                      { title: 'Gastronômico', value: 'food' },
                      { title: 'Cultural', value: 'culture' },
                      { title: 'Eventos', value: 'events' },
                      { title: 'Compras', value: 'shopping' },
                      { title: 'Verão', value: 'summer' },
                      { title: 'Inverno', value: 'winter' }
                    ]
                  }
                })
              ]
            }
          ],
          initialValue: [
            { name: 'Viagens de aventura', icon: 'adventure' },
            { name: 'Viagens românticas', icon: 'romantic' },
            { name: 'Viagens gastronômica', icon: 'food' },
            { name: 'Viagens culturais', icon: 'culture' },
            { name: 'Viagens para eventos', icon: 'events' },
            { name: 'Viagens de compras', icon: 'shopping' },
            { name: 'Viagens de verão', icon: 'summer' },
            { name: 'Viagens de inverno', icon: 'winter' }
          ]
        })
      ]
    }),

    // Bloco 6 - Serviços
    defineField({
      name: 'services',
      title: 'Bloco 6 - Serviços',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Serviços completos para sua viagem de lazer',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string',
          initialValue: 'PERSONALIZE DO SEU JEITO!',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'items',
          title: 'Lista de Serviços',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'service',
                  title: 'Serviço',
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
              service: 'Bilhetes aéreos',
              description: 'Negociação de tarifas diferenciadas e busca pelas melhores opções para seu destino de sonho.'
            },
            {
              service: 'Hospedagem',
              description: 'Auxílio especializado na escolha de hotéis, resorts ou pousadas que melhor se adequam ao seu estilo e orçamento.'
            },
            {
              service: 'Câmbio',
              description: 'Facilidade para suas transações financeiras internacionais.'
            },
            {
              service: 'Cartão de débito e chip internacional',
              description: 'Soluções financeiras e de conectividade para suas viagens ao exterior.'
            },
            {
              service: 'Sala VIP',
              description: 'Conforto e exclusividade em aeroportos.'
            },
            {
              service: 'Encaminhamento de visto',
              description: 'Agilidade nos processos burocráticos para que nada impeça sua viagem.'
            },
            {
              service: 'Locação de veículos',
              description: 'Opções variadas para sua mobilidade no destino.'
            },
            {
              service: 'Traslados privativos',
              description: 'Planejamento e execução de serviços de traslado Aeroporto/Hotel/Aeroporto.'
            },
            {
              service: 'Transporte rodoviário',
              description: 'Soluções para deslocamentos terrestres intermunicipais e interestaduais.'
            },
            {
              service: 'Ingressos',
              description: 'Acesso facilitado a eventos, shows, parques e atrações turísticas.'
            },
            {
              service: 'Cruzeiros marítimos e fluviais',
              description: 'Opções diferenciadas para uma experiência de viagem única.'
            },
            {
              service: 'Tickets de trem',
              description: 'Mobilidade eficiente e paisagens deslumbrantes em diversas regiões.'
            },
            {
              service: 'Guias e tradutores',
              description: 'Suporte linguístico e cultural para enriquecer sua experiência.'
            },
            {
              service: 'Opções de passeios',
              description: 'Sugestões e organização de roteiros personalizados, de acordo com seus interesses.'
            },
            {
              service: 'Wine experiences',
              description: 'Roteiros exclusivos para amantes de vinho, explorando as melhores vinícolas.'
            }
          ]
        })
      ]
    }),

    // Bloco 7 - Por que escolher
    defineField({
      name: 'whyChoose',
      title: 'Bloco 7 - Por que escolher a 24H',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Por que escolher a 24H?',
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
              title: 'Disponibilidade 24H',
              description: 'Suporte técnico permanente com atendimento especializado da própria equipe.'
            },
            {
              title: 'Negociação de tarifas',
              description: 'Condições comerciais diferenciadas através de nossa rede de fornecedores.'
            },
            {
              title: 'Expertise técnica',
              description: 'Equipe com formação superior e +20 anos de experiência no setor.'
            },
            {
              title: 'Gestão personalizada',
              description: 'Atendimento dedicado com profissional especializado no seu perfil.'
            },
            {
              title: 'Rede consolidada',
              description: 'Parcerias estratégicas com ampla rede de fornecedores nacionais e internacionais.'
            },
            {
              title: 'Controle financeiro',
              description: 'Sistema de relatórios gerenciais parametrizados por centros de custos.'
            }
          ]
        })
      ]
    }),

    // Bloco 8 - Sobre a empresa
    defineField({
      name: 'aboutCompany',
      title: 'Bloco 8 - Sobre a 24H',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'SOBRE A 24H',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          initialValue: 'Mais de duas décadas especializados em gestão de viagens',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'description',
          title: 'Descrição',
          type: 'text',
          initialValue: 'A 24H Escritório de Viagens é uma agência especializada em viagens corporativas, de lazer, turismo de incentivo e eventos. Com mais de 20 anos de experiência no mercado, nossa equipe atua com excelência na gestão de viagens nacionais e internacionais, oferecendo soluções completas e personalizadas para empresas, famílias e clientes individuais.\n\nCuidamos de todas as etapas da viagem, desde a cotação até a emissão de passagens, reservas de hotéis, traslados, câmbio, seguros, vistos, locação de veículos, roteiros turísticos e ingressos. Trabalhamos com uma ampla rede de fornecedores e parceiros nos setores aéreo, hoteleiro e de turismo, garantindo agilidade, economia e segurança em cada atendimento.\n\nNosso compromisso é oferecer uma experiência de viagem tranquila, eficiente e sem imprevistos, com suporte disponível 24 horas por dia, 7 dias por semana.',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string',
          initialValue: 'FALE AGORA COM UM ESPECIALISTA!',
          validation: Rule => Rule.required()
        })
      ]
    }),

    // Bloco 9 - Depoimentos
    defineField({
      name: 'testimonials',
      title: 'Bloco 9 - Depoimentos',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'DEPOIMENTOS',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          initialValue: 'O que nossos clientes dizem sobre nós',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'items',
          title: 'Depoimentos',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'text',
                  title: 'Texto do Depoimento',
                  type: 'text',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'author',
                  title: 'Autor',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'rating',
                  title: 'Avaliação',
                  type: 'number',
                  validation: Rule => Rule.required().min(1).max(5)
                })
              ]
            }
          ],
          initialValue: [
            {
              text: 'Escritório sempre atento às necessidades dos clientes, e muito proativo nas resoluções de toda e qualquer situação.',
              author: 'Christian Bittencourt',
              rating: 5
            },
            {
              text: 'Já fiz várias viagens com a 24H. Sempre excelentes no atendimento, realizaram nossos sonhos de viagens e passeios com conforto e tranquilidade.',
              author: 'Renato Saffi',
              rating: 5
            },
            {
              text: 'Os pacotes foram de excelente custo-benefício. Ficamos em ótimos hotéis e os passeios propostos foram excelentes pedidas.',
              author: 'Gabriela Vaz',
              rating: 5
            }
          ]
        })
      ]
    }),

    // Bloco 10 - Formulário
    defineField({
      name: 'contactForm',
      title: 'Bloco 10 - Formulário de Contato',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Deixe a 24H cuidar de tudo',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'text',
          initialValue: 'Preencha o formulário abaixo e nossa equipe de especialistas em lazer entrará em contato para criar um roteiro personalizado e inesquecível para você.',
          validation: Rule => Rule.required()
        })
      ]
    }),

    // Bloco 11 - Rodapé
    defineField({
      name: 'footer',
      title: 'Bloco 11 - Rodapé',
      type: 'object',
      fields: [
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
      title: 'hero.title'
    }
  }
})

