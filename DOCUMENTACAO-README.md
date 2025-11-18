# Documentação Sanity CMS - 24H Turismo

Este projeto agora inclui uma documentação completa integrada para o cliente gerenciar o conteúdo do site através do Sanity CMS.

## 📚 Acessando a Documentação

A documentação está disponível em:
```
http://localhost:3000/docs (desenvolvimento)
https://seusite.com/docs (produção)
```

## 🎯 O que está documentado

### 1. Introdução
- Como acessar o Sanity Studio
- Tour pela interface
- Conceitos básicos (publicar, rascunhos, etc.)

### 2. Homepage
- Hero Section (título, imagem de fundo, CTA)
- Métricas e números
- Serviços
- Clientes
- Depoimentos
- Formulário de contato

### 3. Configurações Globais
- Menu de navegação (Header)
- Rodapé (Footer)
- Botão WhatsApp flutuante
- Informações de contato

### 4. Gerenciamento de Imagens
- Como fazer upload
- Tamanhos recomendados por seção
- Otimização (com ferramentas como Squoosh)
- Formatos aceitos

### 5. Páginas do Site
- Sobre
- Equipe
- Eventos
- Lazer
- CBENF
- Trabalhe Conosco

### 6. Solução de Problemas
- Mudanças não aparecem
- Problemas com imagens
- Erros ao salvar
- Performance

## 🎥 Vídeos Explicativos

A documentação inclui placeholders para 8 vídeos tutoriais:

1. **Introdução ao Sanity CMS** (5-7 min)
2. **Editando a Homepage - Hero** (3-5 min)
3. **Gerenciando Imagens** (4-6 min)
4. **Serviços e Depoimentos** (4-5 min)
5. **Configurações Globais - Header e Footer** (5-6 min)
6. **Configurando WhatsApp** (2-3 min)
7. **Editando Outras Páginas** (4-5 min)
8. **Solução de Problemas** (4-5 min)

**Roteiro completo:** Ver arquivo `ROTEIRO-VIDEOS.md` na raiz do projeto.

## 🛠️ Tecnologias Usadas

- **Fumadocs**: Sistema de documentação
- **MDX**: Markdown com componentes React
- **Next.js 15**: Framework base
- **Tailwind CSS**: Estilização
- **TypeScript**: Type safety

## 📝 Estrutura de Arquivos

```
/content/docs/               # Arquivos MDX da documentação
├── introducao/
│   ├── index.mdx
│   ├── acesso-sanity.mdx
│   └── navegacao-interface.mdx
├── homepage/
│   ├── index.mdx
│   ├── hero.mdx
│   ├── metricas.mdx
│   ├── servicos.mdx
│   ├── depoimentos.mdx
│   ├── clientes.mdx
│   └── contato.mdx
├── configuracoes-globais/
│   ├── index.mdx
│   ├── header.mdx
│   ├── footer.mdx
│   └── whatsapp.mdx
├── imagens/
│   ├── index.mdx
│   ├── upload.mdx
│   ├── tamanhos.mdx
│   └── otimizacao.mdx
├── paginas/
│   └── index.mdx
└── solucao-problemas/
    └── index.mdx

/components/docs/            # Componentes customizados
├── VideoPlaceholder.tsx     # Placeholder para vídeos
├── FieldReference.tsx       # Tabelas de campos
├── StepByStep.tsx          # Guias passo a passo
├── ImageExample.tsx        # Exemplos de imagens
└── Callout.tsx             # Avisos e alertas

/app/docs/                   # Rotas do Next.js
├── layout.tsx              # Layout da documentação
├── page.tsx                # Página inicial /docs
└── [[...slug]]/
    └── page.tsx            # Páginas dinâmicas
```

## 🎨 Componentes Customizados

### VideoPlaceholder
Mostra placeholder ou embed de vídeo do YouTube/Vimeo.

```mdx
<VideoPlaceholder
  title="Título do vídeo"
  description="Descrição breve"
  videoUrl="https://youtube.com/watch?v=..."  // Opcional
/>
```

### Callout
Avisos destacados (info, warning, error, success).

```mdx
<Callout type="warning" title="Atenção">
Este é um aviso importante!
</Callout>
```

### StepByStep
Guias passo a passo numerados.

```mdx
<StepByStep>
1. Primeiro passo
2. Segundo passo
3. Terceiro passo
</StepByStep>
```

### FieldReference
Tabelas de referência de campos.

```mdx
<FieldReference>
| Campo | Tipo | Descrição |
|-------|------|-----------|
| Title | Text | Título da seção |
</FieldReference>
```

## 🚀 Desenvolvimento

### Rodar localmente

```bash
npm run dev
```

Acesse http://localhost:3000/docs

### Build

```bash
npm run build
```

Isso irá:
1. Gerar o mapa de documentação (`.map`)
2. Compilar o Next.js com MDX

### Adicionar nova página

1. Crie arquivo `.mdx` em `/content/docs/[secao]/`
2. Adicione frontmatter:
```mdx
---
title: Título da Página
description: Descrição breve
---

# Conteúdo aqui
```

3. Adicione à `meta.json` da seção:
```json
{
  "pages": ["index", "nova-pagina"]
}
```

4. Rode `npx fumadocs-mdx` para regenerar o mapa

## 🎬 Adicionando Vídeos

Quando os vídeos estiverem prontos:

1. Faça upload no YouTube ou Vimeo
2. Copie a URL do vídeo
3. Edite o arquivo `.mdx` correspondente
4. Adicione a URL no VideoPlaceholder:

```mdx
<VideoPlaceholder
  title="Título do vídeo"
  description="Descrição"
  videoUrl="https://www.youtube.com/watch?v=ABC123"
/>
```

O componente detecta automaticamente se é YouTube ou Vimeo e cria o embed adequado.

## 🎨 Personalização

### Cores da Marca

As cores da 24H Turismo estão configuradas em `tailwind.config.ts`:

```ts
colors: {
  primary: {
    DEFAULT: '#DDB86A',  // Dourado
    dark: '#c9a558',     // Dourado escuro
  },
  dark: {
    DEFAULT: '#06060a',  // Preto
  },
}
```

### Tema do Fumadocs

Configurado em `/app/docs/layout.tsx` com:
- Logo e título customizados
- Links para Sanity Studio e site principal
- Banner destacado na sidebar
- Cores da marca

## 📊 Analytics (Opcional)

Para rastrear visualizações da documentação, você pode adicionar:

1. Google Analytics
2. Plausible
3. Fathom

Configure em `app/docs/layout.tsx`.

## 🔍 SEO

Cada página tem metadata configurada:

```ts
export async function generateMetadata({ params }) {
  return {
    title: page.data.title,
    description: page.data.description,
  };
}
```

## 📱 Responsividade

A documentação é totalmente responsiva e funciona bem em:
- Desktop
- Tablet
- Mobile

Testado em Chrome, Firefox, Safari e Edge.

## 🆘 Suporte

Se encontrar problemas:

1. Verifique o console do navegador (F12)
2. Verifique os logs do Next.js no terminal
3. Consulte [Fumadocs Docs](https://fumadocs.vercel.app)
4. Entre em contato com o desenvolvedor

## 📄 Licença

Este projeto é propriedade da 24H Turismo. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para facilitar o gerenciamento do site 24H Turismo**
