import { Footer, NavButton } from "@/components";
import styles from "./navModal.module.css";
import { useEffect, useState } from "react";
export default function NavModal({status}: {status: boolean}) {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(status);
    
    const closeModal = () => {
        setIsModalVisible(false);
    }

    useEffect(() => {
        setIsModalVisible(true)
    }, [status])
    
    if (!isModalVisible) {
        return null;
    }

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <button onClick={() => closeModal()}>Close</button>
                <NavButton path='/' hasIcon>Home</NavButton>
                <NavButton path='/blog'>Blog</NavButton>
                <NavButton path='/about'>About Me</NavButton>
                <Footer/>
            </div>
        </div>
    )
}