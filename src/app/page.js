import Image from "next/image";
import styles from "./page.module.css";
import mainDog from "../../public/caramelo-cut.png";
import logo from "../../public/logo2.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.home}>
      <header className={styles.home__header}>
        <Image src={logo} width={60} height={60} alt="logo" />
        <h1>Patas Carentes</h1>
      </header>
      <main className={styles.home__main}>
        <h2 className={styles.home__main__title}>Adote um Amigo</h2>
        <p className={styles.home__main__text}>
          Faça a diferença: adote um animal carente ou faça uma doação
        </p>
        <div className={styles.home__main__buttons}>
          <Link href="/doar">
            <button className={styles.home__main__button}>doar!</button>
          </Link>

          <Link href="/adotar">
            <button className={styles.home__main__button}>adotar!</button>
          </Link>
        </div>

        <div style={{ position: "relative", width: "400px", height: "400px" }}>
          <Image
            src={mainDog}
            alt="Cachorro Caramelo"
            fill
            className={styles.home__main__dog}
            style={{ objectFit: "contain" }}
          />
        </div>
      </main>
    </div>
  );
}
// sizes="(max-width: 400px) 70vw, 30vw"
