'use client';

import { useState } from 'react';
import { mdiPlus } from '@mdi/js';
import { HeaderAttributes } from '@/types';
import { Button, Anchor, Modal } from '@/components';
import styles from './header.module.css';

export default function Header({ navGroup, hideDesktop }: HeaderAttributes) {
  const [ modalVisibility, seyModalVisibility ] = useState<boolean>(false);

  const toggleModal = () => {
    seyModalVisibility(!modalVisibility);
  };

  const renderDesktopNav = () => hideDesktop ? null : navGroup.map((link, idx) => (
    <Anchor key={idx} path={link.path} icon={link?.icon}>{link.name}</Anchor>
  ));

  return (
    <section className={styles.container}>
      <div className={styles.mobileButtons}>
        <Button icon={mdiPlus} onClick={() => toggleModal()}>Options</Button>
      </div>
      <div className={styles.desktopButtons}>
        { renderDesktopNav() }
      </div>
      <Modal modalVisible={modalVisibility} toggleModal={() => toggleModal()} navGroup={navGroup}/>
    </section>
  );
}