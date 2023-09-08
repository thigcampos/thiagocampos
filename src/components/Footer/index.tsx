import Icon from "@mdi/react";
import styles from "./footer.module.css"
import { mdiAt, mdiGithub, mdiInstagram, mdiPinterest, mdiReddit, mdiSpotify } from "@mdi/js";


export default function Footer() {
    return (
    <section className={styles.container}>
        <div className={styles.iconsFooter}>
          <a href="mailto:thigcampos@proton.me" target="_blank" aria-label="Send me an email">
            <Icon path={mdiAt}/>
          </a>
          <a href="https://github.com/thigcampos" target="_blank" aria-label="Follow me on GitHub"> 
            <Icon path={mdiGithub}/>
          </a>
          <a href="https://open.spotify.com/user/f2qveuaxz5vf7glg8821ot1x7" target="_blank" aria-label="Follow me on Spotify">
            <Icon path={mdiSpotify}/>
          </a>
          <a href="https://www.reddit.com/user/ya-aqob" target="_blank" aria-label="Follow me on Reddit">
            <Icon path={mdiReddit}/>
          </a>
          <a href="https://pinterest.fr/thigcampos/" target="_blank" aria-label="Follow me on Pinterest">
            <Icon path={mdiPinterest}/>
          </a>
          <a href="https://instagram.com/thigcampos" target="_blank" aria-label="Follow me on Instagram">
            <Icon path={mdiInstagram}/>
          </a>
        </div>
      </section>
    )
}