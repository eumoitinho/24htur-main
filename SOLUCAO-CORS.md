# Solução para Problema de CORS com Sanity

## Problema
Erro de CORS ao tentar acessar dados do Sanity de `https://www.24h.tur.br`:
```
Access to XMLHttpRequest at 'https://kyx4ncqy.apicdn.sanity.io/v2024-01-01/data/query/production?query=*%5B_type+%3D%3D+%22sobrePage%22%5D&returnQuery=false' from origin 'https://www.24h.tur.br' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

## Soluções Implementadas

### 1. Configuração do Cliente Sanity (`utils/lib/sanity.ts`)
- Adicionadas configurações para resolver problemas de CORS
- Configurado `perspective: 'published'` para usar dados publicados
- Desabilitado `stega` para evitar problemas de renderização

### 2. Configuração do Sanity Studio (`sanity.config.ts`)
- Adicionadas configurações de CORS no objeto `api`
- Permitidos domínios: `https://www.24h.tur.br`, `https://24h.tur.br`, `http://localhost:3000`
- Habilitado `credentials: true`

### 3. Configuração do Next.js (`next.config.mjs`)
- Adicionados headers CORS para rotas da API
- Configurado `Access-Control-Allow-Origin: *`
- Incluídos métodos HTTP necessários

## Próximos Passos Necessários

### 1. Criar Token de API do Sanity
1. Acesse: https://www.sanity.io/manage/personal/project/kyx4ncqy/api
2. Crie um novo token com permissões de **leitura**
3. Adicione o token às variáveis de ambiente

### 2. Configurar Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto com:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=kyx4ncqy
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SANITY_TOKEN=seu_token_aqui
```

### 3. Configurar CORS no Painel do Sanity
1. Acesse o painel do Sanity: https://www.sanity.io/manage/personal/project/kyx4ncqy
2. Vá em **Settings** > **CORS origins**
3. Adicione os domínios permitidos:
   - `https://www.24h.tur.br`
   - `https://24h.tur.br`
   - `http://localhost:3000` (para desenvolvimento)

### 4. Deploy e Teste
1. Faça o deploy das alterações
2. Teste se as requisições ao Sanity funcionam corretamente
3. Verifique se não há mais erros de CORS no console

## Observações Importantes
- O token de API é necessário para requisições em produção
- As configurações de CORS devem ser feitas tanto no código quanto no painel do Sanity
- Sempre teste em ambiente de desenvolvimento antes de fazer deploy em produção
