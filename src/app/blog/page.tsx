import { compareDesc } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { Footer, Header, PostCard } from '@/components';
import { blogNavigation } from '@/constants/navigations';
import Icon from '@mdi/react';
import { mdiRss } from '@mdi/js';
import styles from './blog.module.css';
import Link from 'next/link';

export default function Blog() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  return (
    <main className={styles.main}>
      <div className={styles.highlight}>
        <Header navGroup={blogNavigation}/>
        <section>
          <h1 className={styles.title}>
            <span>Iukeri Blog</span>
            <Link href='/feed.xml' target='_blank' className={styles.rss}>
              <Icon path={mdiRss} />
            </Link>
          </h1>
          <div className={styles.postsWrapper}>
            {posts.map((post, idx) => (
              <PostCard key={idx} {...post} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}