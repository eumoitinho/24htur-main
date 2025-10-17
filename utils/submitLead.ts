export type LeadData = Record<string, unknown>;

declare global {
  interface Window { __ENV?: { APPS_SCRIPT_URL?: string } }
}

// Hardcoded Apps Script URL (deployed web app)
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbznoaDe24i5LhyV2Y8eVjlEi6I_ne83AKCGCRUOpZBbklsmWhnk3eTP37nwIEF2K1s4oA/exec';

export async function submitLead(data: LeadData) {
  if (!APPS_SCRIPT_URL) {
    throw new Error('APPS_SCRIPT_URL não configurado. Defina window.__ENV.APPS_SCRIPT_URL com a URL do Apps Script.');
  }

  const payload = { action: 'addLead', data };
  const body = 'payload=' + encodeURIComponent(JSON.stringify(payload));
  const res = await fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body
  });
  return res.json();
}

export default submitLead;
