import styles from "./post.module.css";
import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated';
import { Footer, NavButton } from '@/components';

export const runtime = 'edge';

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return (
    <main className={styles.main}>
      <div>
        <section className={styles.header}>
          <NavButton path="/blog" hasIcon>Blog</NavButton>
          <NavButton path="/">Home</NavButton>
          <NavButton path="/about">About Me</NavButton>
        </section>
        <article>
          <div>
            <h1 className={styles.title}>{post.title}</h1>
            <time dateTime={post.date} className={styles.date}>
              {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
          </div>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.body.html }} />
        </article>
      </div>
      <Footer />
    </main>
  )
}

export default PostLayout