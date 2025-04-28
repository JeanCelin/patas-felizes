"use client";

import { useState } from "react";

import Image from "next/image";
import icon from "../../../public/android-chrome-192x192.png";
import styles from "./Navbar.module.css";
import ButtonPrimary from "../ui/button/ButtonPrimary";
import ButtonBurger from "../ui/button/ButtonBurger";
import CloseIcon from "../icons/X";
import Navlinks from "./NavLinks";
import ButtonSecondary from "../ui/button/ButtonSecondary";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__wrapper}>
        <div className={styles.navbar__logo}>
          <Image src={icon} alt="Logo" width={25} height={25} priority />
          <p className={styles.navbar__title}>Patas Carentes</p>
        </div>
        <div className={styles.navbar__links__list}>
          <Navlinks direction="row" />
        </div>
        <ButtonPrimary children={"Doar Agora"} maxWidth="fit-content" />

        <div
          className={styles.navbar__btn__burger}
          onClick={() => setIsOpen(!isOpen)}>
          <ButtonBurger isOpen={isOpen}/>
        </div>
      </div>

      {isOpen && (
        <div className={styles.navbar__mobile}>
          <div onClick={handleClose}>
            <Navlinks direction="column" />
          </div>
          <div
            className={styles.navbar__mobile__btn}
            onClick={() => setIsOpen(false)}>
            <ButtonPrimary children="Doar Agora" />
          </div>
        </div>
      )}
    </nav>
  );
}
