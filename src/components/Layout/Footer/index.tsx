import Icon from '@mdi/react';
import { mdiAt, mdiGithub, mdiInstagram, mdiMastodon, mdiRss, mdiSpotify } from '@mdi/js';
import styles from './footer.module.css';


export default function Footer() {
  return (
    <section className={styles.container}>
      <div className={styles.iconsFooter}>
        <a href="mailto:thigcampos@proton.me" target="_blank" aria-label="Send me an email" rel="noreferrer">
          <Icon path={mdiAt}/>
        </a>
        <a href="https://github.com/thigcampos" target="_blank" aria-label="Follow me on GitHub" rel="noreferrer"> 
          <Icon path={mdiGithub}/>
        </a>
        <a href="https://open.spotify.com/user/f2qveuaxz5vf7glg8821ot1x7" target="_blank" aria-label="Follow me on Spotify" rel="noreferrer">
          <Icon path={mdiSpotify}/>
        </a>
        <a rel="me" href="https://bolha.us/@thigcampos" aria-label="Follow me on Mastodon">
          <Icon path={mdiMastodon}/>
        </a>
        <a href="https://instagram.com/thigcampos" target="_blank" aria-label="Follow me on Instagram" rel="noreferrer">
          <Icon path={mdiInstagram}/>
        </a>
        <a href="/feed.xml" target="_blank" aria-label="Subscrive to my RSS Feed" rel="noreferrer">
          <Icon path={mdiRss}/>
        </a>
      </div>
    </section>
  );
}