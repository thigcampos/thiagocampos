"use client"
import Icon from "@mdi/react";
import styles from "./button.module.css";
import { mdiPlus } from "@mdi/js";
import { Button } from "@/types";

export default function Button({children, onClick, hasIcon} : Button) {
    function renderIcon() {
        return hasIcon ? (<Icon path={mdiPlus}/>) : null;
    }
    return (
        <button className={styles.container} onClick={onClick}>
            {renderIcon()}
            <p className={styles.text}>{children}</p>
        </button>
    )
}