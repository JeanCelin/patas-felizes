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
        <h1 className={tag.tag}>
          Resgate e Cuidado Animal
        </h1>
        <h2 className={description.title}>Ajude a Dar Uma Segunda Chance</h2>
        <p className={description.text}>
          Patas Carentes é dedicada ao resgate, reabilitação e adoção de animais
          abandonados. Todo animal merece amor, cuidado e um lar para sempre.
        </p>
      </div>
      <div className={styles.hero__buttons}>
        <ButtonPrimary children={"Adote um Pet"} width={"100%"} />
        <ButtonSecondary children={"Faça uma doação"} />
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
