import styles from './portfolio.module.css';
import { Footer, Header } from '@/components';
import { pageTitle, portfolioNavigation } from '@/constants/navigations';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: pageTitle.portfolio
};

export default function Portfolio () {
  return (
    <main className={styles.main}>
      <div className={styles.highlight}>
        <Header navGroup={portfolioNavigation}/>
        <section>
          <h1 className={styles.title}>
            Portfólio
          </h1>
          <p className={styles.subtitle}>
            Seleta lista de projetos pessoais
          </p>
          {/* <Projects /> */}
        </section>
      </div>
      <Footer />
    </main>
  );
}