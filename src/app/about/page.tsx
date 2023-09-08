import styles from './about.module.css'
import { Anchor, Footer, Header } from '@/components'
import { aboutNavigation } from '@/constants/navigations'

export default function Home() {
    return (
      <main className={styles.main}>
        <div className={styles.highlight}>
          <Header navGroup={aboutNavigation}/>
          <section>
            <div className={styles.content}>
              <span className={styles.date}>February, 11 2023 | 16:14</span>
                <p className={styles.text}>
                  Hey there! 👋 I'm <span>Thiago Campos</span>, a software engineer based in <span>Brazil</span> 🇧🇷. 
                  Currently, I'm working as a React Developer at <span>Pride Innovations</span>, where I'm deeply involved in crafting in-house systems. 
                  All my devices are powered by Linux, from my Android smartphone to Fedora running on my home server, desktop, and laptop.
                </p>
                <br/><br/>
                <Anchor path="https://github.com/thigcampos" arial-label="Follow me on GitHub">Check out my GitHub</Anchor>
                {/* ADD LINKS TO GITHUB AND SIDE-PROJECTS */}
                <br/>
                <p className={styles.text}>
                  Besides coding, I'm a design enthusiast, primarily inspired by <span>fashion</span> and <span>architecture</span>. 
                  While savoring a good <span>home-brewed coffee</span>, you'll often find me immersed in the smooth rhythms of <span>Bossa Nova</span> and <span>Jazz</span>. 
                  Feel free to check out some of my Spotify playlists filled with handpicked treasures.
                </p>
                <br/><br/>
                <iframe className={styles.spotify} src="https://open.spotify.com/embed/playlist/6unyax6qQyhunvOd2QOAzB?utm_source=generator&theme=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <br/><br/>
                <p className={styles.text}>
                  Beyond the screen, you'll find me watching movies, <span>cooking up some pasta</span>, or embarking on new adventures. 
                  I've had the privilege of exploring various Brazilian cities, each with its unique charm and culture. 
                  Additionally, I've ventured beyond my homeland, visiting captivating countries in Europe like <span>Spain, France, 
                  Italy and Monaco</span>, which have enriched my life with diverse experiences and cultural insights.
                </p>
                <br/>
                {/* ADD PHOTOS */}
                <br/>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    )
  }