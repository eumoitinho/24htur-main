# Solução para Problema de CORS e Falhas de Rede com Sanity

## Problema Original
Erro de CORS ao tentar acessar dados do Sanity de `https://www.24h.tur.br`:
```
Access to XMLHttpRequest at 'https://kyx4ncqy.apicdn.sanity.io/v2024-01-01/data/query/production?query=*%5B_type+%3D%3D+%22sobrePage%22%5D&returnQuery=false' from origin 'https://www.24h.tur.br' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

## Problema Secundário
Após resolver o CORS, apareceu erro de rede:
```
Failed to load resource: net::ERR_FAILED
```

## Problema Terciário
Após implementar o fallback, apareceu erro de JavaScript:
```
Uncaught TypeError: u.map is not a function
```

## Soluções Implementadas

### 1. Configuração do Cliente Sanity (`utils/lib/sanity.ts`)
- Adicionadas configurações para resolver problemas de CORS
- Configurado `perspective: 'published'` para usar dados publicados
- Desabilitado `stega` para evitar problemas de renderização
- **NOVO**: Implementado sistema de fallback para dados estáticos
- **NOVO**: Função `loadStaticData()` que carrega dados JSON locais quando Sanity falha
- **NOVO**: Função `normalizeStaticData()` que normaliza estruturas de dados estáticos para compatibilidade com Sanity

### 2. Configuração do Sanity Studio (`sanity.config.ts`)
- Adicionadas configurações de CORS no objeto `api`
- Permitidos domínios: `https://www.24h.tur.br`, `https://24h.tur.br`, `http://localhost:3000`
- Habilitado `credentials: true`

### 3. Configuração do Next.js (`next.config.mjs`)
- Adicionados headers CORS para rotas da API
- Configurado `Access-Control-Allow-Origin: *`
- Incluídos métodos HTTP necessários

### 4. Sistema de Fallback Robusto (`utils/hooks/useSanityData.ts`)
- **NOVO**: Função utilitária `createPageHook()` para criar hooks com fallback automático
- **NOVO**: Todos os hooks agora tentam carregar dados estáticos quando Sanity falha
- **NOVO**: Tratamento de erro melhorado com logs detalhados
- **NOVO**: Fallback automático para dados JSON locais em caso de falha de rede

## Como Funciona o Sistema de Fallback

1. **Primeira tentativa**: Busca dados do Sanity
2. **Se Sanity falhar**: Automaticamente carrega dados estáticos do arquivo JSON local
3. **Normalização**: Dados estáticos são normalizados para ter a mesma estrutura dos dados do Sanity
4. **Se dados estáticos também falharem**: Exibe erro para o usuário
5. **Logs detalhados**: Console mostra qual fonte de dados está sendo usada

## Normalização de Dados Estáticos

A função `normalizeStaticData()` resolve incompatibilidades de estrutura entre dados do Sanity e dados estáticos:

- **sobrePage**: Converte `values.items` em `values` (array direto)
- **eventosPage**: Converte `services.items` em `services` (array direto)
- **lazerPage**: Converte `services.items` em `services` (array direto)
- **opcoesViagemPage**: Converte `options.items` em `options` (array direto)
- **trabalheConoscoPage**: Converte `positions.items` em `positions` (array direto)

## Arquivos de Dados Estáticos Disponíveis
- `data/sobrePage.json`
- `data/equipePage.json`
- `data/eventosPage.json`
- `data/lazerPage.json`
- `data/opcoesViagemPage.json`
- `data/trabalheConoscoPage.json`

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
4. **NOVO**: Teste o fallback desconectando a internet temporariamente

## Benefícios da Nova Solução

✅ **Resistente a falhas**: Site continua funcionando mesmo se Sanity estiver offline
✅ **Performance melhorada**: Dados estáticos carregam mais rápido
✅ **Experiência do usuário**: Sem páginas em branco devido a erros de rede
✅ **Logs detalhados**: Fácil debug de problemas
✅ **Manutenção simples**: Dados estáticos podem ser atualizados facilmente

## Observações Importantes
- O token de API é necessário para requisições em produção
- As configurações de CORS devem ser feitas tanto no código quanto no painel do Sanity
- Sempre teste em ambiente de desenvolvimento antes de fazer deploy em produção
- **NOVO**: O sistema de fallback garante que o site sempre tenha conteúdo, mesmo offline
