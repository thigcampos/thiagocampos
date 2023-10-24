import styles from './blog.module.css';
import { Footer, Header } from '@/components';
import { blogNavigation } from '@/constants/navigations';
import Articles from '@/components/Articles';

export default function Blog() {
  return (
    <main className={styles.main}>
      <div className={styles.highlight}>
        <Header navGroup={blogNavigation}/>
        <section>
          <h1 className={styles.title}>
            Blog
          </h1>
          <Articles />
        </section>
      </div>
      <Footer />
    </main>
  );
}