/**
 * Google Apps Script para gerenciar leads do formulário de contato - VERSÃO COM CORS
 *
 * INSTRUÇÕES DE CONFIGURAÇÃO:
 *
 * 1. Acesse https://script.google.com e crie um novo projeto.
 * 2. Cole este código no editor.
 * 3. Crie uma planilha no Google Sheets.
 * 4. Na primeira linha da planilha, adicione os seguintes cabeçalhos:
 *    A1: Empresa | B1: Nome | C1: Telefone | D1: Email | E1: Assunto | F1: Mensagem | G1: Data/Hora | H1: Origem
 * 5. Copie o ID da sua planilha (que fica na URL) e cole na variável SPREADSHEET_ID abaixo.
 * 6. Salve o projeto.
 * 7. Clique em "Implantar" > "Nova implantação".
 * 8. Em "Selecione o tipo", escolha "Aplicativo da web".
 * 9. Em "Executar como", escolha "Eu".
 * 10. Em "Quem tem acesso", escolha "Qualquer pessoa".
 * 11. Clique em "Implantar".
 * 12. Copie a URL do aplicativo da web e cole no seu código React.
 *
 * IMPORTANTE: Após implantar, se fizer alterações no código, você precisa:
 * - Clicar em "Implantar" > "Gerenciar implantações"
 * - Clicar no ícone de lápis
 * - Mudar a versão para "Nova versão"
 * - Clicar em "Implantar"
 */

// --- CONFIGURAÇÃO ---
const SPREADSHEET_ID = 'COLE_AQUI_O_ID_DA_SUA_PLANILHA'; // Ex: '1ABC123DEF456...' (pegar da URL da planilha)
const SHEET_NAME = 'Leads'; // Nome da aba onde os dados serão salvos

// --- FUNÇÕES PRINCIPAIS COM SUPORTE A CORS ---

/**
 * Função para lidar com requisições OPTIONS (preflight CORS)
 * IMPORTANTE: Esta função é essencial para resolver o problema de CORS
 */
function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT);
}

/**
 * Função para processar requisições POST
 * Modificada para funcionar melhor com CORS
 */
function doPost(e) {
  try {
    // Se não houver dados, retorna erro
    if (!e.postData || !e.postData.contents) {
      return createJsonResponse({
        success: false,
        message: 'Nenhum dado recebido'
      });
    }

    const data = JSON.parse(e.postData.contents);

    // Chama a função para adicionar o lead
    return addLead(data);

  } catch (error) {
    Logger.log('Erro no doPost: ' + error.toString());
    Logger.log('Dados recebidos: ' + (e.postData ? e.postData.contents : 'nenhum'));

    return createJsonResponse({
      success: false,
      message: 'Erro ao processar dados: ' + error.toString()
    });
  }
}

/**
 * Função para processar requisições GET
 * Mantida para compatibilidade e testes
 */
function doGet(e) {
  try {
    // Se não houver parâmetros, retorna informação sobre o serviço
    if (!e.parameter || !e.parameter.action) {
      return createJsonResponse({
        success: true,
        message: 'Serviço de captura de leads funcionando',
        version: '1.0',
        endpoints: {
          POST: 'Enviar novo lead',
          GET: '?action=getLeads para buscar leads',
          OPTIONS: 'Preflight CORS'
        }
      });
    }

    const action = e.parameter.action;

    if (action === 'getLeads') {
      return getLeads();
    }

    if (action === 'test') {
      return createJsonResponse({
        success: true,
        message: 'Conexão OK',
        timestamp: new Date().toISOString()
      });
    }

    return createJsonResponse({
      success: false,
      message: 'Ação não reconhecida: ' + action
    });

  } catch (error) {
    Logger.log('Erro no doGet: ' + error.toString());
    return createJsonResponse({
      success: false,
      message: 'Erro interno: ' + error.toString()
    });
  }
}

// --- FUNÇÕES AUXILIARES ---

/**
 * Adiciona um novo lead na planilha
 * @param {object} leadData - Os dados do lead enviados pelo formulário
 * @returns {ContentService.TextOutput} - Resposta JSON
 */
