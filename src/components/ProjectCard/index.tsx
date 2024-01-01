import styles from './projectCard.module.css';
import { ProjectCardAttributes } from '@/types';

export default function ProjectCard({ title, description, accessDescription, accessPath, image }: ProjectCardAttributes) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{ title }</h3>
      <p className={styles.description}>{ description }</p>
      <a className={styles.link} href={accessPath}>{ accessDescription }</a>
      <div className={styles.image}>
        <image href={image} />
      </div>
    </div>
  );
}