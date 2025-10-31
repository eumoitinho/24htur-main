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

// Mapeamento de tipos do Sanity para nomes de arquivos JSON
const typeToFileName: Record<string, string> = {
  'homepage': 'homePage',
  'sobrePage': 'sobrePage',
  'equipePage': 'equipePage',
  'eventosPage': 'eventosPage',
  'lazerPage': 'lazerPage',
  'opcoesViagemPage': 'opcoesViagemPage',
  'trabalheConoscoPage': 'trabalheConoscoPage',
};

// Função para carregar dados estáticos como fallback
const loadStaticData = async (type: string) => {
  try {
    const fileName = typeToFileName[type] || type;
    const staticData = await import(`../../data/${fileName}.json`);
    const data = staticData.default || staticData;
    return normalizeStaticData(data);
  } catch (error) {
    console.warn(`Dados estáticos não encontrados para ${type}:`, error);
    return null;
  }
};

export const getDocuments = async (type: string, slug?: string) => {
  // SEMPRE tenta buscar do Sanity primeiro
  try {
    const query = slug 
      ? `*[_type == "${type}" && slug.current == "${slug}"][0]`
      : `*[_type == "${type}"]`;
    
    console.log(`🔄 Buscando dados do Sanity para ${type}...`);
    
    // Desabilita CDN temporariamente para evitar cache em desenvolvimento
    const fetchClient = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'kyx4ncqy',
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
      useCdn: false, // Desabilita CDN para sempre pegar dados atualizados
      apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
      token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
      perspective: 'published',
      stega: {
        enabled: false,
      },
    });
    
    const data = await fetchClient.fetch(query);

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
      console.log(`✅ Dados encontrados no Sanity para ${type}!`);
      const normalized = normalizeFetched(data);

      // Se o resultado for um array com 1 item, retorna o próprio objeto
      if (Array.isArray(normalized) && normalized.length === 1) {
        console.log(`✅ Usando dados do Sanity para ${type} (array com 1 item)`);
        return normalized[0];
      }

      console.log(`✅ Usando dados do Sanity para ${type}`);
      return normalized;
    }
    
    // Se não há dados no Sanity, retorna null
    console.warn(`⚠️ Nenhum dado encontrado no Sanity para ${type}`);
    return null;
    
  } catch (error: any) {
    // Verifica se é erro de CORS ou rede
    const isNetworkError = error?.message?.includes('CORS') || 
                          error?.message?.includes('ERR_FAILED') ||
                          error?.message?.includes('NetworkError') ||
                          error?.message?.includes('Failed to fetch');
    
    if (isNetworkError) {
      console.error(`❌ Erro de CORS/Rede ao buscar dados do Sanity para ${type}:`, error.message);
      console.error(`💡 SOLUÇÃO: Configure CORS no painel do Sanity em:`);
      console.error(`   https://www.sanity.io/manage/personal/project/kyx4ncqy/settings/api`);
      console.error(`   Adicione: https://www.24h.tur.br e https://24h.tur.br`);
    } else {
      console.error(`❌ Erro ao buscar dados do Sanity para ${type}:`, error);
    }
    
    // Em caso de erro, NÃO usa dados estáticos automaticamente
    // Deixa o componente decidir ou lança o erro
    throw error;
  }
};