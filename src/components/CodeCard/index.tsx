import styles from "./codeCard.module.css";

export default function CodeCard(children: String) {
    <div className={styles.container}>
        <span className={styles.code}>{children}</span>
    </div> 
}