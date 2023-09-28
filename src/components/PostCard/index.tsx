import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { Post } from 'contentlayer/generated';
import styles from './postCard.module.css';

export default function PostCard({title, tag, summary, url, date}: Post) {
  return (
    <Link href={url} className={styles.container}>
      <h2 className={styles.title}>
        {tag} | {title}
      </h2>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: summary }} />
      <time dateTime={date} className={styles.date}>
        {format(parseISO(date), 'LLLL d, yyyy')}
      </time>
    </Link>
  );
}