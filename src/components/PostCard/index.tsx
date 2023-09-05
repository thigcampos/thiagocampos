import styles from "./postCard.module.css";
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { Post } from 'contentlayer/generated'

export default function PostCard(post: Post) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>
          <Link href={post.url}>
            {post.title}
          </Link>
        </h2>
        <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
    )
  }