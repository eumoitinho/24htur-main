// UTM and attribution capture utility
// Captures first-touch and updates last-touch values.

const FIRST_PREFIX = 'ft_';
const LAST_PREFIX = 'lt_';

function getParam(params, name, fallback = '') {
  return params.get(name) || fallback;
}

export function captureUTM() {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  const ls = window.localStorage;

  const utm = {
    source: getParam(params, 'utm_source', '(direct)'),
    medium: getParam(params, 'utm_medium', '(none)'),
    campaign: getParam(params, 'utm_campaign', '(not_set)'),
    term: getParam(params, 'utm_term', ''),
    content: getParam(params, 'utm_content', ''),
    gclid: getParam(params, 'gclid', ''),
    fbclid: getParam(params, 'fbclid', ''),
    referrer: document.referrer || ''
  };

  // First touch set only once
  if (!ls.getItem(FIRST_PREFIX + 'source')) {
    ls.setItem(FIRST_PREFIX + 'source', utm.source);
    ls.setItem(FIRST_PREFIX + 'medium', utm.medium);
    ls.setItem(FIRST_PREFIX + 'campaign', utm.campaign);
    ls.setItem(FIRST_PREFIX + 'term', utm.term);
    ls.setItem(FIRST_PREFIX + 'content', utm.content);
    ls.setItem(FIRST_PREFIX + 'landing_page', window.location.pathname + window.location.search);
    ls.setItem(FIRST_PREFIX + 'timestamp', Date.now().toString());
  }

  // Always update last touch
  ls.setItem(LAST_PREFIX + 'source', utm.source);
  ls.setItem(LAST_PREFIX + 'medium', utm.medium);
  ls.setItem(LAST_PREFIX + 'campaign', utm.campaign);
  ls.setItem(LAST_PREFIX + 'term', utm.term);
  ls.setItem(LAST_PREFIX + 'content', utm.content);
  ls.setItem(LAST_PREFIX + 'gclid', utm.gclid);
  ls.setItem(LAST_PREFIX + 'fbclid', utm.fbclid);
  ls.setItem(LAST_PREFIX + 'referrer', utm.referrer);
  ls.setItem(LAST_PREFIX + 'timestamp', Date.now().toString());

  return getAttributionContext();
}

export function getAttributionContext() {
  if (typeof window === 'undefined') return {};
  const ls = window.localStorage;
  return {
    traffic_first_source: ls.getItem(FIRST_PREFIX + 'source'),
    traffic_first_medium: ls.getItem(FIRST_PREFIX + 'medium'),
    traffic_first_campaign: ls.getItem(FIRST_PREFIX + 'campaign'),
    traffic_first_term: ls.getItem(FIRST_PREFIX + 'term'),
    traffic_first_content: ls.getItem(FIRST_PREFIX + 'content'),
    traffic_first_landing_page: ls.getItem(FIRST_PREFIX + 'landing_page'),
    traffic_last_source: ls.getItem(LAST_PREFIX + 'source'),
    traffic_last_medium: ls.getItem(LAST_PREFIX + 'medium'),
    traffic_last_campaign: ls.getItem(LAST_PREFIX + 'campaign'),
    traffic_last_term: ls.getItem(LAST_PREFIX + 'term'),
    traffic_last_content: ls.getItem(LAST_PREFIX + 'content'),
    traffic_last_gclid: ls.getItem(LAST_PREFIX + 'gclid'),
    traffic_last_fbclid: ls.getItem(LAST_PREFIX + 'fbclid'),
    traffic_last_referrer: ls.getItem(LAST_PREFIX + 'referrer')
  };
}
