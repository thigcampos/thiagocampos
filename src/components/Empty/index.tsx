import styles from './empty.module.css';

export default function Empty() {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.textWrapper}>
        <p className={styles.warning}>Não há nenhum artigo por aqui...</p>
      </div>
    </div>
  );
}