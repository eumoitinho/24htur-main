# 🚀 Instruções de Deploy e Troubleshooting

## ⚠️ PROBLEMA ATUAL: Application Error em Produção

O site está apresentando um erro em produção (`www.24h.tur.br`): **"Application error: a client-side exception has occurred"**

## 🔍 ANÁLISE DO PROBLEMA

### Erro Principal
```
Cannot destructure property 'auth' of 'e' as it is undefined
```

Este erro está ocorrendo em código minificado em produção. Pode estar relacionado a:
1. Dados do Sanity retornando estruturas inesperadas
2. Algum componente renderizando em produção de forma diferente
3. Problema de build/deploy

## ✅ SOLUÇÕES IMPLEMENTADAS

### 1. **Proteção de Dados do Sanity**
- ✅ Normalização automática de dados
- ✅ Remoção de HTML tags
- ✅ Garantia de arrays sempre serem arrays
- ✅ Mapeamento automático de ícones
- ✅ Fallback para dados estáticos

### 2. **Componentes Protegidos**
- ✅ `HeroHome`, `ServicesHome`, `TeamSection`
- ✅ `WhyChooseHome`, `ProblemsSection`, `MetricsHome`
- ✅ `TestimonialsHome` e todos os outros

### 3. **Build Local**
- ✅ Build local funcional sem erros
- ✅ Dev server funcionando corretamente

## 🛠️ PRÓXIMOS PASSOS PARA DEPLOY

### 1. **Verificar Configuração no Vercel/Plataforma**

Acesse as configurações do seu projeto em `https://vercel.com`:

```bash
# Variáveis de ambiente necessárias:
NEXT_PUBLIC_SANITY_PROJECT_ID=kyx4ncqy
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-10-17
NEXT_PUBLIC_SANITY_TOKEN=(opcional, mas recomendado)
```

### 2. **Configurar CORS no Sanity**

1. Acesse: https://www.sanity.io/manage/personal/project/kyx4ncqy/settings/api
2. Vá em **"CORS origins"**
3. Adicione:
   - `https://www.24h.tur.br`
   - `https://24h.tur.br`
   - `http://localhost:3000` (para desenvolvimento)
4. Marque **"Allow credentials"**
5. Salve

### 3. **Fazer Deploy Manual**

```bash
# 1. Garantir que está tudo commitado
git add .
git commit -m "fix: correções para erro de produção"

# 2. Push para GitHub/main
git push origin main

# 3. O Vercel deve fazer deploy automaticamente
# Ou fazer deploy manual:
vercel --prod
```

### 4. **Verificar Build Log**

No painel do Vercel:
1. Vá em **Deployments**
2. Clique no último deploy
3. Verifique se aparecem erros durante o build
4. Veja se há warnings importantes

### 5. **Verificar Runtime Errors**

No painel do Vercel:
1. Vá em **Functions** → **Logs**
2. Procure por erros recentes
3. Verifique se algum componente está falhando

## 🔧 TROUBLESHOOTING

### Se o erro persistir:

#### Opção 1: Deploy com Build Local
```bash
# 1. Fazer build local para testar
npm run build

# 2. Testar build local
npm run start

# 3. Se funcionar localmente, fazer deploy
vercel --prod
```

#### Opção 2: Verificar Logs em Produção
1. Abra o console do navegador em `www.24h.tur.br`
2. Envie os logs completos para análise
3. Verifique se há outros erros além do `auth`

#### Opção 3: Rollback
```bash
# Se o erro foi introduzido recentemente, fazer rollback
vercel rollback
```

### Verificar Componentes Problemáticos

O erro pode estar vindo de um componente específico. Para identificar:

1. Faça deploy com apenas alguns componentes
2. Vá adicionando componentes gradualmente
3. Identifique qual componente causa o erro

## 📋 CHECKLIST PRÉ-DEPLOY

- [ ] Build local funcionando (`npm run build`)
- [ ] Dev server funcionando (`npm run dev`)
- [ ] Variáveis de ambiente configuradas no Vercel
- [ ] CORS configurado no Sanity
- [ ] Todos os dados estáticos atualizados em `data/*.json`
- [ ] Documentos criados no Sanity (homepage, lazer, etc)
- [ ] Testes locais completos

## 🎯 TESTES PARA VALIDAR

Após o deploy:

1. **Homepage**: `/`
2. **Sobre**: `/sobre`
3. **Equipe**: `/equipe`
4. **Lazer**: `/lazer`
5. **Eventos**: `/eventos`
6. **Opções de Viagem**: `/opcoes-viagem`
7. **Trabalhe Conosco**: `/trabalhe-conosco`

Cada página deve:
- ✅ Carregar sem erros no console
- ✅ Mostrar dados dinâmicos do Sanity (se disponível)
- ✅ Mostrar dados estáticos (se Sanity falhar)
- ✅ Funcionar corretamente todos os componentes

## 📞 SUPORTE

Se o problema persistir após seguir estes passos:

1. Capture screenshot do erro no console
2. Capture screenshot dos logs do Vercel
3. Capture screenshot das configurações do Sanity
4. Compartilhe para análise mais profunda

## 🔄 PRÓXIMA REVISÃO

Após o deploy bem-sucedido:
- Monitorar logs por 24-48 horas
- Verificar se há erros intermitentes
- Coletar feedback dos usuários
- Fazer ajustes conforme necessário
