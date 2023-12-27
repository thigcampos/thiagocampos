import styles from './blog.module.css';
import { Footer, Header } from '@/components';
import { blogNavigation, pageTitle } from '@/constants/navigations';
import Articles from '@/components/Articles';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: pageTitle.blog
};

export default function Blog() {
  return (
    <main className={styles.main}>
      <div className={styles.highlight}>
        <Header navGroup={blogNavigation}/>
        <section>
          <h1 className={styles.title}>
            Escritos
          </h1>
          <Articles language='portuguese'/>
        </section>
      </div>
      <Footer />
    </main>
  );
}