import { Metadata } from 'next';
import Image from 'next/image';
import { Footer, Header } from '@/components';
import { aboutNavigation } from '@/constants/navigations';
import aboutImages from '@/constants/images';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'Salut! Je suis Thiago'
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
              Olá! Eu sou Thiago Campos, um engenheiro de software baseado no Brasil. 
              Atualmente, eu estou trabalhando como um Desenvolvedor Front-end, mantendo 
              e melhorando sistemas internos na Pride Innovations.
            </p>
            <br/><br/>
            <p className={styles.text}>
              Desde a infância, minhas habilidades e interesses me levaram a
              intersecção entre as humanidades e as ciências. Essa afinidade é
              possivelmente a principal força por trás da minha profunda fascinação
              com tecnologia. Agora, eu pretendo beneficiar-me da critatividade que 
              emerge da intersecção para criar coisas verdadeiramente esplêndidas.
            </p>
            <br/><br/>
            <p className={styles.text}>
              Apesar de amar tecnologia, grande parte dos meus outros interesses e
              passatempos refletem o meu gosto por humanidades. Eu tenho uma profunda
              paixão por design, especialmente os segmentos de produtos e arquitetura. 
              Música, lado a lado com História, Cinematografia e Literatura, são os meus
              principais interesses.
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