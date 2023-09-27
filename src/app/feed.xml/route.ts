import Rss from 'rss';
import { metadata } from '@/config/metadata';
import { Author } from 'next/dist/lib/metadata/types/metadata-types';
import { allPosts } from 'contentlayer/generated';
 
export async function GET() {
  const feed = new Rss({
    title: `${metadata.title}`,
    description: `${metadata.description}`,
    feed_url: `${(metadata?.authors as Author).url}/feed.xml`,
    site_url: `${(metadata?.authors as Author).url}`,
    webMaster: `${(metadata?.authors as Author).name}`,
    managingEditor: `${(metadata?.authors as Author).name}`,
    language: 'en-US',
  })

  allPosts.forEach((article) => {
    const author = (metadata?.authors as Author).name
    feed.item({
      title: article.title,
      description: article.description ?? '',
      url: `${(metadata?.authors as Author).url}${article.url}`,
      guid: `${(metadata?.authors as Author).url}${article.url}`,
      date: article.date,
      author: `${author}`,
    })
  })

  return new Response(feed.xml(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}

