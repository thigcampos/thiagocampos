"use client"
import { useState } from "react";
import styles from "./header.module.css";
import NavModal from "../Navigation/Mobile";
import { Button } from "..";

export default function Header() {
    const [modalVisibility, seyModalVisibility] = useState<boolean>(false);

    const toggleModal = () => {
        seyModalVisibility(!modalVisibility)
    }

    return (
        <section className={styles.container}>
            <div className={styles.mobileButtons}>
              <Button hasIcon onClick={() => toggleModal()}>Options</Button>
            </div>
            <NavModal modalVisible={modalVisibility} toggleModal={() => toggleModal()}/>
        </section>
    )
}