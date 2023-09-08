import Link from "next/link";
import Icon from "@mdi/react";
import styles from "./navButton.module.css";
import { mdiArrowLeft } from "@mdi/js";
import { DesktopNavigation } from "@/types";

export default function NavButton({children, path, hasIcon} : DesktopNavigation) {
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