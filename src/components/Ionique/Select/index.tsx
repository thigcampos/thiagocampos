'use client';   

import { SelectAttributes } from '@/types';
import styles from './select.module.css';
import { useState } from 'react';

export default function Select({type, callback} : SelectAttributes) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const containerStyle = isActive ? styles.active : styles.inactive; 
  
  function handleClick(tag: string, status: boolean) {
    const currentStatus = status;
    setIsActive(!currentStatus);
    callback(tag, !currentStatus);
  }

  return (
    <button type="button" className={containerStyle} onClick={() => handleClick(type, isActive)}>
      <p className={styles.text}>{type}</p>
    </button>
  );
}