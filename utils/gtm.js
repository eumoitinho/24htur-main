// Utilitário para interação com o Google Tag Manager (dataLayer)
// Padroniza o envio de eventos e adiciona contexto comum do site.

const GTM_ID = 'GTM-M24J5ZPS';

/**
 * Garante que o dataLayer exista
 */
function ensureDataLayer() {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
}

/**
 * Envia um evento para o dataLayer
 * @param {string} event - Nome do evento (ex: 'solicitar_proposta')
 * @param {object} params - Parâmetros adicionais do evento
 */
export function gtmPush(event, params = {}) {
  if (typeof window === 'undefined') return;
  ensureDataLayer();
  const payload = {
    event,
    ...params,
    timestamp: Date.now(),
  };
  window.dataLayer.push(payload);
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.debug('[GTM PUSH]', payload);
  }
}

/**
 * Evento de page view customizado enriquecido
 * Pode ser chamado após mudança de rota ou carregamento inicial.
 */
export function pushEnhancedPageView(extra = {}) {
  gtmPush('page_view_enhanced', {
    content_group: '24h-viagens',
    business_type: 'viagens-corporativas',
    industry: 'turismo',
    language: 'pt-BR',
    ...extra,
  });
}

// Exemplo de helpers específicos
export function trackSolicitarProposta(source = 'button', extra = {}) {
  gtmPush('solicitar_proposta', { source, ...extra });
}

export function trackFormSubmit(status = 'success', extra = {}) {
  gtmPush('form_submit', { status, ...extra });
}

export function trackPhoneClick(phone, extra = {}) {
  gtmPush('phone_click', { phone, ...extra });
}

export function trackEmailClick(email, extra = {}) {
  gtmPush('email_click', { email, ...extra });
}

export function trackWhatsappClick(number, extra = {}) {
  gtmPush('whatsapp_click', { number, ...extra });
}

// Export default para conveniência
export default {
  gtmPush,
  pushEnhancedPageView,
  trackSolicitarProposta,
  trackFormSubmit,
  trackPhoneClick,
  trackEmailClick,
  trackWhatsappClick,
  GTM_ID,
};
