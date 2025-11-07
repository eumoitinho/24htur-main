import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'opcoesViagemPage',
  title: 'Página Opções de Viagem',
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
          initialValue: 'OPÇÕES DE VIAGEM',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          initialValue: 'Descubra o mundo com a 24H Escritório de Viagens',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'intro',
          title: 'Introdução',
          type: 'string',
          initialValue: 'Explore nossas categorias e encontre a aventura perfeita para você:',
          validation: Rule => Rule.required()
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
                  name: 'role',
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
              role: 'CEO|COO',
              education: 'Bacharel em Turismo com ênfase em Hotelaria',
              experience: '20 anos de experiência com agenciamento de viagens'
            },
            {
              name: 'Liciane Rossetto',
              role: 'CEO|CFO',
              education: 'Doutora em Turismo',
              experience: '30 anos de experiência no setor turístico'
            }
          ]
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string',
          initialValue: 'CONHEÇA NOSSA EQUIPE COMPLETA',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'ctaLink',
          title: 'Link do CTA',
          type: 'string',
          initialValue: '/equipe',
          validation: Rule => Rule.required()
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
    }),

    // Travel Options Specific Content
    defineField({
      name: 'travelOptions',
      title: 'Opções de Viagem',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Nome da Opção',
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
          name: '24H ÚNICO',
          description: 'Para clientes que buscam o extraordinário, o programa 24H Único cria roteiros de viagem sob medida, com experiências verdadeiramente exclusivas. Mergulhe em roteiros personalizados, onde cada detalhe é pensado para superar suas expectativas e proporcionar momentos de luxo, privacidade e exclusividade.'
        },
        {
          name: 'VIVA 24H',
          description: 'Desconecte-se da rotina e reconecte-se com o essencial. O Viva 24H é ideal para quem busca escapadinhas revigorantes, finais de semana inesquecíveis ou a flexibilidade de um home office outdoor. Privilegiamos pequenas hospedagens regionais, charmosas e acolhedoras, que oferecem uma imersão autêntica na cultura local e na beleza natural.'
        },
        {
          name: 'VIAGENS DE INCENTIVO',
          description: 'Nossas Viagens de Incentivo são programas de recompensa corporativos, desenhados para motivar e engajar colaboradores, equipes ou parceiros de negócios. Criamos grupos sob medida, alinhados ao budget da sua empresa e aos objetivos da premiação, garantindo que a experiência de viagem seja um poderoso estímulo para o alcance de metas e a fidelização.'
        },
        {
          name: 'VIAGENS CORPORATIVAS',
          description: 'Para o mundo corporativo, oferecemos soluções completas que garantem a eficiência e a produtividade de cada deslocamento. Seja para produtos individuais – como passagens aéreas, reservas de hotéis, locação de carros ou transporte rodoviário – ou para pacotes de serviços integrados, nosso foco é proporcionar o melhor atendimento para sua viagem de negócios.'
        },
        {
          name: 'VIAJEIRAS',
          description: 'Explore o mundo com a liberdade e a segurança de um grupo feminino. As Viajeiras são viagens criadas para mulheres que buscam experiências personalizadas, em pequenos grupos, com roteiros que refletem seus interesses e paixões.'
        },
        {
          name: 'VIAGENS DE LAZER',
          description: 'Seja para roteiros personalizados, criados exclusivamente para você, ou para produtos de prateleira, como circuitos de viagens e roteiros econômicos, somos especialistas em moldar as oportunidades existentes aos seus desejos, expectativas e possibilidades.'
        },
        {
          name: 'VIAGENS SEGMENTADAS',
          description: 'Nossas Viagens Segmentadas são criadas conforme a preferência do grupo de viajantes, unindo interesses específicos – como práticas esportivas, gastronomia, cultura ou aventura. Montamos pacotes que incluem visitas culturais, experiências gastronômicas e atividades que enriquecem sua jornada, tornando-a verdadeiramente única.'
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'hero.title'
    }
  }
})

