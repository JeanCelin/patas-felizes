"use client";
import styles from "./ButtonBurger.module.css";
import Image from "next/image";
import burgerIcon from "../../../../public/menu_burger.png";
import CloseIcon from "../../icons/X";
export default function ButtonBurger({ isOpen }) {
  // Function to handle the click event of the button
  const handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <button className={styles.burger} onClick={handleClick}>
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
