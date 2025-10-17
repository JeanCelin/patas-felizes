import Image from "next/image";

import tag from "@/styles/Tag.module.css";
import styles from "./OurHistory.module.css";
import PawIcon from "@/componentes/icons/PawIcon";
import placeholder from "/public/placeholder.svg";

export default function OurHistory() {
  return (
    <div>
      <section className={styles.ourHistory}>
        <div className={styles.ourHistory__wrapper}>
          <header className={styles.ourHistory__header}>
            <div className={tag.tag}>
              <PawIcon />
              <span>Nossa História</span>
            </div>
            <div>
              <h1 className={styles.ourHistory__header__title}>
                Sobre a Patas Carentes
              </h1>
              <p className={styles.ourHistory__header__description}>
                Conheça nossa jornada, nossa equipe e o impacto que estamos
                fazendo na vida dos animais abandonados.
              </p>
            </div>
          </header>
        </div>
      </section>
      <section className={styles.ourHistory__history}>
        <div className={styles.ourHistory__wrapper}>
          <div className={styles.ourHistory__content}>
            <div className={styles.ourHistory__content__image}>
              <Image
                src={"/founders.png" || placeholder}
                fill
                sizes="(min-width: 1024px) 457px, 90vw"
                alt="placeholder"
                className={styles.zoomOut}
              />
            </div>
            <article>
              <h3 className={styles.ourHistory__content__title}>
                Nossa História
              </h3>
              <p className={styles.ourHistory__content__description}>
                A Patas Carentes nasceu em 2015, quando um grupo de amigos
                apaixonados por animais se uniu após encontrar vários cães e
                gatos abandonados em um terreno baldio na periferia da cidade. O
                que começou como um esforço para resgatar esses animais
                específicos logo se transformou em uma missão maior.
              </p>
              <p className={styles.ourHistory__content__description}>
                Nos primeiros meses, operávamos com lares temporários
                voluntários e uma pequena clínica improvisada. Com o tempo,
                conseguimos estabelecer um abrigo próprio e expandir nossos
                serviços para incluir programas de castração, vacinação e
                educação comunitária.
              </p>
              <p className={styles.ourHistory__content__description}>
                Hoje, a Patas Carentes é reconhecida como uma das principais
                organizações de resgate animal da região, com uma equipe
                dedicada de funcionários e voluntários que trabalham
                incansavelmente para dar uma segunda chance aos animais
                abandonados e maltratados.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
