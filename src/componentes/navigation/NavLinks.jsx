import Link from "next/link";

import styles from "./NavLinks.module.css";

export default function Navlinks({ direction }) {
  styles.navbar__list;
  return (
    <ul
      className={
        direction === "column"
          ? styles.navbar__list__column
          : styles.navbar__list__row
      }>
      <li className={styles.navbar__link}>
        <Link href="/">Inicio</Link>
      </li>
      <li className={styles.navbar__link}>
        <Link href="/about">Sobre</Link>
      </li>
      <li className={styles.navbar__link}>
        <Link href="/category">Categorias</Link>
      </li>
      <li className={styles.navbar__link}>
        <Link href="/adopt">Adoções</Link>
      </li>
      <li className={styles.navbar__link}>
        <Link href="/donate">Doar</Link>
      </li>
      <li className={styles.navbar__link}>
        <Link href="/volunteer">Voluntariado</Link>
      </li>
      <li className={styles.navbar__link}>
        <Link href="/contact">Contato</Link>
      </li>
    </ul>
  );
}
