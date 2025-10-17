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

export const useHomepage = () => {
  const [data, setData] = useState<Homepage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getDocuments('homepage');
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar página inicial');
        console.error('Erro ao carregar página inicial:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export const useEventosPage = () => {
  const [data, setData] = useState<EventosPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getDocuments('eventosPage');
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar página de eventos');
        console.error('Erro ao carregar página de eventos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export const useLazerPage = () => {
  const [data, setData] = useState<LazerPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getDocuments('lazerPage');
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar página de lazer');
        console.error('Erro ao carregar página de lazer:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

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

export const useSobrePage = () => {
  const [data, setData] = useState<SobrePage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getDocuments('sobrePage');
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar página sobre');
        console.error('Erro ao carregar página sobre:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export const useEquipePage = () => {
  const [data, setData] = useState<EquipePage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getDocuments('equipePage');
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar página equipe');
        console.error('Erro ao carregar página equipe:', err);
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
        const result = await getDocuments('eventosInfoPage');
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar página eventos-info');
        console.error('Erro ao carregar página eventos-info:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export const useOpcoesViagemPage = () => {
  const [data, setData] = useState<OpcoesViagemPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getDocuments('opcoesViagemPage');
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar página opções de viagem');
        console.error('Erro ao carregar página opções de viagem:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export const useTrabalheConoscoPage = () => {
  const [data, setData] = useState<TrabalheConoscoPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getDocuments('trabalheConoscoPage');
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar página trabalhe conosco');
        console.error('Erro ao carregar página trabalhe conosco:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};