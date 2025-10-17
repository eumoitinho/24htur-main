/**
 * Google Apps Script FUNCIONAL para receber dados do formulário
 * Versão que funciona com GET e POST
 *
 * INSTRUÇÕES:
 * 1. Cole este código no Google Apps Script
 * 2. Substitua SPREADSHEET_ID pelo ID da sua planilha
 * 3. Faça o deploy como Web App com acesso "Anyone"
 */

// SUBSTITUA PELO ID DA SUA PLANILHA (pegar da URL da planilha)
const SPREADSHEET_ID = 'COLE_AQUI_O_ID_DA_SUA_PLANILHA';
const SHEET_NAME = 'Leads';

/**
 * Processa requisições GET (mais compatível com CORS)
 */
function doGet(e) {
  try {
    // Se houver parâmetros, trata como envio de lead
    if (e.parameter && (e.parameter.email || e.parameter.nome)) {
      return addLeadFromParams(e.parameter);
    }

    // Retorna status do serviço
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Serviço funcionando',
        method: 'GET'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log('Erro no doGet: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Processa requisições POST
 */
function doPost(e) {
  try {
    let data;

    // Tenta parsear o JSON do body
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseError) {
        // Se falhar o parse, tenta usar como texto simples
        Logger.log('Não foi possível parsear JSON, tentando como texto');
        data = e.parameter;
      }
    } else {
      data = e.parameter;
    }

    if (!data) {
      throw new Error('Nenhum dado recebido');
    }

    return addLeadFromParams(data);

  } catch (error) {
    Logger.log('Erro no doPost: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Adiciona um lead na planilha
 */
function addLeadFromParams(params) {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    // Cria a aba se não existir
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      // Adiciona cabeçalhos
      const headers = [
        'Data/Hora',
        'Empresa',
        'Nome',
        'Email',
        'Telefone',
        'Assunto',
        'Mensagem',
        'Origem'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.getRange(1, 1, 1, headers.length)
        .setFontWeight('bold')
        .setBackground('#f3f3f3');
    }

    // Prepara os dados
    const row = [
      new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
      params.empresa || '',
      params.nome || '',
      params.email || '',
      params.telefone || '',
      params.assunto || '',
      params.mensagem || '',
      params.source || 'website'
    ];

    // Adiciona a linha
    sheet.appendRow(row);

    // Log para debug
    Logger.log('Lead adicionado: ' + JSON.stringify({
      nome: params.nome,
      email: params.email,
      linha: sheet.getLastRow()
    }));

    // Retorna sucesso
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Lead cadastrado com sucesso',
        row: sheet.getLastRow()
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log('Erro ao adicionar lead: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Função de teste - execute no editor do Apps Script
 */
function testarScript() {
  console.log('=== TESTE DO SCRIPT ===');

  try {
    // Testa acesso à planilha
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    console.log('✅ Planilha encontrada: ' + spreadsheet.getName());

    // Testa adicionar um lead
    const testParams = {
      empresa: 'Empresa Teste',
      nome: 'Teste Manual',
      email: 'teste@exemplo.com',
      telefone: '11999999999',
      assunto: 'Teste do Script',
      mensagem: 'Testando o funcionamento',
      source: 'teste'
    };

    const result = addLeadFromParams(testParams);
    const resultData = JSON.parse(result.getContent());

    if (resultData.success) {
      console.log('✅ Lead de teste adicionado com sucesso!');
      console.log('   Linha: ' + resultData.row);
    } else {
      console.log('❌ Erro: ' + resultData.error);
    }

  } catch (error) {
    console.log('❌ ERRO: ' + error.toString());
    console.log('Verifique se o SPREADSHEET_ID está correto');
  }
}