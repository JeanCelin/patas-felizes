import styles from "./HelpCard.module.css";
import description from "@/styles/Description.module.css"

export default function HelpCard({ icon, title, text }) {
  return (
    <div className={styles.helpCard}>
      <div className={styles.helpCard__icon}>{icon}</div>
      <h3 className={description.subtitle}>{title}</h3>
      <p className={`${description.text} ${styles.helpCard__text}`}>{text}</p>
    </div>
  );
}