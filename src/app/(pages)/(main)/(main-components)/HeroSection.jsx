import Image from "next/image";
import Link from "next/link";

import styles from "./HeroSection.module.css";
import tag from "@/styles/Tag.module.css";

import ButtonPrimary from "@/componentes/ui/button/ButtonPrimary";
import ButtonSecondary from "@/componentes/ui/button/ButtonSecondary";
import heroImage from "/public/hero-img.png";



export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__wrapper}>
        <section>
          <div className={styles.hero__text}>
            <div className={tag.tag}>
              <span>Resgate e Cuidado Animal</span>
            </div>
            <h1 className={styles.hero__title}>
              Ajude a Dar Uma Segunda Chance
            </h1>
            <p className={styles.hero__text}>
              Patas Felizes é dedicada ao resgate, reabilitação e adoção de
              animais abandonados. Todo animal merece amor, cuidado e um lar
              para sempre.
            </p>
          </div>
          <div className={styles.hero__buttons}>
            <Link href="/adopt" style={{ textDecoration: "none" }}>
              <ButtonPrimary children={"Adote um Pet"} />
            </Link>
            <Link href="#donation" style={{ textDecoration: "none" }}>
              <ButtonSecondary children={"Faça uma Doação"} />
            </Link>
          </div>
        </section>
        <section className={styles.hero__image}>
          <Image
            src={heroImage}
            alt="Animal resgatado"
            fill
            className={styles.image}
            priority
            sizes="(max-width: 976px) 100vw, (min-width: 1530px) 692px"
          />
        </section>
      </div>
    </section>
  );
}
