# LIMPEZA DOS SCHEMAS SANITY

## ❌ PROBLEMAS IDENTIFICADOS

### 1. **eventosInfoPage REMOVIDO**
- ✅ Arquivo deletado: `sanity/schemaTypes/eventosInfoPage.ts`
- ✅ Removido do index: `sanity/schemaTypes/index.ts`

### 2. **CAMPOS "UNKNOWN FIELDS" - POSSÍVEIS CAUSAS:**

#### A. **Documentos antigos com campos obsoletos**
- Solução: Deletar documentos antigos no Studio e recriar

#### B. **Campos com tipos alterados**
- Alguns schemas podem ter tipos inconsistentes
- Verificar todos os `defineField` para garantir consistência

#### C. **Referências quebradas**
- Verificar se não há referências ao `eventosInfoPage` removido

## ✅ SCHEMAS ATUAIS (8 TOTAL):

1. **homepage** - Homepage (completo ✅)
2. **eventosPage** - Página de Eventos (completo ✅)
3. **lazerPage** - Página de Lazer (completo ✅)
4. **sobrePage** - Página Sobre (completo ✅)
5. **equipePage** - Página Equipe (completo ✅)
6. **opcoesViagemPage** - Página Opções de Viagem (completo ✅)
7. **trabalheConoscoPage** - Página Trabalhe Conosco (completo ✅)
8. **landingPageEventos** - Landing Page Eventos (NOVO ✅)

## 🔧 COMO RESOLVER UNKNOWN FIELDS:

### Passo 1: Limpar dados no Studio
1. Acesse `http://localhost:3000/studio`
2. Vá em cada tipo de documento
3. **DELETE todos os documentos existentes**
4. Recrie os documentos do zero

### Passo 2: Criar documentos limpos
Para cada schema, criar 1 documento novo:

- **Homepage**: Criar documento único
- **Eventos Page**: Criar documento único
- **Lazer Page**: Criar documento único
- **Sobre Page**: Criar documento único
- **Equipe Page**: Criar documento único
- **Opções Viagem**: Criar documento único
- **Trabalhe Conosco**: Criar documento único
- **Landing Page Eventos**: Criar documento CBEnf

### Passo 3: Verificar funcionamento
- Testar todas as páginas
- Verificar se não há mais "Unknown fields"
- Garantir que todos os dados aparecem corretamente

## 📋 DADOS PARA CBENF (Landing Page Eventos):

### Usar os dados do script: `scripts/populate-cbenf.js`
- Slug: `cbenf`
- Título: `75º Congresso Brasileiro de Enfermagem`
- Status: `active`
- 28 hotéis com preços exatos
- 14 passeios com preços exatos
- Todas as condições de pagamento

## ⚠️ IMPORTANTE:
**DELETAR TODOS OS DOCUMENTOS ANTIGOS** antes de criar novos para evitar conflitos de schema!