import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'equipePage',
  title: 'Página Equipe',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      initialValue: 'NOSSA EQUIPE',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'intro',
      title: 'Introdução',
      type: 'text',
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
      name: 'teamMembers',
      title: 'Membros da Equipe',
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
              type: 'text',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'experience',
              title: 'Experiência',
              type: 'text',
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
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
})

