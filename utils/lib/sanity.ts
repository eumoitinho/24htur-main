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

// Remove HTML tags de uma string
const stripHtml = (str: any): string => {
  if (!str) return '';
  const strValue = String(str);
  return strValue.replace(/<[^>]*>/g, '').trim();
};

// Convert Portable Text (Sanity rich text) to a plain string. Works for arrays of blocks.
export const portableTextToPlain = (value: any): string => {
  if (!value) return '';
  
  if (typeof value === 'string') {
    // Remove HTML tags se houver
    const cleaned = stripHtml(value);
    return cleaned;
  }
  
  if (Array.isArray(value)) {
    const result = value
      .map((block: any) => {
        if (!block) return '';
        if (typeof block === 'string') return stripHtml(block);
        if (Array.isArray(block)) return block.map(b => typeof b === 'string' ? stripHtml(b) : String(b)).join(' ');
        if (block.children && Array.isArray(block.children)) {
          return block.children.map((c: any) => {
            const text = c?.text || c?.value || '';
            return typeof text === 'string' ? stripHtml(text) : String(text);
          }).join('');
        }
        if (block.text) {
          const text = block.text;
          return typeof text === 'string' ? stripHtml(text) : String(text);
        }
        // Se for um objeto com _type, pode ser um bloco de conteúdo
        if (block._type) return '';
        return '';
      })
      .filter(Boolean)
      .join(' ');
    return result;
  }
  
  const result = String(value);
  const cleaned = stripHtml(result);
  return cleaned;
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
    // Para homepage, usa uma query específica que projeta os campos corretamente
    let query: string;
    if (type === 'homepage' && !slug) {
      query = `*[_type == "homepage"][0]{
        _id,
        _type,
        title,
        isActive,
        seoTitle,
        seoDescription,
        hero,
        metrics[]{
          _key,
          value,
          label
        },
        problems,
        experience,
        clients{
          badge,
          title,
          subtitle,
          logos[]{
            _key,
            _type,
            asset->{
              _id,
              _type,
              url
            },
            alt
          }
        },
        services,
        whyChoose,
        aboutCompany,
        team,
        testimonials,
        contact
      }`;
    } else {
      query = slug 
        ? `*[_type == "${type}" && slug.current == "${slug}"][0]`
        : `*[_type == "${type}"]`;
    }
    
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
    
    // Log para debug das métricas e logos
    if (type === 'homepage' && data) {
      console.log('📊 Métricas recebidas do Sanity:', JSON.stringify(data.metrics, null, 2));
      console.log('📦 Dados completos de clients recebidos:', JSON.stringify(data.clients, null, 2));
      if (data.clients) {
        if (Array.isArray(data.clients)) {
          console.log('⚠️ clients está como array:', data.clients);
          data.clients.forEach((client, idx) => {
            console.log(`Client ${idx}:`, client);
            if (client.logos) {
              console.log(`🖼️ Logos do client ${idx}:`, client.logos);
            }
          });
        } else if (data.clients.logos) {
          console.log('🖼️ Logos recebidos do Sanity:', JSON.stringify(data.clients.logos, null, 2));
        } else {
          console.log('⚠️ clients.logos não existe ou está vazio');
          console.log('Estrutura de clients:', Object.keys(data.clients || {}));
        }
      } else {
        console.log('⚠️ data.clients não existe');
      }
    }

    // Normaliza dados recebidos do Sanity:
    // - Se for array com 1 item, retorna o objeto (muitos componentes esperam um objeto único)
    // - Converte objetos de imagem do Sanity para URLs usando urlFor
    // - Garante que campos que devem ser arrays sempre sejam arrays
    const normalizeFetched = (value: any, key?: string): any => {
      if (value == null) return value;

      // Se for array, normalize cada item preservando _key
      if (Array.isArray(value)) {
        // Se for array de logos, preserva a estrutura das imagens
        const isLogosArray = key === 'logos';
        return value.map((v, index) => {
          // Passa o contexto para saber que é logos
          const normalized = normalizeFetched(v, isLogosArray ? 'logos' : key);
          // Preserva _key se existir, caso contrário cria um baseado no índice
          if (normalized && typeof normalized === 'object' && !normalized._key) {
            normalized._key = normalized._key || v._key || `item-${index}`;
          }
          return normalized;
        });
      }

      // Se for um objeto de imagem do Sanity
      if (typeof value === 'object' && value._type === 'image' && value.asset) {
        // Para logos (dentro de arrays de logos), mantemos a estrutura original (não converte para URL)
        // O componente vai usar urlFor para gerar a URL quando necessário
        // Verifica se está dentro de um contexto de logos
        if (key === 'logos' || (key && key.includes('logo'))) {
          // Preserva a estrutura completa da imagem para logos
          // Garante que _type está presente e asset está completo
          // IMPORTANTE: Preserva asset.url se existir (quando asset foi expandido pela query)
          return {
            _type: 'image',
            _key: value._key,
            asset: value.asset, // Preserva asset completo incluindo url se expandido
            alt: value.alt
          };
        }
        // Para outras imagens, converte para URL
        try {
          return urlFor(value).url();
        } catch (e) {
          return value;
        }
      }
      
      // Se for um objeto que parece ser uma imagem mas não tem _type='image'
      // (pode acontecer quando a query expande o asset)
      if (typeof value === 'object' && value.asset && (key === 'logos' || (key && key.includes('logo')))) {
        // Preserva a estrutura mesmo sem _type='image' explícito
        return {
          _type: value._type || 'image',
          _key: value._key,
          asset: value.asset, // Preserva asset completo incluindo url se expandido
          alt: value.alt
        };
      }

      // Se for objeto, percorre chaves recursivamente
      if (typeof value === 'object') {
        const out: any = {};
        for (const k of Object.keys(value)) {
          const normalized = normalizeFetched(value[k], k);
          
          // Garante que campos conhecidos como arrays sempre sejam arrays
          // Nota: 'clients' não deve estar aqui pois é um objeto, não um array
          const arrayFields = [
            'services', 'team', 'testimonials', 'reasons', 'problems',
            'options', 'positions', 'items', 'members', 'destinations',
            'benefits', 'metrics'
          ];
          
          // Se o campo deveria ser array mas não é, converte
          if (arrayFields.includes(k) && !Array.isArray(normalized) && normalized != null) {
            // Se for objeto com propriedade 'items', extrai o array
            if (normalized.items && Array.isArray(normalized.items)) {
              out[k] = normalized.items;
            } else {
              // Se for um objeto único, transforma em array
              out[k] = [normalized];
            }
          } else {
            out[k] = normalized;
          }
        }
        return out;
      }

      // Primitivo
      return value;
    };

    if (data && (!Array.isArray(data) || data.length > 0)) {
      console.log(`✅ Dados encontrados no Sanity para ${type}!`);
      let normalized = normalizeFetched(data);

      // Se a query retornou um único documento (array com 1 item) e não foi por slug,
      // retorna apenas o objeto (pois é uma query de lista que retornou 1 resultado)
      // MAS preserva a estrutura interna de arrays
      if (Array.isArray(normalized) && normalized.length === 1 && !slug) {
        console.log(`✅ Usando dados do Sanity para ${type} (array com 1 item, convertendo para objeto)`);
        const singleItem = normalized[0];
        return singleItem;
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