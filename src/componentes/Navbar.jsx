import Link from "next/link";
import Image from "next/image";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <Image src="/logo2.png" alt="Logo" width={50} height={50} priority/>

      <ul className={styles.navbar__list}>
        <li className={styles.navbar__link}>
          <Link href="#">Sobre</Link>
        </li>
        <li className={styles.navbar__link}>
          <Link href="#">Animais</Link>
        </li>
        <li className={styles.navbar__link}>
          <Link href="#">Doação</Link>
        </li>
        <li className={styles.navbar__link}>
          <Link href="#">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}
