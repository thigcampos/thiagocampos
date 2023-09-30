'use client';   

import styles from './select.module.css';
import { SelectAttributes } from '@/types';

export default function Select({type, isActive, callback} : SelectAttributes) {
  const containerStyle = isActive ? styles.active : styles.inactive; 
  
  function handleClick(tag: string, currentStatus: boolean) {
    const status = !currentStatus;
    callback(tag, status);
  }

  return (
    <button type="button" className={containerStyle} onClick={() => handleClick(type, isActive)}>
      <p className={styles.text}>{type}</p>
    </button>
  );
}