'use client';

import { useEffect } from 'react';
import { initTrackingContext } from '../utils/tracking/context';
import { initWebVitals } from '../utils/tracking/webvitals';
import { initFormTracking } from '../utils/tracking/engagement';
import { RouteChangeTracker } from '../hooks/useRoutePageView';
import SmoothScroll from './SmoothScroll';

export default function TrackingProvider({ children }) {
  useEffect(() => {
    // Verificar se estamos no client-side
    if (typeof window === 'undefined') return;
    
    // Inicializar sistemas de tracking
    initTrackingContext();
    initWebVitals();
    
    // Aguardar DOM carregado para forms
    const timer = setTimeout(() => {
      initFormTracking();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <RouteChangeTracker />
      <SmoothScroll />
      {children}
    </>
  );
}