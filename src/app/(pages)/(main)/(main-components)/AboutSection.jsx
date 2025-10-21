import Image from "next/image";

import styles from "./AboutSection.module.css";
import tag from "@/styles/Tag.module.css";

import PawIcon from "@/components/icons/PawIcon";
import volunteers from "/public/volunteers.png";

export default function AboutSection() {
  return (
    <section className={styles.about}>
      <div className={styles.about__wrapper}>
        <header className={styles.about__header}>
          <div className={tag.tag}>
            <PawIcon />
            <span>Nossa História</span>
          </div>
          <h2 className={styles.about__title}>Sobre a Patas Felizes</h2>
          <p className={styles.about__header__text}>
            Fundada em 2015, a Patas Felizes começou com um pequeno grupo de
            voluntários que não podiam ignorar o crescente número de animais
            abandonados em nossa comunidade. O que começou como alguns abrigos
            temporários cresceu e se tornou uma organização de resgate
            abrangente.
          </p>
        </header>
        <section className={styles.about__content}>
          <div className={styles.about__image}>
            <Image
              src={volunteers}
              alt="Uma foto dos voluntários da Patas Felizes"
              fill
              loading="lazy"
              className={styles.image}
              sizes="(min-width: 1024px) 480px, 100vw"
              placeholder="blur"
            />
          </div>
          <article>
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
          </article>
        </section>
      </div>
    </section>
  );
}
