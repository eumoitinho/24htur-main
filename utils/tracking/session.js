// Session management utility
// Creates / refreshes a session based on inactivity timeout.

const SESSION_ID_KEY = 'session_id';
const SESSION_START_KEY = 'session_start_ts';
const SESSION_LAST_KEY = 'session_last_ts';
const SESSION_PV_KEY = 'session_pageviews';
const TIMEOUT_MINUTES = 30; // inactivity threshold

export function getSession() {
  if (typeof window === 'undefined') return {};
  const now = Date.now();
  const ls = window.localStorage;
  const lastTs = parseInt(ls.getItem(SESSION_LAST_KEY) || '0', 10);
  let sessionId = ls.getItem(SESSION_ID_KEY);
  const expired = !sessionId || (now - lastTs) > TIMEOUT_MINUTES * 60 * 1000;

  if (expired) {
    sessionId = generateSessionId();
    ls.setItem(SESSION_ID_KEY, sessionId);
    ls.setItem(SESSION_START_KEY, now.toString());
    ls.setItem(SESSION_PV_KEY, '0');
  }

  // Increment pageviews
  const pv = parseInt(ls.getItem(SESSION_PV_KEY) || '0', 10) + 1;
  ls.setItem(SESSION_PV_KEY, pv.toString());
  ls.setItem(SESSION_LAST_KEY, now.toString());

  return {
    session_id: sessionId,
    session_start_ts: parseInt(ls.getItem(SESSION_START_KEY), 10),
    session_pageviews: pv,
    session_last_ts: now
  };
}

function generateSessionId() {
  return 'sess_' + Math.random().toString(36).slice(2) + '_' + Date.now();
}
