import styles from './home.module.css'
import Icon from '@mdi/react';
import { mdiSonyPlaystation, mdiAt, mdiGitlab, mdiInstagram } from '@mdi/js'

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <div className={styles.headerButtons}>
          {/* ICONS */}
        </div>
      </section>
      <section>
        <div className={styles.headline}>
          <h1 className={styles.title}>Salut, je suis <span>Thiago Campos</span> — <br/>
          a software engineer based in Brazil 🇧🇷</h1>
          <p className={styles.subtitle}>Check some my <a href='/blog'>[ blog ]</a> and some cool facts <a href='/about'>[ about me ]</a></p>
        </div>
      </section>
      <section>
        <div className={styles.iconsFooter}>
          <Icon path={mdiSonyPlaystation}/>
          <Icon path={mdiAt}/>
          <Icon path={mdiGitlab}/>
          <Icon path={mdiInstagram}/>
        </div>
      </section>
    </main>
  )
}

