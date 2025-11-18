# Roteiro para Gravação dos Vídeos Explicativos
## Documentação Sanity CMS - 24H Turismo

Este roteiro detalha os 8 vídeos que devem ser gravados para complementar a documentação do Sanity CMS.

---

## 📹 Vídeo 1: Introdução ao Sanity CMS
**Duração estimada:** 5-7 minutos
**Localização na docs:** `/docs/introducao`

### Objetivo
Apresentar o Sanity CMS e dar um tour geral pela interface para que o cliente se sinta confortável.

### Roteiro Detalhado

**[00:00 - 00:30] Abertura**
- Olá! Bem-vindo ao Sanity CMS, o painel administrativo do site da 24H Turismo
- Neste vídeo você vai aprender a navegar e usar o sistema
- Não precisa saber programação - tudo é visual e intuitivo

**[00:30 - 01:30] Como Acessar**
- Demonstrar acesso ao `/studio`
- Mostrar tela de login
- Explicar opções de autenticação (Google, GitHub, E-mail)
- Fazer login e aguardar carregamento

**[01:30 - 03:00] Tour pela Interface**
- **Menu Lateral Esquerdo:**
  - Mostrar cada item do menu (Home Page, Sobre Page, etc.)
  - Explicar que cada item representa uma página do site
  - Destacar "Site Settings" (configurações globais)
- **Área Central:**
  - Mostrar área de edição quando clica em uma página
  - Demonstrar scroll por campos
  - Mostrar diferentes tipos de campos (texto, imagem, lista)
- **Barra Superior:**
  - Mostrar botão "Publish" (MUITO IMPORTANTE!)
  - Mostrar menu de ações
  - Mostrar avatar/configurações de conta

**[03:00 - 04:30] Conceitos Importantes**
- **Rascunho vs Publicado:**
  - Mudanças são salvas automaticamente como rascunho
  - Só aparecem no site após clicar em "Publish"
  - Demonstrar fazendo uma mudança pequena SEM publicar
  - Explicar que visitantes não veem rascunhos
- **Seções Expansíveis:**
  - Mostrar como expandir/retrair seções
  - Explicar organização por seções
- **Campos Obrigatórios:**
  - Apontar asterisco (*) em campos obrigatórios
  - Explicar que não publica se estiverem vazios

**[04:30 - 05:30] Workflow Básico**
1. Acessar `/studio`
2. Fazer login
3. Escolher página no menu lateral
4. Encontrar seção que quer editar
5. Fazer alterações
6. Clicar em **"Publish"**
7. Verificar site ao vivo

**[05:30 - 06:30] Demonstração Prática**
- Fazer uma edição simples (ex: mudar título de uma seção)
- Mostrar processo completo:
  - Encontrar o campo
  - Editar
  - Publicar
  - Abrir site em nova aba
  - Recarregar para ver mudança

**[06:30 - 07:00] Dicas de Segurança e Encerramento**
- Sempre revise antes de publicar
- Copie textos importantes antes de alterar (backup)
- Se não tem certeza, não apague
- Em caso de dúvida, consulte a documentação
- Vamos ver nos próximos vídeos como editar cada seção específica!

---

## 📹 Vídeo 2: Editando a Homepage - Hero Section
**Duração estimada:** 3-5 minutos
**Localização na docs:** `/docs/homepage/hero`

### Objetivo
Ensinar a editar a seção mais importante da homepage: o Hero com imagem de fundo, título e CTA.

### Roteiro Detalhado

**[00:00 - 00:20] Introdução**
- O Hero é a primeira coisa que visitantes veem
- Vamos aprender a mudar título, subtítulo e imagem de fundo
- É uma das edições mais comuns que você fará

**[00:20 - 01:00] Acessando a Seção**
- Entrar em `/studio`
- Clicar em "Home Page" no menu lateral
- Scroll até encontrar "Hero Section"
- Expandir a seção

**[01:00 - 02:00] Editando Textos**
- **Título:**
  - Mostrar campo "Title"
  - Explicar que deve ser impactante (4-8 palavras)
  - Fazer exemplo de edição
  - Dica: palavra em dourado é automática
- **Subtítulo:**
  - Mostrar campo "Subtitle"
  - Explicar propósito (complementar o título)
  - Máximo 2 linhas para não poluir
  - Fazer exemplo de edição
