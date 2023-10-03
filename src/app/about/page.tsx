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
            <span className={styles.date}> September, 08 2023 | 19:09 </span>
            <p className={styles.text}>
                        Hey there! I&apos;m <span>Thiago Campos</span>, a software engineer based in <span>Brazil</span>.
                        Currently, I&apos;m working as a React Developer at Pride Innovations, where I&apos;m deeply involved in crafting in-house systems.
                        All my devices are powered by Linux, from my Android smartphone to Fedora running on my home server, desktop, and laptop.
            </p>
            <br/><br/>
            <p className={styles.text}>
                        Besides coding, I&apos;m a design enthusiast, primarily inspired by fashion and architecture. 
                        While savoring a good home-brewed coffee, you&apos;ll often find me immersed in the smooth rhythms of Bossa Nova and Jazz. 
                        Feel free to check out some of my Spotify playlists filled with handpicked treasures.
            </p>
            <br/><br/>
            <br/><br/>
            <p className={styles.text}>
                        Beyond the screen, you&apos;ll find me watching movies, cooking up some pasta, or embarking on new adventures. 
                        I&apos;ve had the privilege of exploring various Brazilian cities, each with its unique charm and culture. 
                        Additionally, I&apos;ve ventured beyond my homeland, visiting captivating countries in Europe like Spain, France, 
                        Italy and Monaco, which have enriched my life with diverse experiences and cultural insights.
            </p>
            <br/>
            <div className={styles.photosWrapper}>
              { renderImages() }
            </div>
            <br/>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}