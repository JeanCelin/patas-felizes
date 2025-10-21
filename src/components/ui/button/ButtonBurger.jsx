"use client";
import styles from "./ButtonBurger.module.css";
import Image from "next/image";
import burgerIcon from "../../../../public/menu_burger.png";
import CloseIcon from "../../icons/X";
export default function ButtonBurger({ isOpen }) {
 
  return (
    <button className={ isOpen === true ? styles.buttonBurger__clicked : styles.burger} >
      {isOpen ? (
        <CloseIcon width={20} height={20} />
      ) : (
        <Image
          src={burgerIcon}
          alt="Menu"
          width={20}
          height={20}
          priority
          className={styles.buttonBurger}
        />
      )}
    </button>
  );
}
