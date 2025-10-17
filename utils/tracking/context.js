// Context initialization - combines session + UTM + environment details
import { captureUTM, getAttributionContext } from './utm';
import { getSession } from './session';
import { gtmPush } from '../gtm';

function getDeviceType() {
  if (typeof navigator === 'undefined') return 'unknown';
  return /Mobi|Android|iPhone/i.test(navigator.userAgent) ? 'mobile' : 'desktop';
}

function getEnvContext() {
  if (typeof window === 'undefined') return {};
  return {
    device_type: getDeviceType(),
    viewport_w: window.innerWidth,
    viewport_h: window.innerHeight,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  };
}

export function initTrackingContext() {
  try {
    captureUTM();
    const attribution = getAttributionContext();
    const session = getSession();
    const env = getEnvContext();

    gtmPush('context_init', {
      event_category: 'context',
      ...attribution,
      ...session,
      ...env,
      timestamp: Date.now()
    });

    // session_start separado para analises
    gtmPush('session_start', {
      event_category: 'session',
      session_id: session.session_id,
      session_start_ts: session.session_start_ts,
      session_pageviews: session.session_pageviews,
      timestamp: Date.now()
    });
  } catch (e) {
    console.warn('[tracking] init context failed', e);
  }
}
