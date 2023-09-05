import Icon from "@mdi/react";
import styles from "./footer.module.css"
import { mdiSonyPlaystation, mdiAt, mdiGitlab, mdiInstagram } from "@mdi/js";


export default function Footer() {
    return (
    <section className={styles.container}>
        <div className={styles.iconsFooter}>
          <Icon path={mdiSonyPlaystation}/>
          <Icon path={mdiAt}/>
          <Icon path={mdiGitlab}/>
          <Icon path={mdiInstagram}/>
        </div>
      </section>
    )
}