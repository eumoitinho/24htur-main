import { useState, useEffect } from 'react';
import { getDocuments } from '../lib/sanity';
import { CompletePage, SimplePage, Homepage, EventosPage, LazerPage, ThankYouPage } from '../types/sanity';

export const useCompletePage = (slug?: string) => {
  const [pageData, setPageData] = useState<CompletePage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const data = await getDocuments('completePage', slug);
        setPageData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar página');
        console.error('Erro ao carregar página:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, [slug]);

  return { pageData, loading, error };
};

export const useEventosPage = () => {
  const [pageData, setPageData] = useState<EventosPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const data = await getDocuments('eventosPage');
        setPageData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar página de eventos');
        console.error('Erro ao carregar página de eventos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  return { pageData, loading, error };
};

export const useLazerPage = () => {
  const [pageData, setPageData] = useState<LazerPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const data = await getDocuments('lazerPage');
        setPageData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar página de lazer');
        console.error('Erro ao carregar página de lazer:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  return { pageData, loading, error };
};

export const useThankYouPage = () => {
  const [pageData, setPageData] = useState<ThankYouPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const data = await getDocuments('thankYouPage');
        setPageData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar página de obrigado');
        console.error('Erro ao carregar página de obrigado:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  return { pageData, loading, error };
};

export const useHomepage = () => {
  const [pageData, setPageData] = useState<Homepage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const data = await getDocuments('homepage');
        setPageData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar página inicial');
        console.error('Erro ao carregar página inicial:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  return { pageData, loading, error };
};

export const useEventosPage = () => {
  const [pageData, setPageData] = useState<EventosPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const data = await getDocuments('eventosPage');
        setPageData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar página de eventos');
        console.error('Erro ao carregar página de eventos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  return { pageData, loading, error };
};

export const useLazerPage = () => {
  const [pageData, setPageData] = useState<LazerPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const data = await getDocuments('lazerPage');
        setPageData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar página de lazer');
        console.error('Erro ao carregar página de lazer:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  return { pageData, loading, error };
};

export const useThankYouPage = () => {
  const [pageData, setPageData] = useState<ThankYouPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const data = await getDocuments('thankYouPage');
        setPageData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar página de obrigado');
        console.error('Erro ao carregar página de obrigado:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  return { pageData, loading, error };
};

export const useSimplePage = (slug?: string) => {
  const [pageData, setPageData] = useState<SimplePage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const data = await getDocuments('simplePage', slug);
        setPageData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar página');
        console.error('Erro ao carregar página:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, [slug]);

  return { pageData, loading, error };
};

export const useEventosPage = () => {
  const [pageData, setPageData] = useState<EventosPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const data = await getDocuments('eventosPage');
        setPageData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar página de eventos');
        console.error('Erro ao carregar página de eventos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  return { pageData, loading, error };
};

export const useLazerPage = () => {
  const [pageData, setPageData] = useState<LazerPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const data = await getDocuments('lazerPage');
        setPageData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar página de lazer');
        console.error('Erro ao carregar página de lazer:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  return { pageData, loading, error };
};

export const useThankYouPage = () => {
  const [pageData, setPageData] = useState<ThankYouPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const data = await getDocuments('thankYouPage');
        setPageData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar página de obrigado');
        console.error('Erro ao carregar página de obrigado:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  return { pageData, loading, error };
};

export const useHomepage = () => {
  const [pageData, setPageData] = useState<Homepage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const data = await getDocuments('homepage');
        setPageData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar página inicial');
        console.error('Erro ao carregar página inicial:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  return { pageData, loading, error };
};

export const useEventosPage = () => {
  const [pageData, setPageData] = useState<EventosPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const data = await getDocuments('eventosPage');
        setPageData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar página de eventos');
        console.error('Erro ao carregar página de eventos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  return { pageData, loading, error };
};

export const useLazerPage = () => {
  const [pageData, setPageData] = useState<LazerPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const data = await getDocuments('lazerPage');
        setPageData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar página de lazer');
        console.error('Erro ao carregar página de lazer:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  return { pageData, loading, error };
};

export const useThankYouPage = () => {
  const [pageData, setPageData] = useState<ThankYouPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const data = await getDocuments('thankYouPage');
        setPageData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar página de obrigado');
        console.error('Erro ao carregar página de obrigado:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  return { pageData, loading, error };
};