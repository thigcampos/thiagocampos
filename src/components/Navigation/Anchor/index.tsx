import styles from "./anchor.module.css";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import { DesktopNavigation } from "@/types";

export default function Anchor({children, path, hasIcon} : DesktopNavigation) {
    function renderIcon() {
        return hasIcon ? (<Icon path={mdiArrowLeft}/>) : null;
    }
    return (
        <Link className={styles.container} href={path}>
            {renderIcon()}
            <p className={styles.text}>{children}</p>
        </Link>
    )
}