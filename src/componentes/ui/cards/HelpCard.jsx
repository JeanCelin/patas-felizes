import styles from "./HelpCard.module.css";

export default function HelpCard({ icon, title, text }) {
  return (
    <div className={styles.helpCard}>
      <div className={styles.helpCard__icon}>{icon}</div>
      <h3 className={styles.helpCard__title}>{title}</h3>
      <p className={styles.helpCard__text}>{text}</p>
    </div>
  );
}