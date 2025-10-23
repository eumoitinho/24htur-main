import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'kyx4ncqy',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);

export const getDocuments = async (type: string, slug?: string) => {
  const query = slug 
    ? `*[_type == "${type}" && slug.current == "${slug}"][0]`
    : `*[_type == "${type}"]`;
  return await client.fetch(query);
};