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

// Utility to resolve an image value (string URL, Sanity image object) to a URL string.
export const resolveImage = (value: any, fallback?: string): string | undefined => {
  if (!value) return fallback;
  if (typeof value === 'string') return value;
  if (typeof value === 'object' && value._type === 'image') {
    try {
      return urlFor(value).url();
    } catch (e) {
      console.warn('Erro ao gerar URL da imagem Sanity:', e);
      return fallback;
    }
  }
  return fallback;
};

// Convert Portable Text (Sanity rich text) to a plain string. Works for arrays of blocks.
export const portableTextToPlain = (value: any): string | undefined => {
  if (!value) return undefined;
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) {
    return value
      .map((block: any) => {
        if (!block) return '';
        if (typeof block === 'string') return block;
        if (Array.isArray(block)) return block.join(' ');
        if (block.children && Array.isArray(block.children)) {
          return block.children.map((c: any) => c?.text || '').join('');
        }
        if (block.text) return block.text;
        return '';
      })
      .filter(Boolean)
      .join(' ');
  }
  return String(value);
};

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

    // Normaliza dados recebidos do Sanity:
    // - Se for array com 1 item, retorna o objeto (muitos componentes esperam um objeto único)
    // - Converte objetos de imagem do Sanity para URLs usando urlFor
    const normalizeFetched = (value: any): any => {
      if (value == null) return value;

      // Se for array, normalize cada item
      if (Array.isArray(value)) return value.map((v) => normalizeFetched(v));

      // Se for um objeto de imagem do Sanity, converte para URL
      if (typeof value === 'object' && value._type === 'image' && value.asset) {
        try {
          return urlFor(value).url();
        } catch (e) {
          return value;
        }
      }

      // Se for objeto, percorre chaves recursivamente
      if (typeof value === 'object') {
        const out: any = {};
        for (const k of Object.keys(value)) {
          out[k] = normalizeFetched(value[k]);
        }
        return out;
      }

      // Primitivo
      return value;
    };

    if (data && (!Array.isArray(data) || data.length > 0)) {
      console.log(`Usando dados do Sanity para ${type}`);
      const normalized = normalizeFetched(data);

      // Se o resultado for um array com 1 item, retorna o próprio objeto
      if (Array.isArray(normalized) && normalized.length === 1) return normalized[0];

      return normalized;
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