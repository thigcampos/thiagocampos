'use client';   

import { FilterAttributes } from '@/types';
import styles from './filter.module.css';
import Select from '../Select';
import { useState } from 'react';

export default function Filter({callback, options, defaultValue} : FilterAttributes) {
  const [filter, setFilter] = useState<string>(defaultValue || '');

  function handleClick(tag: string, status: boolean) {
    if(status === false) setFilter(defaultValue || ''); 
    else setFilter(tag);
    callback(tag); 
  }
    
  function renderFilters() {
    return options.map((option, idx) => {
        const isActive = option === filter ? true : false;
        return <Select key={idx} callback={handleClick} type={option} isActive={isActive} />
    }
    );
  }

  return (
    <div className={styles.filterWrapper}>
        { renderFilters() }
    </div>
  );
}