import { Footer, NavButton } from '@/components'
import styles from './about.module.css'

export default function Home() {
    return (
      <main className={styles.main}>
        <div>
          <section className={styles.header}>
            <NavButton path="/" hasIcon>Home</NavButton>
            <NavButton path="/blog">Blog</NavButton>
            <NavButton path="/projects">Projects</NavButton>
          </section>
          <section>
            <div className={styles.content}>
              <span className={styles.date}>February, 11 2023 | 16:14</span>
              <p className={styles.text}>
                Hey! I'm <span>Thiago Campos</span>, a software engineer and design enthusiast based in <span>Brazil</span>. 
                Currently, I'm working on developing and maintaining React Application for a brazilian software house, 
                I'm also co-founder, lead designer and front-end developer in <span>Scopo Studio</span>.
                <br/><br/>
                I've always been inspired by the tech industry, computers and software. 
                In my spare time I explore adjacent areas to software development, mainly design and hardware.
              </p>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    )
  }