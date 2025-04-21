'use client'

import Link from "next/link";
import Image from "next/image";
import icon from "../../../public/android-chrome-192x192.png";
import styles from "./Navbar.module.css";
import ButtonPrimary from "../ui/button/ButtonPrimary";
import ButtonBurger from "../ui/button/ButtonBurger";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <Image src={icon} alt="Logo" width={25} height={25} priority />
        <p className={styles.navbar__title}>Patas Carentes</p>
      </div>
      <ButtonPrimary children={"Doar Agora"} maxWidth="fit-content"/>
      <ButtonBurger />

      {/* <ul className={styles.navbar__list}>
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
      </ul> */}
    </nav>
  );
}
