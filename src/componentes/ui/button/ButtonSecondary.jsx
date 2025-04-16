import styles from './ButtonSecondary.module.css';
export default function ButtonSecondary({ children, onClick }) {
  return (
    <button className={styles.buttonSecondary} onClick={onClick}>
      {children}
    </button>
  );
}