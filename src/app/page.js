import Image from "next/image";
import styles from "./page.module.css";
import mainDog from "../../public/caramelo-cut.png";
import heartIcon from "../../public/heart.svg";
import houseIcon from "../../public/house.svg";

import logo from "../../public/logo2.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home__name}>
        <Image src={logo} width={60} height={60} alt="logo" />
        <h1>Patas Carentes</h1>
      </div>
      <header className={styles.home__header}>
        <h2 className={styles.home__header__title}>Adote um Amigo</h2>
        <p className={styles.home__header__text}>
          Faça a diferença: adote um animal carente ou faça uma doação
        </p>
      </header>
      <main className={styles.home__main}>
        <div className={styles.home__main__buttons}>
          <div className={styles.home__button__container}>
            <Image
              src={heartIcon}
              alt="Coração"
              width={30}
              height={30}
              style={{ fill: "white" }}
            />
            <Link href="/doar">
              <button className={styles.home__button}>doar</button>
            </Link>
          </div>
          <div className={styles.home__button__container}>
            <Image src={houseIcon} alt="Casa" width={30} height={30} />
            <Link href="/adotar">
              <button className={styles.home__button}>adotar</button>
            </Link>
          </div>
        </div>
        <div className={styles.home__dogImage__container}>
          <Image
            src={mainDog}
            alt="Cachorro Caramelo"
            fill
            className={styles.home__dogImage}
            style={{ objectFit: "contain" }}
          />
        </div>
      </main>
    </div>
  );
}
// sizes="(max-width: 400px) 70vw, 30vw"
