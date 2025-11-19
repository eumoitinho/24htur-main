import type { ReactNode } from 'react';
import Link from 'next/link';
import { Sidebar } from './components/Sidebar';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  // Force serialize the entire pageTree to break the proxy chain
  const pageTreeData = JSON.parse(JSON.stringify(source.pageTree));

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b sticky top-0 bg-white z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">24H Turismo</span>
              <span className="text-sm text-gray-600">Documentação</span>
            </div>
            <div className="flex gap-4">
              <Link href="/studio" className="text-sm hover:underline">Sanity Studio</Link>
              <Link href="/" className="text-sm hover:underline">Voltar ao Site</Link>
            </div>
          </div>
        </div>
      </header>
      <div className="flex">
        <Sidebar pageTree={pageTreeData} />
        <main className="flex-1 px-8 py-8 max-w-4xl">
          <div className="bg-gradient-to-r from-[#DDB86A] to-[#c9a558] text-[#06060a] p-4 rounded-lg mb-8">
            <p className="font-semibold text-sm">Guia completo para gerenciar seu site</p>
            <p className="text-xs mt-1 opacity-90">Aprenda a atualizar conteúdo, imagens e configurações</p>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
} 
