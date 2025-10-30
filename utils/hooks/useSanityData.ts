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
          const result = await getDocuments(type);
          setData(result);
        } catch (err) {
          const errorMsg = err instanceof Error ? err.message : errorMessage;
          setError(errorMsg);
          console.error(`Erro ao carregar ${type}:`, err);

          // Use provided static data as a last resort (no dynamic import)
          if (staticData) {
            console.log(`Usando dados estáticos para ${type}`);
            setData(staticData as unknown as T);
            setError(null); // clear error if static data used
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