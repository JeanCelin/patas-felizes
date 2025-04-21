import styles from "./ButtonPrimary.module.css";

export default function ButtonPrimary({ children, onClick, width, maxWidth }) {
  return (
    <button
      className={styles.buttonPrimary}
      onClick={onClick}
      style={{ width, maxWidth }}>
      {children}
    </button>
  );
}
