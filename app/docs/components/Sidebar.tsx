'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  pageTree: any[];
}

export function Sidebar({ pageTree }: SidebarProps) {
  const pathname = usePathname();

  console.log('DEBUG pageTree:', pageTree);
  console.log('DEBUG pageTree length:', pageTree?.length || 0);

  if (!pageTree) {
    console.error('pageTree is null or undefined!');
    return <div>Loading sidebar...</div>;
  }

  return (
    <aside className="w-64 border-r bg-white p-6 overflow-y-auto sticky top-0 h-screen">
      <nav className="space-y-6">
        <div>
          <Link
            href="/docs"
            className={`block px-3 py-2 rounded text-sm font-medium transition-colors ${
              pathname === '/docs' || pathname === '/docs/'
                ? 'bg-[#DDB86A]/20 text-[#06060a]'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Início
          </Link>
        </div>

        {pageTree && pageTree.map((section) => {
          const sectionData = section.data as any;

          // Skip root meta.json
          if (section.info.path === 'meta.json') return null;
          if (!sectionData || !sectionData.pages) return null;

          // Extract base path by removing /meta.json from end
          const basePath = section.info.path.replace(/\/meta\.json$/, '');

          return (
            <div key={section.info.path}>
              <h3 className="font-semibold text-sm text-[#06060a] mb-2">
                {sectionData.title}
              </h3>
              <ul className="space-y-1">
                {sectionData.pages.map((page: string) => {
                  const isIndex = page === 'index';
                  const pagePath = isIndex
                    ? `/docs/${basePath}`
                    : `/docs/${basePath}/${page}`;

                  const isActive = pathname === pagePath || pathname === `${pagePath}/`;

                  return (
                    <li key={page}>
                      <Link
                        href={pagePath}
                        className={`block px-3 py-1.5 rounded text-sm transition-colors ${
                          isActive
                            ? 'bg-[#DDB86A]/20 text-[#06060a] font-medium'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {getPageTitle(basePath, page)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

function getPageTitle(basePath: string, page: string): string {
  const titles: Record<string, string> = {
    index: 'Visão Geral',
    'acesso-sanity': 'Acesso ao Sanity',
    'navegacao-interface': 'Navegação',
    hero: 'Hero Section',
    metricas: 'Métricas',
    servicos: 'Serviços',
    clientes: 'Clientes',
    depoimentos: 'Depoimentos',
    contato: 'Contato',
    header: 'Header',
    footer: 'Footer',
    whatsapp: 'WhatsApp',
    upload: 'Upload',
    tamanhos: 'Tamanhos',
    otimizacao: 'Otimização',
  };
  return titles[page] || page;
}