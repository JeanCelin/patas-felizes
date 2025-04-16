
'use client';
import styles from './ButtonBurger.module.css';
import Image from 'next/image';
import burgerIcon from '../../../../public/menu_burger.png';
export default function ButtonBurger() {
  // Function to handle the click event of the button
  const handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <button className={styles.burger} onClick={handleClick}>
      <Image src={burgerIcon} alt="Menu" width={20} height={20} priority />
    </button>
  )
}