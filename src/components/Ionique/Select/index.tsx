'use client';   

import { SelectAttributes } from '@/types';
import styles from './select.module.css';

export default function Select({type, callback, isActive} : SelectAttributes) {
  const containerStyle = isActive ? styles.active : styles.inactive; 

  function handleClick(tag: string, status: boolean) {
    callback(tag, !status);
  }

  return (
    <button type="button" className={containerStyle} onClick={() => handleClick(type, isActive)}>
      <p className={styles.text}>{type}</p>
    </button>
  );
}