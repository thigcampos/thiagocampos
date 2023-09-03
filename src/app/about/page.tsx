import styles from './about.module.scss'

export default function Home() {
    return (
      <main className={styles.main}>
        <section>
          {/*HEADER*/}
        </section>
        <section>
          <div className={styles.headline}>
            <h1 className={styles.title}>That is the about me page</h1>
            <p className={styles.subtitle}>Go <a href='/'>[ home ]</a> or check some my <a href='/blog'>[ blog ]</a></p>
          </div>
        </section>
        <section>
          {/*FOOTER*/}
        </section>
      </main>
    )
  }