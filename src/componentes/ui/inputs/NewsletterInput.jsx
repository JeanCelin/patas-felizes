import styles from "./NewsletterInput.module.css";

export default function NewsletterInput({ type = "email", placeholder, value, onChange }) {
  return (
    <input
      className={styles.newsletterInput}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
