import styles from "./ButtonPrimary.module.css";

export default function ButtonPrimary({
  children,
  onClick,
  width,
  maxWidth,
  icon,
}) {
  return (
    <button
      className={styles.buttonPrimary}
      onClick={onClick}
      style={{ width, maxWidth }}>
      <div className={styles.buttonPrimary__content}>
        <div>{icon}</div>
        <div>{children}</div>
   
      </div>
    </button>
  );
}
