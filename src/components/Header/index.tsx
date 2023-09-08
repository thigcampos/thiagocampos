"use client"
import { useState } from "react";
import styles from "./header.module.css";
import NavModal from "../Navigation/Mobile";
import { Button, NavButton } from "..";
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
            <NavButton key={idx} path={link.path} hasIcon={link.hasIcon}>{link.name}</NavButton>
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
            <NavModal modalVisible={modalVisibility} toggleModal={() => toggleModal()} navGroup={navGroup}/>
        </section>
    )
}