'use client';   

import { SelectAttributes } from '@/types';
import styles from './select.module.css';
import { ReactNode, useState } from 'react';

export default function Select({children, callback} : SelectAttributes) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const containerStyle = isActive ? styles.active : styles.inactive; 
  
  function handleClick(tag: ReactNode, status: boolean) {
    const currentStatus = status;
    setIsActive(!currentStatus);
    callback(tag, !currentStatus);
  }
  
  return (
    <button type="button" className={containerStyle} onClick={() => handleClick(children, isActive)}>
      <p className={styles.text}>{children}</p>
    </button>
  );
}