"use client";
import Image from "next/image";

import { useState } from "react";

import styles from "./Navbar.module.css";

import icon from "../../../public/icons/android-chrome-192x192.png";
import ButtonPrimary from "../ui/button/ButtonPrimary";
import ButtonBurger from "../ui/button/ButtonBurger";
import Navlinks from "./NavLinks";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__wrapper}>
        <Link href={"/"}>
          <div className={styles.navbar__logo}>
            <Image src={icon} alt="Logo" width={25} height={25} priority />
            <p className={styles.navbar__title}>Patas Felizes</p>
          </div>
        </Link>
        <div className={styles.navbar__links__list}>
          <Navlinks direction="row" />
        </div>
        <Link style={{ textDecoration: "none" }} href="/donate/#donation">
          <ButtonPrimary children={"Doar Agora"} maxWidth="fit-content" />
        </Link>

        <div
          className={styles.navbar__btn__burger}
          onClick={() => setIsOpen(!isOpen)}>
          <ButtonBurger isOpen={isOpen} />
        </div>
      </div>

      {isOpen && (
        <div className={styles.navbar__mobile}>
          <div onClick={handleClose}>
            <Navlinks direction="column" />
          </div>
          <Link style={{ textDecoration: "none" }} href="/donate/#donation">
            <div
              className={styles.navbar__mobile__btn}
              onClick={() => setIsOpen(false)}>
              <ButtonPrimary children="Doar Agora" />
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
}
