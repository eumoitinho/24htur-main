import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import 'fumadocs-ui/style.css';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">24H Turismo</span>
            <span className="text-sm text-muted-foreground">Documentação</span>
          </div>
        ),
        url: '/docs',
      }}
      links={[
        {
          text: 'Acessar Sanity Studio',
          url: '/studio',
          icon: <span>📝</span>,
        },
        {
          text: 'Voltar ao Site',
          url: '/',
          icon: <span>🏠</span>,
        },
      ]}
      sidebar={{
        defaultOpenLevel: 0,
        banner: (
          <div className="bg-gradient-to-r from-[#DDB86A] to-[#c9a558] text-[#06060a] p-4 rounded-lg mb-4">
            <p className="font-semibold text-sm">
              📚 Guia completo para gerenciar seu site
            </p>
            <p className="text-xs mt-1 opacity-90">
              Aprenda a atualizar conteúdo, imagens e configurações
            </p>
          </div>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
