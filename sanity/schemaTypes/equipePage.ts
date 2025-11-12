import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'equipePage',
  title: 'Página Equipe',
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
          initialValue: 'NOSSA EQUIPE',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          initialValue: 'Por trás de cada viagem bem-sucedida e de cada cliente satisfeito, existe uma equipe de profissionais altamente qualificados e apaixonados pelo que fazem.',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string',
          initialValue: 'FALE COM UM ESPECIALISTA!',
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
    
    // Metrics Section
    defineField({
      name: 'metrics',
      title: 'Métricas',
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
              title: 'Rótulo',
              type: 'string',
              validation: Rule => Rule.required()
            })
          ]
        }
      ],
      initialValue: [
        { value: '+20', label: 'anos de experiência no mercado' },
        { value: '24/7', label: 'suporte operacional' },
        { value: '100%', label: 'gestão personalizada' },
        { value: '+1000', label: 'operações executadas com sucesso' }
      ]
    }),

    // Problems Section
    defineField({
      name: 'problems',
      title: 'Seção de Problemas',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Descomplique sua rotina de viagens com quem entende do assunto',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'items',
          title: 'Problemas',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Título do Problema',
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
              title: 'Sem tempo para planejar?',
              description: 'Nossa equipe especializada cuida de cada etapa da sua viagem, enquanto você foca no que realmente importa.'
            },
            {
              title: 'Gastos fora de controle?',
              description: 'Reduza custos com nossas tarifas corporativas e parcerias estratégicas com fornecedores do setor de turismo.'
            },
            {
              title: 'Problemas no meio da viagem?',
              description: 'Nossa equipe está disponível 24 horas por dia, pronta para resolver qualquer imprevisto durante a sua viagem.'
            },
            {
              title: 'Burocracia em excesso?',
              description: 'Oferecemos um sistema integrado para facilitar processos como reembolsos, solicitações e aprovações, com fluxos 100% digitais.'
            },
            {
              title: 'Roteiros genéricos?',
              description: 'Personalizamos roteiros, passeios e experiências para garantir que cada viagem seja única, agradável e memorável.'
            },
            {
              title: 'Desafios no exterior?',
              description: 'Auxiliamos no processo de compra de moeda estrangeira e aquisição de cartão de débito e chip internacional.'
            }
          ]
        })
      ]
    }),

    // Experience Section
    defineField({
      name: 'experience',
      title: 'Seção Experiência 24H',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Viva a experiência 24H',
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
                  text: 'Na 24H, transformamos cada viagem em uma experiência única e sem preocupações. Seja a trabalho, lazer ou para um evento especial, somos sua consultoria estratégica completa em gestão de viagens.'
                }
              ]
            },
            {
              _type: 'block',
              children: [
                {
                  _type: 'span',
                  text: 'Conte com a nossa ampla rede de fornecedores e a expertise da nossa equipe especializada para garantir excelência em cada etapa da sua viagem. Da seleção de destinos e passagens aéreas à hospedagem, traslados, atividades e roteiros, coordenamos cada detalhe com precisão para você.'
                }
              ]
            }
          ]
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string',
          initialValue: 'FALE COM UM ESPECIALISTA!',
          validation: Rule => Rule.required()
        })
      ]
    }),

    // Clients Section
    defineField({
      name: 'clients',
      title: 'Seção Clientes',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'NOSSOS CLIENTES',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'placeholder',
          title: 'Texto Placeholder',
          type: 'string',
          initialValue: '(Aguardando envio pela cliente)'
        })
      ]
    }),

    // Services Section
    defineField({
      name: 'services',
      title: 'Seção Serviços',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'NOSSOS SERVIÇOS',
          validation: Rule => Rule.required()
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
                  title: 'Título',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'description',
                  title: 'Descrição',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'link',
                  title: 'Link',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'ctaText',
                  title: 'Texto do CTA',
                  type: 'string',
                  validation: Rule => Rule.required()
                })
              ]
            }
          ],
          initialValue: [
            {
              title: 'Viagens corporativas',
              description: 'Otimize sua gestão de viagens empresariais com nossa gestão de passagens, hospedagens, traslados executivos e relatórios detalhados por centro de custos. Atendemos desde viagens individuais até grandes grupos e programas de incentivo, garantindo economia, agilidade e total conformidade com as políticas da sua empresa.',
              link: '/corporate',
              ctaText: 'SAIBA MAIS!'
            },
            {
              title: 'Viagens de lazer',
              description: 'Transforme suas férias em experiências únicas com nosso planejamento especializado. Cuidamos de passagens, hospedagens, câmbio, roteiros turísticos e até passeios exclusivos. Nossa equipe resolve todos os detalhes operacionais para que você se preocupe apenas em aproveitar cada momento da sua viagem.',
              link: '/lazer',
              ctaText: 'SAIBA MAIS!'
            },
            {
              title: 'Viagens para eventos',
              description: 'Cuidamos de toda a logística de viagens para feiras, congressos, convenções e encontros corporativos, atendendo empresas, palestrantes e participantes. Fornecemos assessoria personalizada e gerimos passagens aéreas e rodoviárias, reservas, transfers e passeios pré e pós-evento.',
              link: '/eventos',
              ctaText: 'SAIBA MAIS!'
            }
          ]
        })
      ]
    }),

    // Why Choose Section
    defineField({
      name: 'whyChoose',
      title: 'Seção Por que Escolher',
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
                  type: 'string',
                  validation: Rule => Rule.required()
                })
              ]
            }
          ],
          initialValue: [
            {
              title: 'Disponibilidade 24/7',
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

    // About Section
    defineField({
      name: 'about',
      title: 'Seção Sobre',
      type: 'object',
      fields: [
        defineField({
          name: 'badge',
          title: 'Badge',
          type: 'string',
          initialValue: 'SOBRE A 24H'
        }),
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Mais de duas décadas especializados em gestão de viagens',
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
                  text: 'A 24H Escritório de Viagens é uma agência especializada em viagens corporativas, de lazer, turismo de incentivo e eventos. Com mais de 20 anos de experiência no mercado, nossa equipe atua com excelência na gestão de viagens nacionais e internacionais, oferecendo soluções completas e personalizadas para empresas, famílias e clientes individuais.'
                }
              ]
            },
            {
              _type: 'block',
              children: [
                {
                  _type: 'span',
                  text: 'Cuidamos de todas as etapas da viagem, desde a cotação até a emissão de passagens, reservas de hotéis, traslados, câmbio, seguros, vistos, locação de veículos, roteiros turísticos e ingressos. Trabalhamos com uma ampla rede de fornecedores e parceiros nos setores aéreo, hoteleiro e de turismo, garantindo agilidade, economia e segurança em cada atendimento.'
                }
              ]
            },
            {
              _type: 'block',
              children: [
                {
                  _type: 'span',
                  text: 'Nosso compromisso é oferecer uma experiência de viagem tranquila, eficiente e sem imprevistos, com suporte disponível 24 horas por dia, 7 dias por semana.'
                }
              ]
            }
          ]
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string',
          initialValue: 'FALE COM UM ESPECIALISTA!',
          validation: Rule => Rule.required()
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
                  title: 'Rótulo',
                  type: 'string',
                  validation: Rule => Rule.required()
                })
              ]
            }
          ],
          initialValue: [
            { value: '3', label: 'Escritórios no Brasil' },
            { value: '+20', label: 'Anos de experiência' },
            { value: '24/7', label: 'Suporte dedicado' },
            { value: '100%', label: 'Gestão personalizada' }
          ]
        })
      ]
    }),

    // Team Section
    defineField({
      name: 'team',
      title: 'Seção Equipe',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'NOSSA EQUIPE',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'intro',
          title: 'Introdução',
          type: 'string',
          initialValue: 'Por trás de cada viagem bem-sucedida e de cada cliente satisfeito, existe uma equipe de profissionais altamente qualificados e apaixonados pelo que fazem. São eles que transformam seus planos em realidade, oferecendo um atendimento personalizado e a excelência que nos diferencia no mercado.',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          initialValue: 'Conheça os membros da nossa equipe:',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'members',
          title: 'Membros',
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
                  name: 'education',
                  title: 'Formação',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'experience',
                  title: 'Experiência',
                  type: 'string',
                  validation: Rule => Rule.required()
                })
              ]
            }
          ],
          initialValue: [
            {
              name: 'Betinna Pavim',
              position: 'CEO|COO',
              education: 'Bacharel em Turismo com ênfase em Hotelaria pelo Centro Universitário Medotista IPA',
              experience: '20 anos de experiência no turismo, dentro de agenciamento de viagens'
            },
            {
              name: 'Liciane Rossetto',
              position: 'CEO|CFO',
              education: 'Bacharel em Turismo pela PUCRS; Especialista pela UDESC; Mestre pela UFSC; Doutora pela PUCRS EPATUR',
              experience: 'Alitália; Anita Pires e Associados; Multieventos Promoção e Organização de Eventos; BRK Consultores Associados; Soluções Integradas Consulting – 30 anos de experiência no Turismo'
            },
            {
              name: 'Letícia Wonsovicz Bastos',
              position: 'Diretora SAO',
              education: 'Bacharel em Nutrição',
              experience: 'Empresária Mon Bureau Coworking em Alphaville'
            },
            {
              name: 'Marta Dal Molin',
              position: 'Diretora FLN',
              education: 'Tecnóloga em Gestão, Pós-Graduada em Administração e Marketing',
              experience: 'Empresária com 20 anos de experiência em Redes Hoteleiras'
            },
            {
              name: 'Renata Barbiani',
              position: 'Corporativo e Eventos',
              education: 'Bacharel em Turismo pela PUCRS',
              experience: 'Queensberry (2 anos); Secretaria Municipal de Turismo (2 anos); Ouro e Prata (12 anos); Sinal Viagens'
            },
            {
              name: 'Karine Vigil',
              position: 'Corporativo e Eventos',
              education: 'Bacharel em Turismo ênfase em Hotelaria pelo Centro Universitário Medotista IPA',
              experience: 'Oritur (1 ano); Plus Eventos (2 anos); Fellini Eventos (1 ano); Innovare Viagens (proprietária 15 anos)'
            },
            {
              name: 'Débora Galo',
              position: 'Corporativo',
              education: 'Bacharelado em Turismo pela FARGS',
              experience: 'GalFer\'s Viagens e Turismo (22 anos)'
            },
            {
              name: 'Fernanda Medeiros',
              position: 'Travel Designer',
              education: 'Bacharel Jornalismo e Comunicação Social (UNISINOS)',
              experience: 'Travel Plan Viagens (6 anos); Montrel Viagens & Turismo (1 ano); CVC Operadora (7 anos)'
            },
            {
              name: 'Jorge Gabriel',
              position: 'Roteiros Especiais',
              education: 'Licenciado em Geografia, Tecnólogo em Gestão Ambiental e pós-graduado',
              experience: 'Gol Linhas Aéreas (4 anos); FluTour PUCRS (5 anos); Gerente CVC (2 anos)'
            },
            {
              name: 'Elci Tem Pass',
              position: 'Financeiro',
              education: '',
              experience: 'Mercatur Operadora (4 anos); Skyteam Consolidadora (2 anos); Oritur (4 anos); Wagons Lits (14 anos)'
            }
          ]
        })
      ]
    }),

    // Testimonials Section
    defineField({
      name: 'testimonials',
      title: 'Seção Depoimentos',
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
          initialValue: 'O que nossos clientes dizem sobre nós'
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
                  name: 'name',
                  title: 'Nome',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'text',
                  title: 'Texto',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'rating',
                  title: 'Avaliação',
                  type: 'number',
                  initialValue: 5,
                  validation: Rule => Rule.required().min(1).max(5)
                })
              ]
            }
          ],
          initialValue: [
            {
              name: 'Christian Bittencourt',
              text: 'Escritório sempre atento às necessidades dos clientes, e muito proativo nas resoluções de toda e qualquer situação.',
              rating: 5
            },
            {
              name: 'Renato Saffi',
              text: 'Já fiz várias viagens com a 24H. Sempre excelentes no atendimento, realizaram nossos sonhos de viagens e passeios com conforto e tranquilidade.',
              rating: 5
            },
            {
              name: 'Gabriela Vaz',
              text: 'Os pacotes foram de excelente custo-benefício. Ficamos em ótimos hotéis e os passeios propostos foram excelentes pedidas.',
              rating: 5
            }
          ]
        })
      ]
    }),

    // Contact Section
    defineField({
      name: 'contact',
      title: 'Seção Contato',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Precisa de ajuda para organizar sua viagem?',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          initialValue: 'Preencha o formulário e nossa equipe especializada entrará em contato com você em breve.'
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do Botão',
          type: 'string',
          initialValue: 'Enviar mensagem',
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

