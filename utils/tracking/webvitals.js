// Lightweight Web Vitals collection (LCP, CLS, INP simplified)
import { gtmPush } from '../gtm';

export function initWebVitals() {
  if (typeof PerformanceObserver === 'undefined') return;
  try {
    let lcp; let cls = 0; let inp;

    // LCP
    const lcpObs = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const last = entries[entries.length - 1];
      lcp = last.renderTime || last.loadTime || last.startTime;
    });
    lcpObs.observe({ type: 'largest-contentful-paint', buffered: true });

    // CLS
    const clsObs = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          cls += entry.value;
        }
      }
    });
    clsObs.observe({ type: 'layout-shift', buffered: true });

    // INP (experimental -> fallback em first input delay simplificado)
    if ('PerformanceEventTiming' in window) {
      const inpObs = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const last = entries[entries.length - 1];
        inp = last.duration;
      });
      inpObs.observe({ type: 'event', buffered: true });
    }

    window.addEventListener('beforeunload', () => {
      pushVitals(lcp, cls, inp);
    });

    // Safety timeout push (se usuário não descarregar)
    setTimeout(() => pushVitals(lcp, cls, inp), 8000);
  } catch (e) {
    // silent
  }
}

function pushVitals(lcp, cls, inp) {
  if (window.__vitals_pushed) return;
  window.__vitals_pushed = true;
  gtmPush('web_vitals', {
    event_category: 'performance',
    lcp: lcp ? Math.round(lcp) : null,
    cls: cls ? Number(cls.toFixed(3)) : 0,
    inp: inp ? Math.round(inp) : null,
    timestamp: Date.now()
  });
}
