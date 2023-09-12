import Link from "next/link";
import Icon from "@mdi/react";
import { AnchorAttributes } from "@/types";
import styles from "./anchor.module.css";

export default function Anchor({children, path, icon} : AnchorAttributes) {
    function renderLeftIcon(icon: string | undefined) {
        return icon ? (<Icon path={icon}/>) : null;
    }
    return (
        <Link className={styles.container} href={path}>
            {renderLeftIcon(icon)}
            <p className={styles.text}>{children}</p>
        </Link>
    );
}