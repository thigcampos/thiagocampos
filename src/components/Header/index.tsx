"use client"
import styles from "./header.module.css";
import { Button } from "..";
import NavModal from "../Navigation/Mobile";
import { useState } from "react";

export default function Header() {
    const [modal, setModal] = useState<boolean>(false);

    const changeModal = () => {
        setModal(!modal)
    }

    return (
        <section className={styles.container}>
            <div className={styles.headerButtons}>
              <Button hasIcon onClick={() => changeModal()}>Options</Button>
            </div>
            <NavModal status={modal}/>
        </section>
    )
}