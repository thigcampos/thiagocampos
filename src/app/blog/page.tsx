import styles from "./blog.module.css";
import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { Footer, NavButton, PostCard } from "@/components";

export default function Blog() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <main className={styles.main}>
      <div>
        <section className={styles.header}>
            <NavButton path="/" hasIcon>Home</NavButton>
            <NavButton path="/about">About Me</NavButton>
          </section>
        <section>
          <h1 className={styles.title}>O Generalista</h1>
          <div className={styles.postsWrapper}>
            {posts.map((post, idx) => (
              <PostCard key={idx} {...post} />
              ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}