import styles from "./ButtonPrimary.module.css";

export default function ButtonPrimary({ children, onClick }) {
  return (
    <button className={styles.buttonPrimary} onClick={onClick}>
      {children}
    </button>
  );
}
