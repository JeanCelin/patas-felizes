import styles from "./CategoryFooter.module.css";
import Link from "next/link";
import ButtonPrimary from "@/componentes/ui/button/ButtonPrimary";

export default function CategoryFooter() {
  return (
    <section className={styles.categoryFooter}>
      <div className={styles.categoryFooter__wrapper}>
        <header className={styles.categoryFooter__header}>
          <div>
            <h1 className={styles.categoryFooter__header__title}>
              Não Sabe Qual Escolher?
            </h1>
            <p className={styles.categoryFooter__header__description}>
              Cada animal tem sua própria personalidade e necessidades. Nossa equipe está aqui para ajudá-lo a encontrar o companheiro perfeito para você e sua família.
            </p>
            <div className={styles.categoryFooter__button}>
              <Link href={'/contact'} style={{ textDecoration: "none" }}>
                <ButtonPrimary children="Fale Conosco" />
              </Link>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}
