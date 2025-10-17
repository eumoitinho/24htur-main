// Enhanced eCommerce events para cotações/propostas
import { gtmPush } from '../gtm';

export function trackQuoteRequest(quoteData = {}) {
  gtmPush('begin_checkout', {
    event_category: 'ecommerce',
    currency: 'BRL',
    value: 0, // Valor estimado se disponível
    items: [{
      item_id: 'quote_request',
      item_name: 'Solicitação de Cotação',
      item_category: quoteData.servico || 'transporte',
      item_category2: quoteData.tipo || 'corporativo',
      quantity: 1
    }],
    ...quoteData
  });
}

export function trackQuoteComplete(quoteData = {}) {
  gtmPush('purchase', {
    event_category: 'ecommerce',
    transaction_id: `quote_${Date.now()}`,
    currency: 'BRL',
    value: quoteData.valor || 0,
    items: [{
      item_id: 'quote_complete',
      item_name: 'Cotação Enviada',
      item_category: quoteData.servico || 'transporte',
      quantity: 1
    }],
    ...quoteData
  });
}