import styles from './empty.module.css';

import { LanguageAttribute } from '@/types';
import { emptyMessage } from '@/constants/blog';

export default function Empty({ language }: LanguageAttribute) {
  return (
    <div className={styles.containerWrapper}>
      <div>
        <p className={styles.warning}>{ emptyMessage[language] }</p>
      </div>
    </div>
  );
}