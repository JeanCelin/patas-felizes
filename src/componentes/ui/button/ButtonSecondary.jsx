import Link from "next/link";
import styles from "./ButtonSecondary.module.css";
export default function ButtonSecondary({
  children,
  onClick,
  icon,
  width,
  maxWidth,
}) {
  return (

      <button
        className={styles.buttonSecondary}
        onClick={onClick}
        style={{ width, maxWidth }}>
        <div className={styles.buttonSecondary__content}>
          <div>{icon}</div>
          <div>{children}</div>
        </div>
      </button>

  );
}
