'use client';   

import styles from './filter.module.css';
import { useState } from 'react';
import { FilterAttributes } from '@/types';
import Select from '../Select';

export default function Filter({callback, options, defaultValue} : FilterAttributes) {
  const [selected, setSelected] = useState<string>(defaultValue || options[0]);

  function handleClick(tag: string, status: boolean) {
    let selectedOption;
    
    if (status === false) {
      selectedOption = defaultValue || options[0]; 
    } else {
      selectedOption = tag; 
    }

    setSelected(selectedOption);
    callback(selectedOption); 
  }

  function renderOptions() {
    return options.map((option, idx) => {
      const isActive = option === selected ? true : false;
      return <Select key={idx} callback={handleClick} type={option} isActive={isActive} />;
    }
    );
  }
  
  return (
    <div className={styles.filterWrapper}>
      { renderOptions() }
    </div>
  );
}