import styles from "./PrimaryInput.module.css";

export default function PrimaryInput({
  type,
  placeholder,
  value,
  onChange,
  prefix,
}) {
  return (
    <div className={styles.wrapper}>
      {prefix && <span className={styles.prefix}>{prefix}</span>}
      <input
        className={styles.PrimaryInput}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