function addLead(leadData) {
  const NUM_COLUMNS = 8;
  const DATE_COLUMN_INDEX = 7;

  try {
    // Valida dados mínimos necessários
    if (!leadData.email && !leadData.telefone) {
      return createJsonResponse({
        success: false,
        message: 'É necessário fornecer email ou telefone'
      });
    }

    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    // Se a aba não existir, cria e formata o cabeçalho
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      const headers = [
        ['Empresa', 'Nome', 'Telefone', 'Email', 'Assunto', 'Mensagem', 'Data/Hora', 'Origem']
      ];
      const headerRange = sheet.getRange(1, 1, 1, NUM_COLUMNS);
      headerRange.setValues(headers);
      headerRange.setFontWeight('bold').setBackground('#4285f4').setFontColor('white');
    }

    // Mapeia os dados do formulário para a ordem correta das colunas
    const newRow = [
      leadData.empresa || '',
      leadData.nome || '',
      leadData.telefone || '',
      leadData.email || '',
      leadData.assunto || '',
      leadData.mensagem || '',
      new Date(), // Data/hora atual do servidor
      leadData.source || 'website' // Origem padrão
    ];

    sheet.appendRow(newRow);

    const lastRow = sheet.getLastRow();
    const newRowRange = sheet.getRange(lastRow, 1, 1, NUM_COLUMNS);

    // Formata a linha adicionada
    if (lastRow % 2 === 0) {
      newRowRange.setBackground('#f8f9fa');
    }
    sheet.getRange(lastRow, DATE_COLUMN_INDEX).setNumberFormat('dd/mm/yyyy HH:mm:ss');

    // Ajusta a largura das colunas
    sheet.autoResizeColumns(1, NUM_COLUMNS);

    // Log para debug
    Logger.log('Lead adicionado com sucesso:');
    Logger.log('Nome: ' + (leadData.nome || 'não informado'));
    Logger.log('Email: ' + (leadData.email || 'não informado'));
    Logger.log('Empresa: ' + (leadData.empresa || 'não informado'));
    Logger.log('Linha: ' + lastRow);

    return createJsonResponse({
      success: true,
      message: 'Lead cadastrado com sucesso!',
      data: {
        row: lastRow,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    Logger.log('Erro ao adicionar lead: ' + error.toString());
    Logger.log('Stack trace: ' + error.stack);

    return createJsonResponse({
      success: false,
      message: 'Erro ao salvar: ' + error.toString()
    });
  }
}

/**
 * Busca todos os leads da planilha
 * @returns {ContentService.TextOutput} - Resposta JSON com a lista de leads
 */
function getLeads() {
  const NUM_COLUMNS = 8;

  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet || sheet.getLastRow() <= 1) {
      return createJsonResponse({
        success: true,
        data: [],
        message: 'Nenhum lead encontrado'
      });
    }

    // Pega todos os dados, exceto o cabeçalho
    const data = sheet.getRange(2, 1, sheet.getLastRow() - 1, NUM_COLUMNS).getValues();

    // Converte para array de objetos
    const leads = data.map((row, index) => ({
      id: index + 2, // ID da linha na planilha
      empresa: row[0] || '',
      nome: row[1] || '',
      telefone: row[2] || '',
      email: row[3] || '',
      assunto: row[4] || '',
      mensagem: row[5] || '',
      timestamp: row[6] instanceof Date ? row[6].toISOString() : null,
      origem: row[7] || ''
    }));

    // Ordena por data (mais recentes primeiro)
    leads.sort((a, b) => {
      const dateA = a.timestamp ? new Date(a.timestamp) : new Date(0);
      const dateB = b.timestamp ? new Date(b.timestamp) : new Date(0);
      return dateB - dateA;
    });

    Logger.log('Total de leads recuperados: ' + leads.length);

    return createJsonResponse({
      success: true,
      data: leads,
      total: leads.length
    });

  } catch (error) {
    Logger.log('Erro ao buscar leads: ' + error.toString());
    return createJsonResponse({
      success: false,
      message: 'Erro ao buscar leads: ' + error.toString()
    });
  }
}

/**
 * Cria uma resposta JSON padronizada
 * IMPORTANTE: Esta função foi modificada para não incluir headers CORS
 * pois o Google Apps Script não suporta headers customizados
 * @param {object} payload - O objeto a ser convertido em JSON
 * @returns {ContentService.TextOutput}
 */
function createJsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Função de teste para verificar a configuração
 * Execute esta função no editor do Google Apps Script para testar
 */
function testConfiguration() {
  try {
    console.log('=== TESTE DE CONFIGURAÇÃO ===');

    // Testa acesso à planilha
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    console.log('✅ Planilha encontrada: ' + spreadsheet.getName());

    // Testa a aba
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    if (!sheet) {
      console.log('⚠️ Aba "' + SHEET_NAME + '" não encontrada.');
      console.log('   A aba será criada automaticamente no primeiro envio de lead.');
    } else {
      console.log('✅ Aba "' + SHEET_NAME + '" encontrada.');
      console.log('   Total de linhas: ' + sheet.getLastRow());
    }

    // Testa adicionar um lead de teste
    console.log('\n=== TESTE DE INSERÇÃO ===');
    const testLead = {
      empresa: 'Empresa Teste',
      nome: 'Teste de Configuração',
      email: 'teste@exemplo.com',
      telefone: '(00) 0000-0000',
      assunto: 'Teste',
      mensagem: 'Lead de teste criado pela função testConfiguration',
      source: 'teste_manual'
    };

    const result = JSON.parse(addLead(testLead).getContent());

    if (result.success) {
      console.log('✅ Lead de teste adicionado com sucesso!');
      console.log('   Linha: ' + result.data.row);
    } else {
      console.log('❌ Erro ao adicionar lead de teste: ' + result.message);
    }

    console.log('\n=== CONFIGURAÇÃO OK! ===');
    console.log('Agora você pode implantar o script e usar a URL no seu aplicativo.');

  } catch (error) {
    console.log('❌ ERRO NA CONFIGURAÇÃO: ' + error.toString());
    console.log('\nVerifique:');
    console.log('1. Se o SPREADSHEET_ID está correto');
    console.log('2. Se você tem permissão para acessar a planilha');
    console.log('3. Se a planilha existe e não foi excluída');
  }
}

/**
 * Função para limpar leads de teste
 */
function limparLeadsDeTeste() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet || sheet.getLastRow() <= 1) {
      console.log('Nenhum lead para limpar');
      return;
    }

    // Mantém apenas o cabeçalho
    const lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      sheet.deleteRows(2, lastRow - 1);
      console.log('Leads removidos: ' + (lastRow - 1));
    }

  } catch (error) {
    console.log('Erro ao limpar leads: ' + error.toString());
  }
}