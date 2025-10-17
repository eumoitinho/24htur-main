import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { pushEnhancedPageView } from '../utils/gtm';

export const RouteChangeTracker = () => {
  const pathname = usePathname();

  useEffect(() => {
    try {
      // Use window.location for search params to avoid SSR issues
      const searchParams = typeof window !== 'undefined' ? window.location.search : '';
      
      pushEnhancedPageView({
        page_title: typeof document !== 'undefined' ? document.title : '',
        page_location: typeof window !== 'undefined' ? window.location.href : '',
        page_path: pathname + searchParams,
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('[route pageview] falhou', e);
    }
  }, [pathname]);

  return null;
};
