# 🚀 SETUP COMPLETO SANITY - 24H TURISMO

## 📋 SCHEMAS DISPONÍVEIS (9 TOTAL):

1. **homepage** - Homepage principal
2. **eventosPage** - Página listagem de eventos
3. **lazerPage** - Página de viagens de lazer
4. **sobrePage** - Página sobre a empresa
5. **equipePage** - Página da equipe
6. **eventosInfoPage** - Página info de eventos
7. **opcoesViagemPage** - Página opções de viagem
8. **trabalheConoscoPage** - Página trabalhe conosco
9. **landingPageEventos** - Landing pages individuais de eventos (CBEnf)

## 🛠️ COMANDOS DISPONÍVEIS:

```bash
# Limpar Sanity e criar documentos vazios
npm run sanity:clean

# Popular dados do CBEnf (precisa de token)
npm run sanity:populate-cbenf

# Abrir Sanity Studio separado na porta 3333
npm run sanity:studio
```

## 🔧 SETUP INICIAL:

### 1. Configurar Token Sanity
```bash
# No arquivo .env.local, adicione:
SANITY_API_TOKEN=seu_token_aqui
```

**Para obter o token:**
1. Acesse https://sanity.io/manage
2. Vá em Settings → API → Tokens
3. Crie token com permissões **Editor**
4. Copie e cole no .env.local

### 2. Limpar e Popular Sanity
```bash
# Executa limpeza completa
npm run sanity:clean
```

**O que este comando faz:**
- ❌ **Deleta TODOS** os documentos existentes
- ✅ **Cria documentos vazios** para todas as 9 páginas
- 🎯 **Estrutura pronta** para você preencher

## 📝 PRÓXIMOS PASSOS:

### 1. Acesse o Studio
```
http://localhost:3000/studio
```

### 2. Preencha cada página:
- **Homepage**: Conteúdo principal do site
- **Eventos Page**: Informações da listagem de eventos
- **Lazer Page**: Conteúdo de viagens de lazer
- **Sobre Page**: História e missão da empresa
- **Equipe Page**: Informações da equipe
- **Eventos Info**: Informações sobre serviços de eventos
- **Opções Viagem**: Diferentes tipos de viagem
- **Trabalhe Conosco**: Vagas e informações RH

### 3. Criar CBEnf (Landing Page Eventos):
- Tipo: **Landing Page Eventos**
- Slug: **`cbenf`**
- Use dados do `scripts/populate-cbenf.js` como referência
- 28 hotéis com preços exatos
- 14 passeios com preços exatos

## 🎯 ESTRUTURA FINAL:

```
Site Principal:
├── / (homepage)
├── /eventos (eventosPage - listagem)
├── /eventos/cbenf (landingPageEventos)
├── /lazer (lazerPage)
├── /sobre (sobrePage)
├── /equipe (equipePage)
├── /opcoes-viagem (opcoesViagemPage)
└── /trabalhe-conosco (trabalheConoscoPage)
```

## ⚠️ IMPORTANTE:

- **SEMPRE** execute `npm run sanity:clean` se houver "Unknown fields"
- **NÃO** edite schemas após criar documentos (delete e recrie)
- **CBEnf** deve ter EXATAMENTE os mesmos dados do repositório antigo

## 🆘 RESOLUÇÃO DE PROBLEMAS:

### "Unknown fields found"
```bash
npm run sanity:clean
```

### Token inválido
1. Verifique se o token tem permissões **Editor**
2. Confirme se está no arquivo `.env.local`
3. Reinicie o servidor `npm run dev`

### Erro de permissão
- Verifique se o token não expirou
- Confirme se o projectId está correto no `.env`

## 🎉 SUCESSO!

Quando tudo estiver configurado:
- ✅ 9 páginas com conteúdo no Sanity
- ✅ CBEnf funcionando em `/eventos/cbenf`
- ✅ Sem "Unknown fields"
- ✅ Dados carregando corretamente