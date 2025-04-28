import Link from "next/link";
import styles from "./NavLinks.module.css";

export default function Navlinks({direction}) {
  styles.navbar__list
  return (
    <ul className={direction === "column" ? styles.navbar__list__column : styles.navbar__list__row}>
      <li className={styles.navbar__link}>
        <Link href="/">Inicio</Link>
      </li>
      <li className={styles.navbar__link}>
        <Link href="/about">Sobre</Link>
      </li>
      <li className={styles.navbar__link}>
        <Link href="#">Adoções</Link>
      </li>
      <li className={styles.navbar__link}>
        <Link href="#">Doar</Link>
      </li>
      <li className={styles.navbar__link}>
        <Link href="#">Voluntariado</Link>
      </li>
      <li className={styles.navbar__link}>
        <Link href="#">Contato</Link>
      </li>
    </ul>
  );
}
