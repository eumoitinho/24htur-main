import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const password = searchParams.get('password');

    // Verificação de senha
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, message: 'Acesso negado' },
        { status: 401 }
      );
    }

    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    if (!GOOGLE_SCRIPT_URL) {
      return NextResponse.json(
        { success: false, message: 'Configuração pendente' },
        { status: 500 }
      );
    }

    // Buscar leads do Google Sheets
    const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=getLeads`, {
      method: 'GET',
      signal: AbortSignal.timeout(10000)
    });

    const result = await response.json();

    return NextResponse.json({
      success: true,
      leads: result.data || []
    });

  } catch (error) {
    console.error('Erro ao buscar leads:', error);
    return NextResponse.json(
      { success: false, message: 'Erro ao buscar leads' },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const data = await request.json();
    const { password, index } = data;

    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, message: 'Acesso negado' },
        { status: 401 }
      );
    }

    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    if (!GOOGLE_SCRIPT_URL) {
      return NextResponse.json(
        { success: false, message: 'Configuração pendente' },
        { status: 500 }
      );
    }

    // Enviar solicitação de exclusão
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'deleteLead',
        data: { rowIndex: index }
      }),
      signal: AbortSignal.timeout(10000)
    });

    const result = await response.json();

    return NextResponse.json({
      success: true,
      message: 'Lead removido com sucesso!',
      data: result
    });

  } catch (error) {
    console.error('Erro ao remover lead:', error);
    return NextResponse.json(
      { success: false, message: 'Erro ao remover lead' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.json();

    // URL do Google Apps Script
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    // Verificar se a URL está configurada
    if (!GOOGLE_SCRIPT_URL) {
      console.error('GOOGLE_SCRIPT_URL não configurada no .env.local');
      return NextResponse.json(
        {
          success: false,
          message: 'Configuração do servidor pendente'
        },
        { status: 500 }
      );
    }

    // Enviar dados para o Google Sheets via Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        empresa: data.empresa || '',
        nome: data.nome || '',
        email: data.email || '',
        telefone: data.telefone || '',
        assunto: data.assunto || '',
        mensagem: data.mensagem || '',
        source: data.source || 'website',
        timestamp: new Date().toISOString()
      }),
      // Timeout para evitar travamento
      signal: AbortSignal.timeout(10000) // 10 segundos
    });

    // Google Apps Script sempre retorna status 200, mesmo com erro
    // Então precisamos verificar o conteúdo da resposta
    let result;
    try {
      const textResponse = await response.text();
      result = JSON.parse(textResponse);
    } catch (parseError) {
      console.error('Erro ao parsear resposta do Google Apps Script:', parseError);
      // Se não conseguir parsear, assume sucesso (Google Apps Script com mode no-cors)
      result = { success: true };
    }

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Lead cadastrado com sucesso!'
      });
    } else {
      throw new Error(result.message || 'Erro ao salvar no Google Sheets');
    }

  } catch (error) {
    console.error('Erro ao processar lead:', error);

    // Tratamento de erros específicos
    if (error.name === 'AbortError') {
      return NextResponse.json(
        {
          success: false,
          message: 'Tempo limite excedido. Tente novamente.'
        },
        { status: 408 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Erro ao processar sua solicitação. Tente novamente.'
      },
      { status: 500 }
    );
  }
}