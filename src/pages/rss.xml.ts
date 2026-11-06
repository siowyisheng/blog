import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../lib';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      link: `${import.meta.env.BASE_URL}/${p.id}/`.replace(/\/\//g, '/'),
      categories: p.data.tags,
    })),
  });
}
