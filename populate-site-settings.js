#!/usr/bin/env node

/**
 * Script para popular o Sanity com as configurações globais do site
 * Migra todos os textos hardcoded dos componentes para o CMS
 */

const { createClient } = require('@sanity/client');
const dotenv = require('dotenv');

// Carrega variáveis de ambiente
dotenv.config();

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false
})

const siteSettingsData = {
  _id: 'siteSettings',
  _type: 'siteSettings',

  // Navegação do Header
  headerNavigation: {
    phoneNumber: '(51) 3516-0098',
    menuItems: [
      {
        label: 'Início',
        href: '/',
        hasDropdown: false
      },
      {
        label: 'Serviços',
        href: '#',
        hasDropdown: true,
        dropdownItems: [
          { label: 'Viagens de Lazer', href: '/lazer' },
          { label: 'Eventos Corporativos', href: '/eventos' },
          { label: 'Viagens Corporativas', href: '/corporate' }
        ]
      },
      {
        label: 'Sobre',
        href: '/sobre',
        hasDropdown: false
      },
      {
        label: 'Equipe',
        href: '/equipe',
        hasDropdown: false
      },
      {
        label: 'Opções de Viagem',
        href: '/opcoes-viagem',
        hasDropdown: false
      },
      {
        label: 'Trabalhe Conosco',
        href: '/trabalhe-conosco',
        hasDropdown: false
      }
    ]
  },

  // Navegação do Footer
  footerNavigation: {
    menuItems: [
      { label: 'Início', href: '#inicio' },
      { label: 'Serviços', href: '#servicos' },
      { label: 'Self Booking', href: '#self-booking' },
      { label: 'Sobre', href: '#sobre' },
      { label: 'Depoimentos', href: '#depoimentos' },
      { label: 'Contato', href: '#contato' }
    ],
    socialLinks: [
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/24hescritoriodeviagens',
        label: 'Instagram'
      },
      {
        platform: 'facebook',
        url: 'http://www.facebook.com/24HEscritoriodeViagens',
        label: 'Facebook'
      },
      {
        platform: 'linkedin',
        url: 'https://www.linkedin.com/company/24hescritoriodeviagens',
        label: 'LinkedIn'
      }
    ],
    copyrightText: '24H Escritório de Viagens. Todos os direitos reservados.',
    privacyLink: {
      label: 'Privacidade',
      href: '#contato'
    },
    termsLink: {
      label: 'Termos',
      href: '#contato'
    }
  },

  // WhatsApp
  whatsapp: {
    phoneNumber: '5551999555555',
    defaultMessage: 'Olá! Gostaria de solicitar uma proposta para viagens corporativas da 24H Escritório de Viagens.',
    buttonTitle: 'Fale conosco no WhatsApp'
  },

  // Formulário de Contato
  contactForm: {
    title: 'Consultoria e Gestão de Viagens Corporativas',
    subtitle: 'Otimize processos, reduza custos e garanta a melhor experiência para colaboradores. Fale com nossos especialistas e receba uma proposta personalizada.',
    calendlyUrl: 'https://calendly.com/liciane-24h',
    fields: {
      empresa: {
        label: 'Empresa',
        placeholder: 'Nome da empresa'
      },
      nome: {
        label: 'Seu nome',
        placeholder: 'Seu nome completo'
      },
      email: {
        label: 'E-mail',
        placeholder: 'seu@email.com'
      },
      telefone: {
        label: 'Telefone',
        placeholder: '(00) 00000-0000'
      },
      assunto: {
        label: 'Assunto',
        placeholder: 'Selecione um assunto'
      },
      pax: {
        label: 'Volume de viagens/mês',
        placeholder: 'Selecione uma opção'
      },
      interesses: {
        label: 'Em quais serviços você tem interesse?'
      },
      mensagem: {
        label: 'Mensagem',
        placeholder: 'Conte-nos mais sobre suas necessidades de viagens corporativas...'
      }
    },
    interessesOptions: [
      { value: 'aereo', label: 'Passagens aéreas' },
      { value: 'hospedagem', label: 'Hospedagem' },
      { value: 'transporte', label: 'Transporte terrestre' },
      { value: 'relatorios', label: 'Relatórios/BI' },
      { value: 'incentivo', label: 'Viagens de incentivo' },
      { value: 'outros', label: 'Outros' }
    ],
    assuntoOptions: [
      'Proposta corporativa',
      'Viagem de lazer',
      'Eventos',
      'Dúvidas',
      'Outro'
    ],
    paxOptions: [
      'Até 10 viagens',
      '10 a 50 viagens',
      '50 a 100 viagens',
      'Mais de 100 viagens'
    ],
    lgpdText: 'Concordo em ser contatado e autorizo o uso dos meus dados conforme a LGPD.',
    submitButtonText: 'Enviar mensagem',
    successMessage: 'Mensagem enviada com sucesso! Em breve entraremos em contato.',
    errorMessage: 'Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato via WhatsApp.'
  },

  // Informações de Contato
  contactInfo: {
    mainPhone: '(51) 3516-0098',
    mainEmail: 'contato@24h.tur.br',
    offices: [
      {
        city: 'Porto Alegre',
        state: 'RS',
        address: 'Av. Carlos Gomes 1672',
        phone: '(51) 3516-0098',
        email: 'contato@24h.tur.br'
      },
      {
        city: 'Alphaville',
        state: 'SP',
        address: 'Alameda Rio Negro 503',
        phone: '(51) 3516-0098',
        email: 'contato@24h.tur.br'
      },
      {
        city: 'Florianópolis',
        state: 'SC',
        address: 'Av. Luiz Boiteaux Piazza 1302',
        phone: '(51) 3516-0098',
        email: 'contato@24h.tur.br'
      }
    ]
  },

  // Branding
  branding: {
    logoAltText: '24H Escritório de Viagens',
    siteName: '24H Escritório de Viagens',
    siteDescription: 'Gestão completa de viagens de negócios e lazer com atendimento 24/7 e mais de 20 anos de experiência no mercado.'
  }
}

async function populateSiteSettings() {
  try {
    console.log('🚀 Iniciando população das configurações do site...')

    // Verifica se já existe um documento
    const existing = await client.fetch('*[_type == "siteSettings"][0]')

    if (existing) {
      console.log('📝 Atualizando configurações existentes...')
      const result = await client
        .patch(existing._id)
        .set(siteSettingsData)
        .commit()

      console.log('✅ Configurações atualizadas com sucesso!')
      console.log(`📄 ID do documento: ${result._id}`)
    } else {
      console.log('📝 Criando novo documento de configurações...')
      const result = await client.create(siteSettingsData)

      console.log('✅ Configurações criadas com sucesso!')
      console.log(`📄 ID do documento: ${result._id}`)
    }

    console.log('\n📋 Resumo dos dados populados:')
    console.log(`   - ${siteSettingsData.headerNavigation.menuItems.length} itens no menu do header`)
    console.log(`   - ${siteSettingsData.footerNavigation.menuItems.length} itens no menu do footer`)
    console.log(`   - ${siteSettingsData.footerNavigation.socialLinks.length} links de redes sociais`)
    console.log(`   - ${siteSettingsData.contactForm.interessesOptions.length} opções de interesses`)
    console.log(`   - ${siteSettingsData.contactInfo.offices.length} escritórios`)
    console.log('\n🎉 Processo concluído com sucesso!')

  } catch (error) {
    console.error('❌ Erro ao popular configurações:', error)
    process.exit(1)
  }
}

// Executa o script
populateSiteSettings()
