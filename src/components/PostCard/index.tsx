import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { Post } from 'contentlayer/generated';
import styles from './postCard.module.css';

export default function PostCard({title, summary, url, date}: Post) {
  return (
    <Link href={url} className={styles.container} prefetch={false}>
      <h2 className={styles.title}>
        {title}
      </h2>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: summary }} />
      <time dateTime={date} className={styles.date}>
        {format(parseISO(date), 'LLLL d, yyyy')}
      </time>
    </Link>
  );
}