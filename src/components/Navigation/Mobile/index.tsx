import styles from "./navModal.module.css";
import { MobileNavigation } from "@/types";
import { Footer, NavButton } from "@/components";

export default function NavModal({modalVisible, toggleModal, navGroup}: MobileNavigation) {        
    const renderMobileNav = () => {
        return navGroup.map((link, idx) => (
            <NavButton key={idx} path={link.path} hasIcon={link.hasIcon}>{link.name}</NavButton>
        ))
    }

    if (!modalVisible) {
        return null;
    }
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={() => toggleModal()}>Close</button>
                { renderMobileNav() }
                <Footer/>
            </div>
        </div>
    )
}