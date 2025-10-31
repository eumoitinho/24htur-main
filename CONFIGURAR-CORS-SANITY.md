# 🔧 Como Configurar CORS no Sanity

## ⚠️ PROBLEMA ATUAL
O site está tentando buscar dados do Sanity, mas está sendo bloqueado por CORS. Isso significa que você precisa configurar os domínios permitidos no painel do Sanity.

## 📋 PASSO A PASSO PARA RESOLVER

### 1. Acesse o Painel do Sanity
Acesse: **https://www.sanity.io/manage/personal/project/kyx4ncqy/settings/api**

### 2. Vá na seção "CORS origins"
- Role até encontrar a seção **"CORS origins"** ou **"API > CORS origins"**

### 3. Adicione os domínios permitidos
Clique em **"Add CORS origin"** e adicione:
- `https://www.24h.tur.br`
- `https://24h.tur.br`
- `http://localhost:3000` (para desenvolvimento local)

### 4. Configure as permissões
- **Allow credentials**: ✅ Marque esta opção
- **Protocol**: `https` (e `http` para localhost)

### 5. Salve as alterações
Clique em **"Save"** ou **"Add"**

## ✅ VERIFICAÇÃO

Após configurar:
1. Recarregue a página do site
2. Abra o console do navegador (F12)
3. Verifique se aparece: `✅ Usando dados do Sanity para [tipo]`
4. Se aparecer `❌ Erro de CORS`, verifique se os domínios estão corretos

## 🎯 O QUE FOI CONFIGURADO

Agora o site está configurado para:
- ✅ **Sempre buscar dados do Sanity primeiro**
- ✅ **Usar dados estáticos apenas como último recurso** (em caso de erro de CORS)
- ✅ **Logs claros** no console mostrando de onde vêm os dados
- ✅ **CDN desabilitado** para sempre pegar dados atualizados

## 📊 STATUS ESPERADO

Após configurar CORS corretamente:
- ✅ Console mostrará: `✅ Usando dados do Sanity para homepage`
- ✅ Console mostrará: `✅ Usando dados do Sanity para sobrePage`
- ✅ Console mostrará: `✅ Usando dados do Sanity para equipePage`
- ✅ Console mostrará: `✅ Usando dados do Sanity para lazerPage`
- ✅ Console mostrará: `✅ Usando dados do Sanity para opcoesViagemPage`
- ✅ Console mostrará: `✅ Usando dados do Sanity para trabalheConoscoPage`

## 🚨 IMPORTANTE

- Os dados estáticos (`data/*.json`) são apenas um **fallback de emergência**
- O conteúdo **real e atualizado** sempre vem do **Sanity**
- Após configurar CORS, o site **sempre** consumirá dados do Sanity
