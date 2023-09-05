import Link from "next/link";
import Icon from "@mdi/react";
import styles from "./navButton.module.css";
import { mdiArrowLeft } from "@mdi/js";
import { Url } from "next/dist/shared/lib/router/router";

export default function NavButton({children, path, hasIcon} : {children: String, path: Url, hasIcon?: Boolean}) {
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