import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** Published posts (drafts are visible only in `astro dev`), newest first. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const tagSlug = (t: string) => t.trim().toLowerCase().replace(/\s+/g, '-');

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit', timeZone: 'UTC' });

export const url = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
