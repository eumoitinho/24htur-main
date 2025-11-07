import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'kyx4ncqy',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false, // Desabilita CDN para sempre pegar dados atualizados
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
  
  // Se tem URL direta do asset (quando expandido pela query)
  if (value?.asset?.url) {
    return value.asset.url;
  }
  
  // Se tem _ref, precisa construir o objeto de imagem
  if (value?.asset?._ref) {
    try {
      const imageObj = {
        _type: 'image',
        asset: {
          _ref: value.asset._ref,
          _type: 'reference'
        }
      };
      return urlFor(imageObj).url();
    } catch (e) {
      console.warn('Erro ao gerar URL da imagem Sanity:', e);
      return fallback;
    }
  }
  
  // Se é um objeto de imagem do Sanity
  if (typeof value === 'object' && value._type === 'image') {
    try {
      return urlFor(value).url();
    } catch (e) {
      console.warn('Erro ao gerar URL da imagem Sanity:', e);
      return fallback;
    }
  }
  
  // Se tem asset._id
  if (value?.asset?._id) {
    try {
      const imageObj = {
        _type: 'image',
        asset: {
          _ref: value.asset._id,
          _type: 'reference'
        }
      };
      return urlFor(imageObj).url();
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
          // Preserva espaços entre os children
          return block.children.map((c: any) => {
            const text = c?.text || c?.value || '';
            return typeof text === 'string' ? stripHtml(text) : String(text);
          }).join(''); // Não adiciona espaço aqui, preserva o que vem do Sanity
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
      .join(' '); // Adiciona espaço entre blocos
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
  if (data._type === 'sobrePage' && data.values) {
    if (data.values.items && Array.isArray(data.values.items)) {
    data.values = data.values.items;
    } else if (!Array.isArray(data.values)) {
      data.values = [];
    }
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
  
  // Normalizar equipePage
  if (data._type === 'equipePage' && data.members && !Array.isArray(data.members)) {
    data.members = data.members.items || [];
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
        hero{
          title,
          subtitle,
          ctaText,
          backgroundImage{
            asset->{
              _id,
              _type,
              url,
              originalFilename,
              mimeType
            }
          }
        },
        metrics[]{
          _key,
          value,
          label
        },
        problems{
          title,
          items[]{
            _key,
            title,
            description
          }
        },
        experience{
          title,
          subtitle,
          description,
          ctaText,
          image{
            asset->{
              _id,
              _type,
              url,
              originalFilename,
              mimeType
            }
          }
        },
        "clients": clients{
          badge,
          title,
          subtitle,
          "logos": logos[]{
            _key,
            _type,
            asset->{
              _id,
              _type,
              url,
              originalFilename,
              mimeType
            },
            alt
          }
        },
        services{
          title,
          items[]{
            _key,
            title,
            description,
            link,
            ctaText
          }
        },
        whyChoose{
          title,
          reasons[]{
            _key,
            title,
            description
          }
        },
        about{
          badge,
          title,
          description,
          ctaText,
          stats[]{
            _key,
            value,
            label
          }
        },
        team{
          title,
          ctaText,
          ctaLink,
          members[]{
            _key,
            name,
            role,
            education,
            experience,
            description
          }
        },
        testimonials{
          title,
          subtitle,
          items[]{
            _key,
            name,
            text,
            rating
          }
        },
        contact{
          title,
          subtitle,
          submitText,
          labels{
            name,
            email,
            phone,
            message
          }
        }
      }`;
    } else if (type === 'lazerPage' && !slug) {
      query = `*[_type == "lazerPage"][0]{
        _id,
        _type,
        title,
        isActive,
        seoTitle,
        seoDescription,
        hero{
          title,
          subtitle,
          ctaText
        },
        metrics[]{
          _key,
          value
        },
        arguments{
          title,
          items[]{
            _key,
            question,
            answer
          }
        },
        experiences{
          title,
          description,
          ctaText
        },
        travelTypes{
          title,
          types[]{
            _key,
            name,
            icon
          }
        },
        services{
          title,
          ctaText,
          items[]{
            _key,
            service,
            description
          }
        },
        whyChoose{
          title,
          items[]{
            _key,
            title,
            description
          }
        },
        aboutCompany{
          title,
          subtitle,
          description,
          ctaText
        },
        testimonials{
          title,
          subtitle,
          items[]{
            _key,
            text,
            author,
            rating
          }
        },
        contactForm{
          title,
          subtitle
        },
        footer{
          companyName,
          addresses[]{
            _key,
            address,
            city
          },
          phone,
          email,
          socialMedia[]{
            _key,
            platform,
            url
          }
        }
      }`;
    } else if (type === 'eventosPage' && !slug) {
      query = `*[_type == "eventosPage"][0]{
        _id,
        _type,
        title,
        isActive,
        seoTitle,
        seoDescription,
        hero{
          title,
          subtitle,
          ctaText,
          backgroundImage{
            asset->{
              _id,
              _type,
              url,
              originalFilename,
              mimeType
            }
          }
        },
        metrics[]{
          _key,
          value,
          label
        },
        problems{
          title,
          items[]{
            _key,
            title,
            description
          }
        },
        experience{
          title,
          description,
          ctaText
        },
        clients{
          title,
          placeholder
        },
        services{
          title,
          items[]{
            _key,
            title,
            description,
            link,
            ctaText
          }
        },
        whyChoose{
          title,
          items[]{
            _key,
            title,
            description
          }
        },
        about{
          badge,
          title,
          description,
          ctaText,
          stats[]{
            _key,
            value,
            label
          }
        },
        team{
          title,
          ctaText,
          ctaLink,
          members[]{
            _key,
            name,
            role,
            education,
            experience
          }
        },
        testimonials{
          title,
          subtitle,
          items[]{
            _key,
            name,
            text,
            rating
          }
        },
        contact{
          title,
          subtitle,
          ctaText
        },
        eventServices{
          title,
          items[]{
            _key,
            title,
            description
          }
        },
        upcomingEvents{
          title,
          events[]{
            _key,
            name,
            preCongress,
            mainEvent,
            location,
            address,
            link,
            linkText
          }
        }
      }`;
    } else if (type === 'cbenfPage' && !slug) {
      query = `*[_type == "cbenfPage"][0]{
        _id,
        _type,
        title,
        isActive,
        hero{
          title,
          subtitle,
          ctaText,
          eventName,
          preCongressDates,
          mainEventDates,
          location,
          participants,
          backgroundImage{
            asset->{
              _id,
              _type,
              url,
              originalFilename,
              mimeType
            }
          }
        },
        about{
          title,
          subtitle,
          description,
          expectedParticipants,
          edition,
          parallelEvents,
          preCongressDescription,
          mainEventDescription,
          locationDescription,
          ctaText,
          image{
            asset->{
              _id,
              _type,
              url,
              originalFilename,
              mimeType
            }
          }
        },
        services{
          title,
          subtitle,
          items[]{
            _key,
            title,
            description
          }
        },
        accommodation{
          title,
          subtitle,
          hotels[]{
            _key,
            name,
            distance,
            basePrice,
            badge,
            image{
              asset->{
                _id,
                _type,
                url,
                originalFilename,
                mimeType
              }
            },
            details[]
          }
        },
        whyChoose{
          title,
          description,
          benefits[],
          stats[]{
            _key,
            number,
            text
          }
        },
        flights{
          title,
          description,
          benefits[]{
            title,
            description
          },
          note,
          ctaText,
          image{
            asset->{
              _id,
              _type,
              url,
              originalFilename,
              mimeType
            }
          }
        },
        tours{
          title,
          info[],
          items[]{
            _key,
            name,
            price,
            priceDetail,
            minimum,
            description,
            image{
              asset->{
                _id,
                _type,
                url,
                originalFilename,
                mimeType
              }
            }
          }
        },
        payment{
          title,
          accommodationAndTours{
            options[]{
              times,
              method
            },
            note
          },
          travelInsurance{
            period,
            planName,
            prices[]{
              ageRange,
              price
            },
            note,
            paymentMethods[]
          },
          ctaText
        },
        about24H{
          title,
          description[],
          foundedYear,
          image{
            asset->{
              _id,
              _type,
              url,
              originalFilename,
              mimeType
            }
          },
          ctaText
        },
        contact{
          title,
          subtitle,
          ctaText
        }
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
      perspective: 'published', // Busca apenas dados publicados
      stega: {
        enabled: false,
      },
    });
    
    // Query GROQ executada
    
    // Adiciona timestamp para evitar cache
    const data = await fetchClient.fetch(query, {}, {
      cache: 'no-store',
      next: { revalidate: 0 }
    });
    
    // Debug: log dos dados brutos recebidos do Sanity
    if (type === 'homepage') {
      console.log('📦 Dados brutos do Sanity (homepage) - ANTES de normalização:', JSON.stringify(data, null, 2));
      if (data?.hero) {
        console.log('📦 Hero completo (ANTES normalização):', JSON.stringify(data.hero, null, 2));
        console.log('📦 Hero subtitle tipo:', typeof data.hero.subtitle);
        console.log('📦 Hero subtitle valor COMPLETO:', data.hero.subtitle);
        console.log('📦 Hero subtitle length:', data.hero.subtitle?.length || 'N/A');
        if (Array.isArray(data.hero.subtitle)) {
          console.log('📦 Hero subtitle array length:', data.hero.subtitle.length);
          data.hero.subtitle.forEach((block, idx) => {
            console.log(`📦 Hero subtitle block ${idx}:`, JSON.stringify(block, null, 2));
          });
        }
      }
    }
    
    // Dados recebidos do Sanity

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
          
          // Normalização especial para 'values' (sobrePage) - sempre deve ser array
          if (k === 'values' && normalized && typeof normalized === 'object' && !Array.isArray(normalized)) {
            if (normalized.items && Array.isArray(normalized.items)) {
              out[k] = normalized.items;
            } else {
              out[k] = [];
            }
          }
          // Garante que campos conhecidos como arrays sempre sejam arrays
          // Nota: 'clients' não deve estar aqui pois é um objeto, não um array
          // Mas 'logos' dentro de 'clients' deve ser preservado como array
          else if (['services', 'reasons', 'problems', 'options', 'positions', 'items', 'members', 'destinations', 'benefits', 'metrics', 'logos'].includes(k) && !Array.isArray(normalized) && normalized != null) {
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
          
          // Debug específico para logos, members e items
          if (k === 'logos' && Array.isArray(normalized)) {
            // Normalizando logos
          }
          if (k === 'members' && Array.isArray(normalized)) {
            // Normalizando members
          }
          if (k === 'items' && Array.isArray(normalized)) {
            // Normalizando items
          }
          if (k === 'values' && Array.isArray(out[k])) {
            // Normalizando values
          }
        }
        return out;
      }

      // Primitivo
      return value;
    };

    if (data && (!Array.isArray(data) || data.length > 0)) {
      let normalized = normalizeFetched(data);

      // Debug: log dos dados APÓS normalização
      if (type === 'homepage' && normalized && !Array.isArray(normalized)) {
        console.log('📦 Dados APÓS normalização (homepage):', JSON.stringify(normalized, null, 2));
        if (normalized?.hero) {
          console.log('📦 Hero completo (APÓS normalização):', JSON.stringify(normalized.hero, null, 2));
          console.log('📦 Hero subtitle (APÓS normalização):', normalized.hero.subtitle);
          console.log('📦 Hero subtitle length (APÓS normalização):', normalized.hero.subtitle?.length || 'N/A');
        }
      }

      // Se a query retornou um único documento (array com 1 item) e não foi por slug,
      // retorna apenas o objeto (pois é uma query de lista que retornou 1 resultado)
      // MAS preserva a estrutura interna de arrays
      if (Array.isArray(normalized) && normalized.length === 1 && !slug) {
        const singleItem = normalized[0];
        // Debug: log do item único
        if (type === 'homepage' && singleItem?.hero) {
          console.log('📦 Hero subtitle (item único):', singleItem.hero.subtitle);
          console.log('📦 Hero subtitle length (item único):', singleItem.hero.subtitle?.length || 'N/A');
        }
        return singleItem;
      }

      return normalized;
    }
    
    // Se não há dados no Sanity, retorna null
    return null;
    
  } catch (error: any) {
    // Em caso de erro, lança o erro para o componente tratar
    throw error;
  }
};