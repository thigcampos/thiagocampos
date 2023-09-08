import styles from "./modal.module.css";
import { MobileNavigation } from "@/types";
import { Footer, Anchor } from "@/components";

export default function Modal({modalVisible, toggleModal, navGroup}: MobileNavigation) {        
    const renderMobileNav = () => {
        return navGroup.map((link, idx) => (
            <Anchor key={idx} path={link.path} hasIcon={link.hasIcon}>{link.name}</Anchor>
        ))
    }

    if (!modalVisible) {
        return null;
    }
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <button className={styles.closeButton} onClick={() => toggleModal()}>Close</button>
                { renderMobileNav() }
                <Footer/>
            </div>
        </div>
    )
}