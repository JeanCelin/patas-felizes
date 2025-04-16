import Image from "next/image";

import styles from "./AboutSection.module.css";
import tag from "@/styles/Tag.module.css";
import description from "@/styles/Description.module.css";
import placeholder from "/public/placeholder.svg";

export default function AboutSection() {
  return (
    <section className={styles.about}>
      <h1 className={tag.tag}>Nossa História</h1>
      <h2 className={description.title} style={{ textAlign: "center" }}>
        Sobre a Patas Carentes
      </h2>
      <p className={description.text} style={{ textAlign: "justify" }}>
        Fundada em 2015, a Patas Carentes começou com um pequeno grupo de
        voluntários que não podiam ignorar o crescente número de animais
        abandonados em nossa comunidade. O que começou como alguns abrigos
        temporários cresceu e se tornou uma organização de resgate abrangente.
      </p>
      <div className={styles.about__image}>
        <Image
          src={placeholder}
          alt="Animal resgatado"
          fill
          priority={false}
          loading="lazy"
          className={styles.image}
        />
      </div>
      <h3 className={description.title}>Nossa Missão</h3>
      <p className={description.text}>
        Resgatar, reabilitar e encontrar lares para animais abandonados e
        maltratados, enquanto educamos a comunidade sobre a posse responsável de
        animais de estimação.
      </p>
      <h3 className={description.title}>Nosso Impacto</h3>
      <p className={description.text}>
        Mais de 2.000 animais resgatados e 1.500 adoções realizadas desde nossa
        fundação. Também fornecemos cuidados médicos a inúmeros animais de rua e
        realizamos programas educacionais em escolas.
      </p>
      <h3 className={description.title}>Nossa Visão</h3>
      <p className={description.text}>
        Uma comunidade onde nenhum animal é abandonado ou maltratado, e cada pet
        tem um lar amoroso.
      </p>
    </section>
  );
}
