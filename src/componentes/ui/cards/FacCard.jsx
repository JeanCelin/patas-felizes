import styles from './FacCard.module.css';

export default function FacCard({ title, text }) {
  return (
    <div className={styles.facCard}>
      <h3 className={styles.facCard__title}>{title}</h3>
      <p className={styles.facCard__text}>{text}</p>
    </div>
  );
}