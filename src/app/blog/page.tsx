import styles from "./blog.module.css";
import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { NavButton, PostCard } from "@/components";


export default function Blog() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <main className={styles.main}>
      <section className={styles.header}>
          <NavButton path="/" hasIcon>Home</NavButton>
          <NavButton path="/blog">Blog</NavButton>
          <NavButton path="/projects">Projects</NavButton>
        </section>
      <section>
        <h1>That is my blog</h1>
        <div className={styles.postsWrapper}>
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
            ))}
        </div>
      </section>
    </main>
  )
}