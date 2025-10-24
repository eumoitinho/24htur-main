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

// Função para normalizar dados estáticos para compatibilidade com Sanity
const normalizeStaticData = (data: any) => {
  if (!data) return data;
  
  // Normalizar estrutura de valores para sobrePage
  if (data._type === 'sobrePage' && data.values && data.values.items) {
    data.values = data.values.items;
  }
  
  // Normalizar outras estruturas conforme necessário
  if (data._type === 'eventosPage' && data.services && !Array.isArray(data.services)) {
    data.services = data.services.items || [];
  }
  
  if (data._type === 'lazerPage' && data.services && !Array.isArray(data.services)) {
    data.services = data.services.items || [];
  }
  
  if (data._type === 'opcoesViagemPage' && data.options && !Array.isArray(data.options)) {
    data.options = data.options.items || [];
  }
  
  if (data._type === 'trabalheConoscoPage' && data.positions && !Array.isArray(data.positions)) {
    data.positions = data.positions.items || [];
  }
  
  return data;
};

// Função para carregar dados estáticos como fallback
const loadStaticData = async (type: string) => {
  try {
    const staticData = await import(`../../data/${type}.json`);
    const data = staticData.default || staticData;
    return normalizeStaticData(data);
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
    
    console.log(`Buscando dados do Sanity para ${type}...`);
    const data = await client.fetch(query);
    
    console.log(`Dados encontrados no Sanity para ${type}:`, data);
    
    // Se há dados do Sanity, retorna eles
    if (data && (!Array.isArray(data) || data.length > 0)) {
      console.log(`Usando dados do Sanity para ${type}`);
      return data;
    }
    
    // Se não há dados no Sanity, retorna null para que o componente possa decidir
    console.warn(`Nenhum dado encontrado no Sanity para ${type}`);
    return null;
    
  } catch (error) {
    console.error(`Erro ao buscar dados do Sanity para ${type}:`, error);
    
    // Em caso de erro real (não apenas dados vazios), usa dados estáticos como fallback
    const staticData = await loadStaticData(type);
    if (staticData) {
      console.log(`Usando dados estáticos como fallback para ${type}`);
      return staticData;
    }
    
    throw error;
  }
};