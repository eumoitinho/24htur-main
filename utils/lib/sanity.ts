import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'kyx4ncqy',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  // Configurações para resolver problemas de CORS
  perspective: 'published',
  stega: {
    enabled: false,
  },
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);

// Função para carregar dados estáticos como fallback
const loadStaticData = async (type: string) => {
  try {
    const staticData = await import(`../../data/${type}.json`);
    return staticData.default || staticData;
  } catch (error) {
    console.warn(`Dados estáticos não encontrados para ${type}:`, error);
    return null;
  }
};

export const getDocuments = async (type: string, slug?: string) => {
  try {
    const query = slug 
      ? `*[_type == "${type}" && slug.current == "${slug}"][0]`
      : `*[_type == "${type}"]`;
    
    const data = await client.fetch(query);
    
    // Se não há dados do Sanity, tenta usar dados estáticos
    if (!data || (Array.isArray(data) && data.length === 0)) {
      console.warn(`Nenhum dado encontrado no Sanity para ${type}, usando dados estáticos`);
      return await loadStaticData(type);
    }
    
    return data;
  } catch (error) {
    console.error(`Erro ao buscar dados do Sanity para ${type}:`, error);
    console.log(`Tentando usar dados estáticos para ${type}`);
    
    // Em caso de erro, usa dados estáticos como fallback
    const staticData = await loadStaticData(type);
    if (staticData) {
      console.log(`Usando dados estáticos para ${type}`);
      return staticData;
    }
    
    throw error;
  }
};