- **CTA (Call-to-Action):**
  - Mostrar campos "CTA Text" e "CTA Link"
  - Explicar o que cada um faz
  - Exemplos de bons textos de CTA

**[02:00 - 04:00] Trocando Imagem de Fundo**
- **Processo completo:**
  1. Clicar em "Background Image"
  2. Mostrar opção "Select" vs "Upload"
  3. **Se usar imagem existente:**
     - Clicar em "Select"
     - Navegar biblioteca
     - Escolher imagem
  4. **Se fazer upload:**
     - Clicar em "Upload"
     - Escolher arquivo do computador
     - Aguardar upload (mostrar barra de progresso)
     - Imagem selecionada automaticamente
- **Dicas sobre imagens:**
  - Tamanho ideal: 1920x1080px
  - Formato: JPG ou WebP
  - Peso máximo: 500KB
  - Escolher imagens com espaço limpo para texto

**[04:00 - 04:30] Publicando e Verificando**
- Clicar em botão verde "Publish"
- Abrir site em nova aba
- Recarregar página (F5)
- Mostrar as mudanças aplicadas
- Se não apareceu: aguardar 1-2 minutos e recarregar

**[04:30 - 05:00] Dicas Finais**
- Teste em mobile também (mostrar DevTools)
- Verifique legibilidade do texto na imagem
- Sistema aplica gradiente automático para ajudar
- Se precisar otimizar imagem, ver guia de otimização

---

## 📹 Vídeo 3: Gerenciando Imagens no Sanity
**Duração estimada:** 4-6 minutos
**Localização na docs:** `/docs/imagens`

### Objetivo
Tutorial completo sobre upload, formatos, tamanhos e otimização de imagens.

### Roteiro Detalhado

**[00:00 - 00:30] Importância de Imagens Otimizadas**
- Imagens pesadas deixam site lento
- Afeta experiência do usuário e SEO
- Vamos aprender a fazer do jeito certo

**[00:30 - 01:30] Formatos Aceitos**
- **JPG:**
  - Melhor para fotos
  - Não suporta transparência
  - Boa compressão
- **PNG:**
  - Melhor para logos e ícones
  - Suporta transparência
  - Arquivos maiores
- **WebP:**
  - Melhor de todos (RECOMENDADO)
  - Menor tamanho com mesma qualidade
  - Suportado por navegadores modernos
- Mostrar exemplos de cada formato

**[01:30 - 02:30] Tamanhos Recomendados**
- Mostrar tabela de tamanhos por seção:
  - Hero Homepage: 1920x1080px
  - Hero Páginas: 1920x600px
  - Logos: 200x100px
  - Fotos Equipe: 400x400px
  - Depoimentos: 200x200px
- Explicar proporções (16:9, 3:2, 1:1)
- Dica: sempre redimensionar ANTES do upload

**[02:30 - 04:00] Como Otimizar Imagens**
- **Demonstração com Squoosh.app:**
  1. Acessar squoosh.app
  2. Arrastar imagem para a página
  3. Mostrar tamanho original (ex: 3MB)
  4. No painel direito:
     - Escolher formato WebP
     - Quality: 80
  5. Usar slider para comparar qualidade
  6. Download da imagem otimizada
  7. Mostrar novo tamanho (ex: 300KB)
- Explicar ganho: mesma qualidade, 90% menor

**[04:00 - 05:00] Upload no Sanity**
- Passo a passo completo:
  1. Método 1: Botão Upload
  2. Método 2: Drag & Drop (arrastar)
  3. Método 3: Selecionar de biblioteca
- **Adicionando Alt Text:**
  - O que é alt text
  - Por que é importante (acessibilidade + SEO)
  - Exemplos de bons alt texts
  - Como preencher no Sanity

**[05:00 - 05:30] Biblioteca de Mídia**
- Mostrar biblioteca quando clica em "Select"
- Explicar que pode reutilizar imagens
- Como deletar imagens não usadas
- Organização de imagens

**[05:30 - 06:00] Problemas Comuns e Soluções**
- Upload falha → imagem muito grande, comprimir
- Imagem não aparece → aguardar cache, recarregar
- Imagem cortada → verificar proporções
- Imagem pixelada → usar qualidade maior no Squoosh

---

## 📹 Vídeo 4: Atualizando Serviços e Depoimentos
**Duração estimada:** 4-5 minutos
**Localização na docs:** `/docs/homepage/servicos` e `/docs/homepage/depoimentos`

