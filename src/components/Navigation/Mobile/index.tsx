import { Footer, NavButton } from "@/components";
import styles from "./navModal.module.css";

export default function NavModal({modalVisible, toggleModal}: {modalVisible: boolean, toggleModal: () => void}) {        
    if (!modalVisible) {
        return null;
    }

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <button onClick={() => toggleModal()}>Close</button>
                <NavButton path='/' hasIcon>Home</NavButton>
                <NavButton path='/blog'>Blog</NavButton>
                <NavButton path='/about'>About Me</NavButton>
                <Footer/>
            </div>
        </div>
    )
}