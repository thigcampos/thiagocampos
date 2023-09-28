import { Footer, Header } from '@/components';
import { blogNavigation } from '@/constants/navigations';
import Icon from '@mdi/react';
import { mdiRss } from '@mdi/js';
import styles from './blog.module.css';
import Link from 'next/link';
import ListPosts from '@/components/ListPosts';

export default function Blog() {
  return (
    <main className={styles.main}>
      <div className={styles.highlight}>
        <Header navGroup={blogNavigation}/>
        <section>
          <h1 className={styles.title}>
            <span>Iukeri Blog</span>
          </h1>
          <ListPosts />
        </section>
      </div>
      <Footer />
    </main>
  );
}