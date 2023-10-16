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
            <span className={styles.date}> October, 16 2023 | 16:05 </span>
            <p className={styles.text}>
              Salut! I&apos;m Thiago Campos, a software engineer based in Brazil. 
              Currently, I&apos;m working as a Front-end Developer, maintaining 
              and improving in-house systems at Pride Innovations.
            </p>
            <br/><br/>
            <p className={styles.text}>
              Since I was a child, my skills and interests have led me to the 
              intersection between humanities and sciences. This affinity is 
              likely the driving force behind my deep fascination with 
              technology. Now, I aim to draw on the creativity that emerges 
              from this intersection to craft truly splendid things.
            </p>
            <br/><br/>
            <p className={styles.text}>
              Despite loving technology, most of my other interests reflects my 
              taste for humanities. I have a deep appreciation for design, 
              especially fashion and architecture. Music, side-by-side with 
              History, Cinematography, and Literature, are other major personal passions.
            </p>
            <br/><br/>
            <div className={styles.photosWrapper}>
              { renderImages() }
            </div>
            <br/><br/>
            <p className={styles.text}>
              I intend to learn as much as possible, explore diverse cultures, and 
              craft truly special things that are worth being proud of, hoping to 
              be on the right path to build a legacy as a creative craftsman and 
              complete artist, influenced by each piece of knowledge acquired throughout my life.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}