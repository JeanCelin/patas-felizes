import ButtonPrimary from "@/componentes/ui/button/ButtonPrimary";
import styles from "./AnimalListFooter.module.css";
import Link from "next/link";

export default function AnimalListFooter() {
  return (
    <section className={styles.animalList}>
      <div className={styles.animalList__wrapper}>
        <section className={styles.animalList__header}>
          <div>
            <h2 className={styles.animalList__header__title}>
              Não Sabe Qual Escolher?
            </h2>
            <p className={styles.animalList__header__description}>
              Cada animal tem sua própria personalidade e necessidades. Nossa
              equipe está aqui para ajudá-lo a encontrar o companheiro perfeito
              para você e sua família.
            </p>
          </div>
        </section>
        <div className={styles.animalList__button}>
          <Link href={"/contact"} style={{textDecoration: "none"}}>
            <ButtonPrimary children="Fale Conosco" />
          </Link>
        </div>
      </div>
    </section>
  );
}
