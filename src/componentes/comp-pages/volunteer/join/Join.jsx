import Image from "next/image";

import tag from "@/styles/Tag.module.css";
import styles from "./Join.module.css";
import placeholder from "/public/placeholder.svg";
import HeartIcon from "@/componentes/icons/HeartIcon";

export default function Join() {
  return (
    <div>
      <section className={styles.join}>
        <div className={styles.join__wrapper}>
          <header className={styles.join__header}>
            <div className={tag.tag}>
              <HeartIcon />
              <span>Faça Parte</span>
            </div>
            <div>
              <h1 className={styles.join__header__title}>Seja um voluntário</h1>
              <p className={styles.join__header__description}>
                Junte-se à nossa equipe de voluntários e ajude a transformar a
                vida dos animais resgatados.
              </p>
            </div>
          </header>
        </div>
      </section>
      <section className={styles.join__whyText}>
        <div className={styles.join__wrapper}>
          <div className={styles.join__content}>
            <div className={styles.join__content__image}>
              <Image src={placeholder} fill alt="placeholder" />
            </div>
            <article>
              <h3 className={styles.join__content__title}>Por Que Ser Voluntário?</h3>
              <p className={styles.join__content__description}>
              Ser voluntário na Patas Carentes é uma experiência transformadora. Você não apenas ajuda animais necessitados, mas também desenvolve habilidades valiosas, faz amizades duradouras e experimenta a satisfação de fazer a diferença na vida de um ser vivo.
              </p>
              <p className={styles.join__content__description}>
              Nossos voluntários são o coração da nossa organização. Sem eles, não poderíamos realizar o trabalho vital de resgate, reabilitação e adoção que fazemos diariamente.
              </p>
              <p className={styles.join__content__description}>
              Independentemente de quanto tempo você pode dedicar ou quais habilidades você possui, temos uma função que se adequará às suas circunstâncias e interesses.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
