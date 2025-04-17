import Image from "next/image";
import ButtonPrimary from "@/componentes/ui/button/ButtonPrimary";
import ButtonSecondary from "@/componentes/ui/button/ButtonSecondary";

import placeholder from "/public/placeholder.svg";

import styles from "./HeroSection.module.css";
import tag from "@/styles/Tag.module.css";
import description from "@/styles/Description.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__text}>
        <div className={tag.tag}>
          <h1>Resgate e Cuidado Animal</h1>
        </div>
        <h2 className={description.title}>Ajude a Dar Uma Segunda Chance</h2>
        <p className={description.text}>
          Patas Carentes é dedicada ao resgate, reabilitação e adoção de animais
          abandonados. Todo animal merece amor, cuidado e um lar para sempre.
        </p>
      </div>
      <div className={styles.hero__buttons}>
        <ButtonPrimary children={"Adote um Pet"} />
        <ButtonSecondary children={"Faça uma Doação"} />
      </div>
      <div className={styles.hero__image}>
        <Image
          src={placeholder}
          alt="Animal resgatado"
          fill
          className={styles.image}
          loading="lazy"
        />
      </div>
    </section>
  );
}
