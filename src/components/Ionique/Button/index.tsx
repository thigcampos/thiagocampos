'use client';

import Icon from '@mdi/react';
import { ButtonAttributes } from '@/types';
import styles from './button.module.css';

export default function Button({children, onClick, icon } : ButtonAttributes) {
    function renderLeftIcon(icon: string | undefined) {
        return icon ? (<Icon path={icon}/>) : null;
    }
    return (
        <button type="button" className={styles.container} onClick={onClick}>
            {renderLeftIcon(icon)}
            <p className={styles.text}>{children}</p>
        </button>
    );
}