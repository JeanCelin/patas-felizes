import Image from "next/image";
import ButtonPrimary from "@/componentes/ui/button/ButtonPrimary";
import ButtonSecondary from "@/componentes/ui/button/ButtonSecondary";

import heroImage from "/public/hero-img.png";

import styles from "./HeroSection.module.css";
import tag from "@/styles/Tag.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__wrapper}>
        <div>
          <div className={styles.hero__text}>
            <div className={tag.tag}>
              <h1>Resgate e Cuidado Animal</h1>
            </div>
            <h2 className={styles.hero__title}>
              Ajude a Dar Uma Segunda Chance
            </h2>
            <p className={styles.hero__text}>
              Patas Carentes é dedicada ao resgate, reabilitação e adoção de
              animais abandonados. Todo animal merece amor, cuidado e um lar
              para sempre.
            </p>
          </div>
          <div className={styles.hero__buttons}>
            <ButtonPrimary children={"Adote um Pet"} />
            <ButtonSecondary children={"Faça uma Doação"} />
          </div>
        </div>
        <div className={styles.hero__image}>
          <Image
            src={heroImage}
            alt="Animal resgatado"
            fill
            className={styles.image}
            priority
            sizes="(max-width: 976px) 100vw, (min-width: 1530px) 692px"

          />
        </div>
      </div>
    </section>
  );
}
