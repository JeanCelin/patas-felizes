import styles from "./TextCard.module.css";
import ButtonPrimary from "../button/ButtonPrimary";
export default function TextCard({ title, text, btnText }) {
  return (
    <section className={styles.textCard}>
      <h3 className={styles.textCard__title}>{title}</h3>
      <p className={styles.textCard__text}>{text}</p>
      <div className={styles.textCard__btnContainer}>
        <ButtonPrimary children={btnText} />
      </div>
    </section>
  );
}
