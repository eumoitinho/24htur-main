#!/bin/bash

echo "🚀 Criando documentos no Sanity com conteúdo exato..."

# Verificar se o Sanity CLI está instalado
if ! command -v npx &> /dev/null; then
    echo "❌ NPX não encontrado. Instalando dependências..."
    npm install
fi

echo "📄 Criando sobrePage..."
npx sanity exec --project kyx4ncqy --dataset production --with-user-token "
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'kyx4ncqy',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2025-10-17',
});

const sobrePageData = {
  _type: 'sobrePage',
  hero: {
    title: 'SOBRE A 24H',
    subtitle: 'Com mais de 20 anos de expertise, a 24H Escritório de Viagens se consolidou como uma agência especializada e líder na gestão de viagens de lazer, negócios e eventos, nacionais e internacionais. Oferecemos soluções completas e personalizadas, atendendo às necessidades de empresas, famílias, grupos e clientes individuais com a máxima dedicação e profissionalismo.',
    ctaText: 'CONHEÇA NOSSA HISTÓRIA!'
  },
  about: {
    title: 'Nossa História',
    description: 'Na 24H, cuidamos de todas as etapas da sua viagem, garantindo uma experiência tranquila e sem imprevistos. Nossos serviços abrangem desde a cotação e emissão de passagens até reservas de hotéis, traslados, câmbio, seguros, vistos, locação de veículos, roteiros turísticos e ingressos.\n\nTrabalhamos com uma ampla e consolidada rede de fornecedores e parceiros nos setores aéreo, hoteleiro e de turismo, o que nos permite assegurar agilidade, economia e segurança em cada atendimento. Nosso compromisso primordial é oferecer um suporte disponível 24 horas por dia, 7 dias por semana, para que você tenha total tranquilidade em qualquer situação.'
  },
  purpose: {
    title: 'Nosso propósito',
    description: 'O propósito da 24H Escritório de Viagens é ir além do agenciamento. Buscamos a excelência e a disponibilidade contínua no agenciamento de viagens de lazer e negócios, com o objetivo de sempre superar as expectativas de nossos clientes. Valorizamos profundamente a colaboração e o relacionamento com nossos colaboradores e fornecedores, reconhecendo que são pilares essenciais para o nosso sucesso.'
  },
  values: {
    title: 'Nossos valores',
    intro: 'Nossos valores guiam todas as nossas ações e decisões, refletindo a essência da 24H Escritório de Viagens:',
    items: [
      {
        name: 'Personalização',
        description: 'Acreditamos que cada viagem é única. Por isso, adaptamos nossos serviços para atender às necessidades e desejos individuais de cada cliente, criando experiências sob medida.'
      },
      {
        name: 'Disponibilidade',
        description: 'Estamos sempre presentes para nossos clientes. Nosso suporte 24/7 e a acessibilidade da nossa equipe garantem que você nunca esteja sozinho, independentemente do fuso horário ou da situação.'
      },
      {
        name: 'Comprometimento',
        description: 'Nos dedicamos integralmente a cada projeto e a cada cliente, garantindo que todos os detalhes sejam cuidadosamente planejados e executados com a máxima precisão.'
      },
      {
        name: 'Ética profissional',
        description: 'Atuamos com transparência, integridade e responsabilidade em todas as nossas relações, construindo confiança e credibilidade no mercado.'
      },
      {
        name: 'Foco no resultado',
        description: 'Buscamos a eficiência e a otimização em todos os processos, visando sempre os melhores resultados para nossos clientes, seja em economia, agilidade ou satisfação.'
      },
      {
        name: 'Aperfeiçoamento constante',
        description: 'Investimos no desenvolvimento contínuo de nossa equipe e na busca por inovações, garantindo que estejamos sempre à frente no mercado de viagens.'
      },
      {
        name: 'Diversidade',
        description: 'Temos orgulho de ter uma equipe composta majoritariamente por mulheres em posições de liderança, possibilitando uma perspectiva mais diversa e empática em nosso atendimento.'
      }
    ]
  }
};

try {
  const result = await client.create(sobrePageData);
  console.log('✅ sobrePage criada:', result._id);
} catch (error) {
  console.error('❌ Erro ao criar sobrePage:', error.message);
}
"

echo "✅ Script executado!"
