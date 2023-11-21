import { Anchor, Footer, Header } from '@/components';
import { homeNavigation } from '@/constants/navigations';
import styles from './home.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header navGroup={homeNavigation} hideDesktop/>
      <section>
        <div className={styles.headline}>
          <h1 className={styles.title}>Olá, eu sou <span>Thiago Campos</span> — <br/>
          engenheiro de software baseado no Brasil</h1>
          <div className={styles.buttonWrapper}>
            <Anchor path={'/blog'}>Blogue pessoal</Anchor>
            {/* <Anchor path={'/projects'}>Selected work</Anchor> */}
            <Anchor path={'/about'}>Fatos sobre mim</Anchor>
            <Anchor path={'mailto:ola@thigcampos'} variant={'outline'}>ola@thigcampos.com</Anchor>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

