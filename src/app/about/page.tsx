import styles from './about.module.css';
import { Anchor, Footer, Header } from '@/components';
import { aboutNavigation } from '@/constants/navigations';
import Image from 'next/image';
import Riviera from '../../../public/about/Riviera.jpg';
import Lazio from '../../../public/about/Lazio.jpg';
import Serra from '../../../public/about/Serra.jpg';
import Sampa from '../../../public/about/Sampa.jpg';

export default function Home() {
    return (
      <main className={styles.main}>
        <div className={styles.highlight}>
          <Header navGroup={aboutNavigation}/>
          <section>
            <div className={styles.content}>
              <span className={styles.date}>September, 08 2023 | 19:09</span>
                <p className={styles.text}>
                  Hey there! 👋 I&apos;m <span>Thiago Campos</span>, a software engineer based in <span>Brazil</span> 🇧🇷. 
                  Currently, I&apos;m working as a React Developer at Pride Innovations, where I&apos;m deeply involved in crafting in-house systems. 
                  All my devices are powered by Linux, from my Android smartphone to Fedora running on my home server, desktop, and laptop.
                </p>
                <br/><br/>
                {/* ADD LINKS TO GITHUB AND SIDE-PROJECTS */}
                <br/>
                <p className={styles.text}>
                  Besides coding, I&apos;m a design enthusiast, primarily inspired by <span>fashion</span> and <span>architecture</span>. 
                  While savoring a good <span>home-brewed coffee</span>, you&apos;ll often find me immersed in the smooth rhythms of <span>Bossa Nova</span> and <span>Jazz</span>. 
                  Feel free to check out some of my Spotify playlists filled with handpicked treasures.
                </p>
                <br/><br/>
                <div className={styles.spotifyWrapper}>
                  <iframe title='Spotify Playlist Café e Bossa' className={styles.spotify} src="https://open.spotify.com/embed/playlist/6unyax6qQyhunvOd2QOAzB?utm_source=generator&theme=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                  <iframe title='Spotify Playlist Jazz and Cigar' className={styles.spotify} src="https://open.spotify.com/embed/playlist/2mau9BQ3cVx7cyKcrGmoSr?utm_source=generator&theme=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                <br/><br/>
                <p className={styles.text}>
                  Beyond the screen, you&apos;ll find me watching movies, <span>cooking up some pasta</span>, or embarking on new adventures. 
                  I&apos;ve had the privilege of exploring various <span>Brazilian cities</span>, each with its unique charm and culture. 
                  Additionally, I&apos;ve ventured beyond my homeland, visiting captivating countries in Europe like <span>Spain, France, 
                  Italy and Monaco</span>, which have enriched my life with diverse experiences and cultural insights.
                </p>
                <br/>
                <div className={styles.photosWrapper}>
                  <Image className={styles.photo} src={Riviera} alt='Photo of a random building in French Riviera in my Summer Euro trip in 2022' />
                  <Image className={styles.photo} src={Lazio} alt='Photo of the Coliseo in Rome in my Summer Euro trip in 2022' />
                  <Image className={styles.photo} src={Serra} alt='Photo of me and my girlfriend in Serra Negra' />
                  <Image className={styles.photo} src={Sampa} alt='Photo of Estação da Luz in São Paulo' />
                </div>
                {/* ADD PHOTOS */}
                <br/>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    )
  }