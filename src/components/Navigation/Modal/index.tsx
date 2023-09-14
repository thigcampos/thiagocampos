import { ModalAttributes } from '@/types';
import { Footer, Anchor } from '@/components';
import styles from './modal.module.css';

export default function Modal({modalVisible, toggleModal, navGroup}: ModalAttributes) {        
  const renderMobileNav = () => navGroup.map((link, idx) => (
    <Anchor key={idx} path={link.path} icon={link?.icon}>{link.name}</Anchor>
  ));

  if (!modalVisible) {
    return null;
  }
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <button type="button" className={styles.closeButton} onClick={() => toggleModal()}>Close</button>
        { renderMobileNav() }
        <Footer/>
      </div>
    </div>
  );
}