### Objetivo
Mostrar como gerenciar cards de serviços e depoimentos de clientes.

### Roteiro Detalhado

**PARTE 1: SERVIÇOS (2 minutos)**

**[00:00 - 00:30] Introdução aos Serviços**
- Localização: Home Page → Services
- São os 3 cards principais: Corporativo, Lazer, Eventos
- Cada um tem título, descrição, link

**[00:30 - 01:30] Editando um Serviço**
1. Expandir seção Services
2. Expandir um serviço (ex: Corporativo)
3. Mostrar campos:
   - Title (título)
   - Description (2-3 frases)
   - Link (para página detalhada)
   - Icon (geralmente não mexer)
4. Fazer edição de exemplo
5. Publicar e verificar

**[01:30 - 02:00] Adicionando Novo Serviço**
- Clicar em "Add item"
- Preencher campos
- Atenção: layout funciona bem com 3-4 serviços
- Mais que isso pode quebrar design

**PARTE 2: DEPOIMENTOS (2-3 minutos)**

**[02:00 - 02:30] Introdução aos Depoimentos**
- Localização: Home Page → Testimonials
- São avaliações de clientes reais
- Aparecem em carrossel no site
- Fundamental para construir confiança

**[02:30 - 03:30] Adicionando Depoimento**
1. Clicar em "Add item" em Testimonials
2. Preencher campos:
   - **Customer Name**: Nome completo
   - **Customer Role**: Cargo (ex: CEO, Diretora de RH)
   - **Company**: Nome da empresa
   - **Testimonial Text**: O feedback (2-4 frases)
   - **Rating**: Número de estrelas (geralmente 5)
3. **Upload da foto:**
   - Clicar em Customer Photo
   - Upload foto 200x200px
   - Preferir foto profissional de rosto
4. Publicar

**[03:30 - 04:00] Reordenando e Removendo**
- **Reordenar:**
  - Usar ícone de arrastar (6 pontinhos)
  - Arrastar para nova posição
  - Mais impactantes no início
- **Remover:**
  - Expandir depoimento
  - Clicar em lixeira
  - Confirmar
  - Publicar

**[04:00 - 04:30] Dicas para Bons Depoimentos**
- Use depoimentos reais (peça permissão!)
- Seja específico (não genérico "Muito bom!")
- Inclua resultados concretos quando possível
- Varie setores e tipos de serviço
- Foto real aumenta credibilidade

**[04:30 - 05:00] Verificando no Site**
- Publicar alterações
- Abrir homepage
- Scroll até seção de depoimentos
- Verificar carrossel funcionando
- Testar em mobile

---

## 📹 Vídeo 5: Configurações Globais - Header e Footer
**Duração estimada:** 5-6 minutos
**Localização na docs:** `/docs/configuracoes-globais`

### Objetivo
Ensinar a editar elementos que aparecem em todas as páginas: menu, rodapé, redes sociais.

### Roteiro Detalhado

**[00:00 - 00:30] O que são Configurações Globais**
- Elementos que aparecem em TODAS as páginas
- Edita uma vez, aplica em todo o site
- Localização: Site Settings no menu lateral
- Muito poder, requer cuidado!

**PARTE 1: HEADER (2-3 minutos)**

**[00:30 - 01:00] Acessando Header**
- Clicar em "Site Settings"
- Localizar "Header Navigation"
- Expandir seção

**[01:00 - 02:00] Editando Menu**
- **Ver menu items existentes:**
  - Mostrar lista de itens
  - Cada um tem Label (texto) e Link (URL)
- **Adicionar item:**
  1. Clicar em "Add item"
  2. Preencher Label (ex: "Contato")
  3. Preencher Link (ex: "/contato")
  4. Publicar
- **Criar dropdown:**
  1. Expandir item do menu
  2. Marcar "Has Dropdown"
  3. Adicionar Dropdown Items
  4. Cada subitem tem Label e Link
  5. Exemplo: Menu "Serviços" com 3 subitens

**[02:00 - 02:30] Editando Telefone do Header**
- Localizar campo "Phone Number"
- Formato: (11) 99999-9999
- Este telefone aparece também em botão de ligação
- Publicar e verificar

**PARTE 2: FOOTER (2-3 minutos)**

**[02:30 - 03:00] Acessando Footer**
- Ainda em Site Settings
- Localizar "Footer Navigation"
- Expandir seção

