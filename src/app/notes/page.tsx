import styles from './notes.module.css';
import { Footer, Header } from '@/components';
import { notesNavigation, pageTitle } from '@/constants/navigations';
import Articles from '@/components/Articles';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: pageTitle.notes
};

export default function Notes() {
  return (
    <main className={styles.main}>
      <div className={styles.highlight}>
        <Header navGroup={notesNavigation}/>
        <section>
          <h1 className={styles.title}>
            Notes
          </h1>
          <Articles />
        </section>
      </div>
      <Footer />
    </main>
  );
}