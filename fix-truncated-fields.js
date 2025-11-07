require('dotenv').config();
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'kyx4ncqy',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || process.env.SANITY_TOKEN,
  apiVersion: '2024-01-01'
});

// Valores completos que devem estar nos campos
const FIXES = {
  'homePage-1': {
    'hero.subtitle': 'Soluções estratégicas com atendimento 24/7 e mais de 20 anos de experiência no mercado'
  }
};

async function fixTruncatedFields() {
  console.log('🔧 Corrigindo campos truncados no Sanity...\n');

  try {
    // Buscar homepage
    const homepage = await client.fetch('*[_type == "homepage"][0]');
    
    if (!homepage) {
      console.log('❌ Homepage não encontrada');
      return;
    }

    console.log('📄 Homepage encontrada:', homepage._id);
    console.log('📝 Subtitle atual:', homepage.hero?.subtitle);
    console.log('📏 Tamanho atual:', homepage.hero?.subtitle?.length || 0);

    // Verificar se está truncado
    const currentSubtitle = homepage.hero?.subtitle || '';
    const expectedSubtitle = 'Soluções estratégicas com atendimento 24/7 e mais de 20 anos de experiência no mercado';
    
    if (currentSubtitle.length < expectedSubtitle.length) {
      console.log('\n⚠️  Subtitle está truncado! Corrigindo...\n');
      
      // Atualizar o campo
      await client
        .patch(homepage._id)
        .set({
          'hero.subtitle': expectedSubtitle
        })
        .commit();
      
      console.log('✅ Subtitle corrigido!');
      console.log('📝 Novo subtitle:', expectedSubtitle);
      console.log('📏 Novo tamanho:', expectedSubtitle.length);
    } else {
      console.log('✅ Subtitle já está completo');
    }

    // Verificar outros campos que podem estar truncados
    console.log('\n🔍 Verificando outros campos...\n');
    
    // Verificar problems descriptions
    if (homepage.problems?.items) {
      for (let i = 0; i < homepage.problems.items.length; i++) {
        const item = homepage.problems.items[i];
        if (item.description && item.description.length < 50) {
          console.log(`⚠️  Problem ${i} description pode estar truncado:`, item.description.substring(0, 50));
        }
      }
    }

    // Verificar services descriptions
    if (homepage.services?.items) {
      for (let i = 0; i < homepage.services.items.length; i++) {
        const item = homepage.services.items[i];
        if (item.description && item.description.length < 100) {
          console.log(`⚠️  Service ${i} description pode estar truncado:`, item.description.substring(0, 100));
        }
      }
    }

    // Verificar whyChoose reasons
    if (homepage.whyChoose?.reasons) {
      for (let i = 0; i < homepage.whyChoose.reasons.length; i++) {
        const reason = homepage.whyChoose.reasons[i];
        if (reason.description && reason.description.length < 50) {
          console.log(`⚠️  Reason ${i} description pode estar truncado:`, reason.description.substring(0, 50));
        }
      }
    }

    console.log('\n✅ Verificação concluída!');
    
  } catch (error) {
    console.error('❌ Erro ao corrigir campos:', error);
    throw error;
  }
}

// Executar
fixTruncatedFields()
  .then(() => {
    console.log('\n🎉 Processo concluído!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Erro fatal:', error);
    process.exit(1);
  });

