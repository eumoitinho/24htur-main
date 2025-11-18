import { source } from '@/lib/source';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();

  const Content = page.body;

  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-3xl font-bold mb-2">{page.title}</h1>
      {page.description && (
        <p className="text-gray-600 mb-8">{page.description}</p>
      )}
      <Content />
    </article>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();

  return {
    title: page.title || 'Documentação',
    description: page.description || '',
  };
}
