import { useState, useEffect } from 'react';
import { getDocuments } from '../lib/sanity';
import {
  CompletePage,
  Homepage,
  EventosPage,
  LazerPage,
  ThankYouPage,
  SobrePage,
  EquipePage,
  EventosInfoPage,
  OpcoesViagemPage,
  TrabalheConoscoPage,
  CBEnfPage
} from '../types/sanity';

// Static fallbacks imported directly to avoid dynamic import expressions
import homePageStatic from '../../data/homePage.json';
import sobrePageStatic from '../../data/sobrePage.json';
import equipePageStatic from '../../data/equipePage.json';
import eventosPageStatic from '../../data/eventosPage.json';
import lazerPageStatic from '../../data/lazerPage.json';
import opcoesViagemPageStatic from '../../data/opcoesViagemPage.json';
import trabalheConoscoPageStatic from '../../data/trabalheConoscoPage.json';

// Função utilitária para criar hooks com fallback para dados estáticos
const createPageHook = <T>(
  type: string,
  staticData: T | null,
  errorMessage: string
) => {
  return () => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          setError(null);
          
          // SEMPRE tenta buscar do Sanity primeiro
          const result = await getDocuments(type);
          
          // Se há dados do Sanity, usa eles
          if (result) {
            console.log(`✅ Usando dados do Sanity para ${type}`);
            setData(result);
            return; // Sair aqui se conseguiu dados do Sanity
          }
          
          // Se não há dados no Sanity, tenta dados estáticos
          if (staticData) {
            console.warn(`⚠️ Nenhum dado no Sanity para ${type}, usando dados estáticos`);
            console.warn(`💡 Configure os dados no Sanity para usar conteúdo dinâmico!`);
            setData(staticData as unknown as T);
          } else {
            setError(`Nenhum dado disponível para ${type}`);
          }
        } catch (err: any) {
          const errorMsg = err instanceof Error ? err.message : errorMessage;
          
          // Verifica se é erro de CORS/rede
          const isNetworkError = err?.message?.includes('CORS') || 
                                err?.message?.includes('ERR_FAILED') ||
                                err?.message?.includes('NetworkError');
          
          if (isNetworkError) {
            console.error(`❌ Erro de CORS ao carregar ${type}.`);
            console.error(`💡 Configure CORS no Sanity: https://www.sanity.io/manage/personal/project/kyx4ncqy/settings/api`);
            
            // Em caso de CORS, usa dados estáticos como último recurso
            if (staticData) {
              console.log(`🔧 Usando dados estáticos devido a erro de CORS`);
              setData(staticData as unknown as T);
              setError(null);
            } else {
              setError(`Erro de CORS. Configure no painel do Sanity.`);
            }
          } else {
            console.error(`❌ Erro ao carregar ${type}:`, err);
            
            // Para outros erros, também tenta dados estáticos como fallback
            if (staticData) {
              console.log(`🔧 Usando dados estáticos como fallback para ${type}`);
              setData(staticData as unknown as T);
              setError(null);
            } else {
              setError(errorMsg);
            }
          }
        } finally {
          setLoading(false);
        }
      };

      fetchData();
  }, []);

    return { data, loading, error };
  };
};

export const useCompletePage = (slug?: string) => {
  const [data, setData] = useState<CompletePage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getDocuments('completePage', slug);
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar página');
        console.error('Erro ao carregar página:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  return { data, loading, error };
};

export const useHomepage = createPageHook<Homepage>(
  'homepage',
  homePageStatic as unknown as Homepage,
  'Erro ao carregar página inicial'
);

export const useThankYouPage = () => {
  const [data, setData] = useState<ThankYouPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getDocuments('thankYouPage');
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar página de obrigado');
        console.error('Erro ao carregar página de obrigado:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export const useEventosInfoPage = () => {
  const [data, setData] = useState<EventosInfoPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await getDocuments('eventosInfoPage');
        setData(result);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Erro ao carregar página eventos-info';
        setError(errorMessage);
        console.error('Erro ao carregar página eventos-info:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export const useSobrePage = createPageHook<SobrePage>(
  'sobrePage',
  sobrePageStatic as unknown as SobrePage,
  'Erro ao carregar página sobre'
);

export const useEquipePage = createPageHook<EquipePage>(
  'equipePage',
  equipePageStatic as unknown as EquipePage,
  'Erro ao carregar página equipe'
);

export const useEventosPage = createPageHook<EventosPage>(
  'eventosPage',
  eventosPageStatic as unknown as EventosPage,
  'Erro ao carregar página de eventos'
);

export const useLazerPage = createPageHook<LazerPage>(
  'lazerPage',
  lazerPageStatic as unknown as LazerPage,
  'Erro ao carregar página de lazer'
);

export const useOpcoesViagemPage = createPageHook<OpcoesViagemPage>(
  'opcoesViagemPage',
  opcoesViagemPageStatic as unknown as OpcoesViagemPage,
  'Erro ao carregar página opções de viagem'
);

export const useTrabalheConoscoPage = createPageHook<TrabalheConoscoPage>(
  'trabalheConoscoPage',
  trabalheConoscoPageStatic as unknown as TrabalheConoscoPage,
  'Erro ao carregar página trabalhe conosco'
);

export const useCBEnfPage = createPageHook<CBEnfPage>(
  'cbenfPage',
  null,
  'Erro ao carregar página CBENF'
);