/**
 * Utilitário para enviar dados para Google Sheets
 * Usa uma abordagem que funciona com as limitações de CORS do Google Apps Script
 */

// URL do seu Google Apps Script deployment
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzxNrwt9dxMFOGETPAba5Tr-2J-BC9CqSNTAGLwWCpkxTskdPu0WDeUvWGWLNJ4Kxp4XQ/exec';

/**
 * Envia dados para Google Sheets usando uma requisição GET
 * (mais confiável com Google Apps Script)
 */
export async function sendToGoogleSheets(data) {
  try {
    // Constrói os parâmetros da URL
    const params = new URLSearchParams({
      empresa: data.empresa || '',
      nome: data.nome || '',
      email: data.email || '',
      telefone: data.telefone || '',
      assunto: data.assunto || '',
      mensagem: data.mensagem || '',
      source: data.source || 'website'
    });

    // Usa GET request que é mais compatível com Google Apps Script
    const url = `${GOOGLE_SCRIPT_URL}?${params.toString()}`;

    // Cria um iframe invisível para fazer a requisição
    // Isso evita problemas de CORS completamente
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = url;
    document.body.appendChild(iframe);

    // Remove o iframe após 3 segundos
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 3000);

    return { success: true };

  } catch (error) {
    console.error('Erro ao enviar para Google Sheets:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Alternativa: Envia usando fetch com modo no-cors
 * (menos confiável mas pode funcionar em alguns casos)
 */
export async function sendToGoogleSheetsPost(data) {
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(data)
    });

    // Com no-cors não podemos ler a resposta
    // Assumimos sucesso se não houver erro
    return { success: true };

  } catch (error) {
    console.error('Erro ao enviar para Google Sheets:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Alternativa: Abre o formulário do Google em nova aba
 * (mais visível mas garante entrega)
 */
export function sendViaGoogleForm(data) {
  // Se você tiver um Google Form, pode pré-preencher os campos
  const googleFormUrl = 'YOUR_GOOGLE_FORM_URL';
  const params = new URLSearchParams({
    'entry.XXXXXX': data.nome,      // Substitua pelos IDs reais dos campos
    'entry.YYYYYY': data.email,
    'entry.ZZZZZZ': data.empresa,
    // ... outros campos
  });

  window.open(`${googleFormUrl}?${params.toString()}`, '_blank');
}