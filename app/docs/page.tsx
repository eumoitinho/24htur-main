import Link from 'next/link';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { BookOpen, Settings, Image, FileText, AlertCircle, Video } from 'lucide-react';

export default function DocsHomePage() {
  return (
    <div className="flex flex-col gap-8 py-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">
          Bem-vindo à Documentação 24H Turismo
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Este guia foi criado para ajudá-lo a gerenciar todo o conteúdo do seu site de forma simples e eficiente.
          Aqui você encontrará instruções passo a passo para atualizar textos, imagens, serviços e muito mais.
        </p>
      </div>

      <div className="bg-[#DDB86A]/10 border border-[#DDB86A]/30 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <Video className="w-5 h-5 text-[#DDB86A]" />
          Vídeos Explicativos
        </h2>
        <p className="text-sm text-muted-foreground">
          Ao longo desta documentação você encontrará espaços reservados para vídeos tutoriais que demonstram
          cada processo visualmente. Estes vídeos serão adicionados em breve para facilitar ainda mais seu aprendizado.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Começar Agora</h2>
        <Cards>
          <Card
            icon={<BookOpen />}
            title="Introdução"
            description="Conheça a interface do Sanity CMS e aprenda a navegar pelo painel administrativo"
            href="/docs/introducao"
          />
          <Card
            icon={<FileText />}
            title="Homepage"
            description="Edite as seções da página inicial: hero, serviços, depoimentos e mais"
            href="/docs/homepage"
          />
          <Card
            icon={<Settings />}
            title="Configurações Globais"
            description="Gerencie menu, rodapé, redes sociais e WhatsApp em todo o site"
            href="/docs/configuracoes-globais"
          />
          <Card
            icon={<Image />}
            title="Gerenciar Imagens"
            description="Aprenda a fazer upload, otimizar e substituir imagens no site"
            href="/docs/imagens"
          />
        </Cards>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Recursos Adicionais</h2>
        <Cards>
          <Card
            icon={<FileText />}
            title="Páginas do Site"
            description="Edite conteúdo das páginas Sobre, Equipe, Eventos e Lazer"
            href="/docs/paginas"
          />
          <Card
            icon={<AlertCircle />}
            title="Solução de Problemas"
            description="Respostas para problemas comuns e como resolvê-los"
            href="/docs/solucao-problemas"
          />
        </Cards>
      </div>

      <div className="bg-muted/50 border rounded-lg p-6 space-y-3">
        <h3 className="text-lg font-semibold">🚀 Acesso Rápido</h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/studio"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#DDB86A] hover:bg-[#c9a558] text-[#06060a] font-semibold rounded-lg transition-colors"
          >
            Abrir Sanity Studio →
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border hover:bg-muted font-semibold rounded-lg transition-colors"
          >
            Ver Site ao Vivo →
          </Link>
        </div>
      </div>

      <div className="prose prose-sm max-w-none">
        <h3>💡 Dica Importante</h3>
        <p>
          Sempre que fizer alterações no Sanity Studio, lembre-se de clicar no botão <strong>"Publish"</strong> (Publicar)
          no canto superior direito para que as mudanças apareçam no site. Mudanças não publicadas ficam salvas como rascunho.
        </p>
      </div>
    </div>
  );
}
