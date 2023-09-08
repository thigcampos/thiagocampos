"use client"
import styles from "./header.module.css";
import { useState } from "react";
import { Button, Anchor, Modal } from "../..";
import { Header } from "@/types";

export default function Header({ navGroup, hideDesktop }: Header) {
    const [modalVisibility, seyModalVisibility] = useState<boolean>(false);

    const toggleModal = () => {
        seyModalVisibility(!modalVisibility)
    }

    const renderDesktopNav = () => {
        if (hideDesktop) {
            return null;
        } 
        
        return navGroup.map((link, idx) => (
            <Anchor key={idx} path={link.path} hasIcon={link.hasIcon}>{link.name}</Anchor>
        ));
    }

    return (
        <section className={styles.container}>
            <div className={styles.mobileButtons}>
              <Button hasIcon onClick={() => toggleModal()}>Options</Button>
            </div>
            <div className={styles.desktopButtons}>
                { renderDesktopNav() }
            </div>
            <Modal modalVisible={modalVisibility} toggleModal={() => toggleModal()} navGroup={navGroup}/>
        </section>
    )
}