**[03:00 - 04:00] Gerenciando Links do Rodapé**
- **Footer Menu Items:**
  - Organizados em colunas
  - Cada item: Label + Link
- **Adicionar link:**
  1. Clicar em "Add item"
  2. Label (ex: "Sobre Nós")
  3. Link (ex: "/sobre")
- **Organizar por categoria:**
  - Grupo 1: Institucional
  - Grupo 2: Serviços
  - Grupo 3: Contato
- Reordenar com drag & drop

**[04:00 - 04:45] Redes Sociais**
- Localizar "Social Links"
- **Adicionar rede social:**
  1. Clicar em "Add item"
  2. Platform: escolher (Instagram, Facebook, LinkedIn, etc.)
  3. URL: link completo do perfil
  4. Exemplo: https://www.instagram.com/24hturismo
- Mostrar ícones que aparecem
- Reordenar conforme preferência

**[04:45 - 05:15] Copyright**
- Localizar "Copyright Text"
- Editar texto do copyright
- Exemplo: "© 2024 24H Turismo. Todos os direitos reservados."
- Lembrar de atualizar ano anualmente

**[05:15 - 05:45] Informações de Contato**
- Endereços de escritórios
- Telefones
- E-mails
- Horário de atendimento
- Aparecem no rodapé

**[05:45 - 06:00] Publicando e Testando**
- Clicar em Publish
- Abrir várias páginas do site
- Verificar que header e footer mudaram em TODAS
- Testar links do menu
- Testar ícones de redes sociais

---

## 📹 Vídeo 6: Configurando WhatsApp Flutuante
**Duração estimada:** 2-3 minutos
**Localização na docs:** `/docs/configuracoes-globais/whatsapp`

### Objetivo
Configurar o botão verde do WhatsApp que aparece em todas as páginas.

### Roteiro Detalhado

**[00:00 - 00:20] Introdução**
- Botão verde que fica fixo no canto da tela
- Permite contato direto via WhatsApp
- Vamos configurar número e mensagem padrão

**[00:20 - 00:50] Acessando Configurações**
- Entrar em Site Settings
- Localizar "WhatsApp Settings"
- Expandir seção

**[00:50 - 01:30] Configurando Número**
- Campo "Phone Number"
- **IMPORTANTE: Formato correto**
  - Exemplo: 5511999999999
  - 55 = código Brasil
  - 11 = DDD
  - 999999999 = número
- **APENAS números:**
  - Sem espaços
  - Sem parênteses
  - Sem hífens
  - Sem +
- Mostrar exemplo correto vs incorreto

**[01:30 - 02:15] Mensagem Padrão**
- Campo "Default Message"
- Texto que já vem escrito quando usuário clica
- **Exemplos:**
  - "Olá! Gostaria de saber mais sobre os serviços da 24H Turismo."
  - "Olá! Preciso de uma cotação para viagem corporativa."
  - "Olá! Vi o site e gostaria de mais informações."
- **Dicas:**
  - Seja específico
  - Incentive conversa
  - Opcional: mencione horário atendimento

**[02:15 - 02:45] Texto do Botão**
- Campo "Button Title"
- Texto que aparece ao passar mouse
- Exemplos:
  - "Fale conosco no WhatsApp"
  - "Tire suas dúvidas"
  - "Atendimento pelo WhatsApp"

**[02:45 - 03:00] Testando**
- Publicar alterações
- Abrir qualquer página do site
- Procurar botão verde no canto inferior direito
- Clicar no botão
- Verificar:
  - Abre WhatsApp?
  - Número está correto?
  - Mensagem aparece?
- Testar em mobile também

---

## 📹 Vídeo 7: Editando Outras Páginas (Sobre, Equipe, Eventos)
**Duração estimada:** 4-5 minutos
**Localização na docs:** `/docs/paginas`

### Objetivo
Mostrar como editar páginas internas além da homepage.

### Roteiro Detalhado

**[00:00 - 00:30] Visão Geral**
- Além da homepage, temos várias páginas internas
- Todas seguem estrutura similar
- Vamos ver as principais

**SOBRE (1 minuto)**

**[00:30 - 01:30] Página Sobre**
- Clicar em "Sobre Page"
- Seções disponíveis:
  - Hero (título, imagem)
  - História da empresa
  - Missão e visão
  - Valores (lista)
- Demonstrar edição:
  - Expandir "História"
  - Editar texto
  - Publicar
