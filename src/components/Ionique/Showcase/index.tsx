import Link from 'next/link';
import styles from './showcase.module.css';
import { ShowcaseAttributes } from '@/types';

export default function Select({title, path} : ShowcaseAttributes) {
  return (
    <Link className={styles.container} href={path} prefetch={false}>
      <p className={styles.text}>{title}</p>
      
    </Link>
  );
}