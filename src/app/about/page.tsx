import { Metadata } from 'next';
import Image from 'next/image';
import { Footer, Header } from '@/components';
import { aboutNavigation, pageTitle } from '@/constants/navigations';
import aboutImages from '@/constants/images';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: pageTitle.about
};

export default function About() {
  const renderImages = () => aboutImages.map((image, idx) => (
    <Image className={styles.photo} key={idx} src={image.url} alt={image.alt} loading='lazy' />
  ));

  return (
    <main className={styles.main}>
      <div className={styles.highlight}>
        <Header navGroup={aboutNavigation}/>
        <section>
          <div className={styles.content}>
            <span className={styles.date}> 16 de Novembro de 2023 | 16:05 </span>
            <p className={styles.text}>
              Olá! Eu sou Thiago Campos, um engenheiro de software sediado no Brasil. 
              Atualmente, eu atuo como um Desenvolvedor Front-end, mantendo 
              e melhorando sistemas internos na Pride Innovations.
            </p>
            <br/><br/>
            <p className={styles.text}>
              Desde a infância, minhas habilidades e interesses me levaram a estar na
              intersecção entre as humanidades e as exatas. Essa afinidade mostra-se
              ser a principal força por trás do meu grande fascínio pela tecnologia.
              Eu pretendo beneficiar-me da critatividade que emerge de tal intersecção 
              para criar produtos verdadeiramente esplêndidos.
            </p>
            <br/><br/>
            <p className={styles.text}>
              Apesar de adorar tecnologia, a maior parte dos meus interesses e passatempos
              refletem o meu gosto por humanidades. Sou apaixonado por design, especialmente 
              os segmentos de produtos e arquitetura. Música, lado a lado com História, 
              Cinematografia e Literatura, são outros dos meus principais interesses.
            </p>
            <br/><br/>
            <div className={styles.photosWrapper}>
              { renderImages() }
            </div>
            <br/><br/>
            <p className={styles.text}>
              Eu pretendo aprender o máximo possível, explorar diversas culturas e 
              criar itens verdadeiramente especial que eu possa me orgulhar, esperando
              estar no caminho certo para criar um legado como um criador criativo e um
              artista completo, influenciado por cada pedaço de conhecimento adquirido
              ao longo da minha vida.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}