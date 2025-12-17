import { docs, meta } from '@/.source';

export const source = {
  getPage(slugs?: string[]) {
    // If no slug or empty array, we're looking for the index page
    if (!slugs || slugs.length === 0) {
      return docs.find((doc) => doc.info.path === 'index.mdx');
    }

    // Join the slugs and add .mdx extension to match fumadocs paths
    const targetPath = `${slugs.join('/')}.mdx`;
    return docs.find((doc) => doc.info.path === targetPath);
  },
  generateParams() {
    return docs.map((doc) => {
      const path = doc.info.path.replace('.mdx', '');
      return {
        slug: path === 'index' ? [] : path.split('/'),
      };
    });
  },
  pageTree: meta,
};
