import styles from './SecondaryInput.module.css';

export default function SecondaryInput({ type, placeholder, value, onChange, prefix }) {
  return (
    <div className={styles.wrapper}>
      {prefix && <span className={styles.prefix}>{prefix}</span>}
      <input
        className={styles.secondaryInput}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
