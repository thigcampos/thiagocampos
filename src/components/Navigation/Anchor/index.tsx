import Link from "next/link";
import Icon from "@mdi/react";
import { AnchorAttributes } from "@/types";
import styles from "./anchor.module.css";

export default function Anchor({children, path, icon, variant} : AnchorAttributes) {
    function renderLeftIcon(icon: string | undefined) {
        return icon ? (<Icon path={icon}/>) : null;
    }

    function getClassNames() {
        return variant ? `${styles.container} ${styles[variant]}` : styles.container; 
    }

    return (
        <Link className={getClassNames()} href={path}>
            {renderLeftIcon(icon)}
            <p className={styles.text}>{children}</p>
        </Link>
    );
}