- Verificar página /sobre

**EQUIPE (1,5 minutos)**

**[01:30 - 03:00] Página Equipe**
- Clicar em "Equipe Page"
- Lista de membros da equipe
- **Adicionar membro:**
  1. Clicar em "Add item"
  2. Campos:
     - Nome
     - Cargo
     - Foto (400x400px)
     - Formação
     - Experiência
     - Especialidades
  3. Upload da foto
  4. Preencher informações
  5. Publicar
- **Remover membro:**
  - Expandir
  - Lixeira
  - Confirmar
- **Reordenar:**
  - Drag & drop
  - Geralmente: mais sênior primeiro

**EVENTOS (1 minuto)**

**[03:00 - 04:00] Página Eventos**
- Clicar em "Eventos Page"
- Seções:
  - Hero
  - Tipos de eventos
  - Eventos próximos
  - Galeria
- Adicionar evento próximo:
  - Nome do evento
  - Data
  - Descrição
  - Local
  - Imagem
  - CTA para inscrição

**DICAS GERAIS (1 minuto)**

**[04:00 - 04:30] Padrões Comuns**
- Todas páginas têm Hero
- Estrutura por seções
- Sempre publicar para aplicar
- Verificar página ao vivo após publicar

**[04:30 - 05:00] Boas Práticas**
- Manter tom de voz consistente
- Usar imagens de qualidade
- Textos em parágrafos curtos
- CTAs claros
- Revisar antes de publicar

---

## 📹 Vídeo 8: Solução de Problemas Comuns
**Duração estimada:** 4-5 minutos
**Localização na docs:** `/docs/solucao-problemas`

### Objetivo
Resolver os problemas mais comuns que os usuários enfrentam.

### Roteiro Detalhado

**[00:00 - 00:20] Introdução**
- Nem sempre tudo sai perfeito
- Vamos ver problemas comuns e como resolver
- Na maioria das vezes, é algo simples!

**PROBLEMA 1: Mudanças não aparecem (1,5 minutos)**

**[00:20 - 01:50]**
- **Sintoma:** Editei mas não mudou no site
- **Causas e soluções:**
  1. **Esqueceu de publicar:**
     - Mostrar botão Publish verde
     - Clicar para publicar
  2. **Cache do navegador:**
     - Explicar o que é cache
     - Ctrl+Shift+R para forçar reload
     - Demonstrar
  3. **Aguardar deployment:**
     - Pode levar 1-2 minutos
     - Ser paciente
- **Demonstração:**
  - Fazer mudança
  - NÃO publicar
  - Mostrar que não aparece
  - Publicar
  - Aguardar
  - Recarregar
  - Mostrar que apareceu

**PROBLEMA 2: Imagem não aparece/upload falha (1,5 minutos)**

**[01:50 - 03:20]**
- **Upload falha:**
  - Causa 1: Imagem muito grande (> 10MB)
    - Solução: Comprimir no Squoosh
    - Mostrar rapidamente
  - Causa 2: Formato errado
    - Usar JPG, PNG ou WebP
  - Causa 3: Internet instável
    - Testar conexão
    - Tentar novamente
- **Imagem não aparece após upload:**
  - Verificar se publicou
  - Limpar cache (Ctrl+Shift+R)
  - Aguardar 1-2 minutos
- **Imagem aparece cortada:**
  - Verificar dimensões corretas
  - Consultar guia de tamanhos
  - Redimensionar e fazer upload novamente

**PROBLEMA 3: Não consigo salvar/publicar (1 minuto)**

**[03:20 - 04:20]**
- **Campos obrigatórios vazios:**
  - Mostrar campo com asterisco (*)
  - Explicar que precisa preencher
  - Demonstrar erro ao tentar publicar
  - Preencher e conseguir publicar
- **Sessão expirada:**
  - Fazer logout e login novamente
  - Copiar conteúdo antes para não perder
- **Erro de validação:**
  - Ler mensagem de erro
  - Corrigir o campo indicado

**PROBLEMA 4: Problemas de performance (0,5 minuto)**

**[04:20 - 04:50]**
- **Sanity lento:**
  - Limpar cache do navegador
  - Fechar abas desnecessárias
  - Atualizar navegador
- **Site lento:**
  - Otimizar imagens
  - Ver guia de otimização
  - Consultar suporte técnico

