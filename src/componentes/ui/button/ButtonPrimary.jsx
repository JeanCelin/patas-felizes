import styles from "./ButtonPrimary.module.css";

export default function ButtonPrimary({ children, onClick, width }) {
  return (
    <button className={styles.buttonPrimary} onClick={onClick} style={{ width }}>
      {children}
    </button>
  );
}
