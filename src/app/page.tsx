import { Anchor, Footer, Header } from '@/components';
import { homeNavigation } from '@/constants/navigations';
import styles from './home.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header navGroup={homeNavigation} hideDesktop/>
      <section>
        <div className={styles.headline}>
          <h1 className={styles.title}>Salut, je suis <span>Thiago Campos</span> — <br/>
          a software engineer based in Brazil</h1>
          <div className={styles.buttonWrapper}>
            <Anchor path={'/blog'}>Personal blog</Anchor>
            <Anchor path={'/projects'}>Selected work</Anchor>
            <Anchor path={'/blog'}>Facts about me</Anchor>
            <Anchor path={'/blog'} variant={'outline'}>salut@thigcampos.com</Anchor>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

