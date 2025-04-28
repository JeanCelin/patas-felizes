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
      <li>
        <Link href="/">Inicio</Link>
      </li>
      <li>
        <Link href="/about">Sobre</Link>
      </li>
      <li>
        <Link href="#">Adoções</Link>
      </li>
      <li>
        <Link href="#">Doar</Link>
      </li>
      <li>
        <Link href="#">Voluntariado</Link>
      </li>
      <li>
        <Link href="#">Contato</Link>
      </li>
    </ul>
  );
}
