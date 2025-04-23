import Image from "next/image";
import PawIcon from "@/componentes/icons/PawIcon";

import styles from "./AboutSection.module.css";
import tag from "@/styles/Tag.module.css";
import placeholder from "/public/placeholder.svg";

export default function AboutSection() {
  return (
    <section className={styles.about}>
      <div className={styles.about__wrapper}>
        <div className={styles.about__header}>
          <div className={tag.tag}>
            <PawIcon />
            <h1>
              Nossa História
            </h1>
          </div>
          <h2 className={styles.about__title} style={{ textAlign: "center" }}>
            Sobre a Patas Carentes
          </h2>
          <p className={styles.about__header__text}>
            Fundada em 2015, a Patas Carentes começou com um pequeno grupo de
            voluntários que não podiam ignorar o crescente número de animais
            abandonados em nossa comunidade. O que começou como alguns abrigos
            temporários cresceu e se tornou uma organização de resgate
            abrangente.
          </p>
        </div>
        <div className={styles.about__content}>
          <div className={styles.about__image}>
            <Image
              src="/voluntarios.jpg"
              alt="Uma foto dos voluntários da Patas Carentes"
              fill
              quality={100}
              priority={false}
              loading="lazy"
              className={styles.image}
              // sizes="(min-width: 1024px) 480px, 100vw"

            />
          </div>
          <div>
            <h3 className={styles.about__subtitle}>Nossa Missão</h3>
            <p className={styles.about__text}>
              Resgatar, reabilitar e encontrar lares para animais abandonados e
              maltratados, enquanto educamos a comunidade sobre a posse
              responsável de animais de estimação.
            </p>
            <h3 className={styles.about__subtitle}>Nosso Impacto</h3>
            <p className={styles.about__text}>
              Mais de 2.000 animais resgatados e 1.500 adoções realizadas desde
              nossa fundação. Também fornecemos cuidados médicos a inúmeros
              animais de rua e realizamos programas educacionais em escolas.
            </p>
            <h3 className={styles.about__subtitle}>Nossa Visão</h3>
            <p className={styles.about__text}>
              Uma comunidade onde nenhum animal é abandonado ou maltratado, e
              cada pet tem um lar amoroso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
