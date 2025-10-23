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
  TrabalheConoscoPage
} from '../types/sanity';

// Função utilitária para criar hooks com fallback para dados estáticos
const createPageHook = <T>(
  type: string,
  staticDataPath: string,
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
          const result = await getDocuments(type);
          setData(result);
        } catch (err) {
          const errorMsg = err instanceof Error ? err.message : errorMessage;
          setError(errorMsg);
          console.error(`Erro ao carregar ${type}:`, err);
          
          // Tenta carregar dados estáticos como último recurso
          try {
            const staticData = await import(staticDataPath);
            if (staticData.default || staticData) {
              console.log(`Usando dados estáticos para ${type}`);
              setData(staticData.default || staticData);
              setError(null); // Limpa o erro se conseguiu carregar dados estáticos
            }
          } catch (staticError) {
            console.error(`Erro ao carregar dados estáticos para ${type}:`, staticError);
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
  '../../data/homePage.json',
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
  '../../data/sobrePage.json',
  'Erro ao carregar página sobre'
);

export const useEquipePage = createPageHook<EquipePage>(
  'equipePage',
  '../../data/equipePage.json',
  'Erro ao carregar página equipe'
);

export const useEventosPage = createPageHook<EventosPage>(
  'eventosPage',
  '../../data/eventosPage.json',
  'Erro ao carregar página de eventos'
);

export const useLazerPage = createPageHook<LazerPage>(
  'lazerPage',
  '../../data/lazerPage.json',
  'Erro ao carregar página de lazer'
);

export const useOpcoesViagemPage = createPageHook<OpcoesViagemPage>(
  'opcoesViagemPage',
  '../../data/opcoesViagemPage.json',
  'Erro ao carregar página opções de viagem'
);

export const useTrabalheConoscoPage = createPageHook<TrabalheConoscoPage>(
  'trabalheConoscoPage',
  '../../data/trabalheConoscoPage.json',
  'Erro ao carregar página trabalhe conosco'
);