**[04:50 - 05:00] Quando buscar suporte**
- Se problema persistir
- Anotar mensagem de erro exata
- Tirar screenshot
- Descrever o que estava fazendo
- Enviar para equipe de suporte

**[05:00 - Final] Encerramento**
- Você agora sabe resolver problemas comuns!
- Consulte sempre a documentação
- Na dúvida, suporte está disponível
- Continue explorando e aprendendo!

---

## 📝 Observações Gerais para Gravação

### Preparação

**Antes de gravar:**
- [ ] Limpar histórico do navegador (evitar autocompletes indesejados)
- [ ] Fechar abas desnecessárias
- [ ] Usar dados reais mas não sensíveis
- [ ] Preparar exemplos beforehand
- [ ] Testar áudio e vídeo
- [ ] Fundo neutro e sem distrações
- [ ] Boa iluminação

### Durante a Gravação

**Técnicas:**
- Falar devagar e com clareza
- Pause brevemente entre seções
- Usar zoom quando necessário (mostrar detalhes)
- Destacar cursor (aumentar tamanho ou usar círculo)
- Evite "hmmm", "ahhh", etc.
- Se errar, pause e recomece a frase

**Ferramentas recomendadas:**
- **Screen Recording:**
  - OBS Studio (grátis)
  - Camtasia (pago, mais fácil)
  - Loom (online, fácil)
  - ScreenFlow (Mac)
- **Edição:**
  - DaVinci Resolve (grátis)
  - Camtasia
  - Adobe Premiere
- **Áudio:**
  - Microfone USB (Blue Yeti, etc.)
  - Audacity para edição de áudio

### Pós-Produção

**Edição:**
- Remover pausas longas
- Cortar erros
- Adicionar zoom em detalhes importantes
- Adicionar setas/destaques quando útil
- Música de fundo suave (opcional)
- Intro/outro com logo (opcional)

**Exportação:**
- **Formato:** MP4 (H.264)
- **Resolução:** 1920x1080 (Full HD)
- **Frame rate:** 30fps
- **Bitrate:** 5-8 Mbps
- **Áudio:** AAC, 192kbps

### Hospedagem

**Onde hospedar os vídeos:**
1. **YouTube** (recomendado - grátis, confiável)
   - Criar canal "24H Turismo - Suporte"
   - Uploads ilimitados
   - Pode marcar como "unlisted" (só quem tem link)
2. **Vimeo** (mais profissional, planos pagos)
3. **Wistia** (focado em business, analytics)

**Depois de fazer upload:**
- Copiar URL do vídeo
- Adicionar no componente VideoPlaceholder
- Testar embed na documentação

### Checklist Final

Antes de publicar cada vídeo:
- [ ] Áudio está claro?
- [ ] Vídeo está nítido (Full HD)?
- [ ] Todos os passos foram mostrados?
- [ ] Ritmo está bom (nem rápido nem lento demais)?
- [ ] Sem erros ou informações incorretas?
- [ ] Legendas adicionadas (acessibilidade)?
- [ ] Link funciona na documentação?
- [ ] Testado em diferentes dispositivos?

---

## 🎬 Ordem de Gravação Recomendada

Sugestão de ordem para facilitar a gravação:

1. **Vídeo 1** - Introdução (base para todos outros)
2. **Vídeo 3** - Imagens (usado em vários outros vídeos)
3. **Vídeo 2** - Hero (usa conceitos de 1 e 3)
4. **Vídeo 4** - Serviços e Depoimentos
5. **Vídeo 7** - Outras Páginas
6. **Vídeo 5** - Header e Footer
7. **Vídeo 6** - WhatsApp
8. **Vídeo 8** - Solução de Problemas (resume conceitos)

---

## ✅ Próximos Passos

Após gravar os vídeos:

1. Fazer upload no YouTube/Vimeo
2. Copiar URLs dos vídeos
3. Editar arquivos .mdx correspondentes
4. Adicionar URLs no componente `<VideoPlaceholder>`
5. Testar cada vídeo na documentação
6. Verificar se embed funciona corretamente
7. Compartilhar documentação com cliente

**Exemplo de como adicionar URL:**

```mdx
<VideoPlaceholder
  title="Introdução ao Sanity CMS"
  description="Vídeo de boas-vindas mostrando uma visão geral do sistema"
  videoUrl="https://www.youtube.com/watch?v=ABC123XYZ"
/>
```

Boa gravação! 🎥
