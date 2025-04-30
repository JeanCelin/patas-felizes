import HeartIcon from "@/componentes/icons/HeartIcon";
import styles from "./MakeDifferrence.module.css";
import tag from "@/styles/Tag.module.css";
import ButtonPrimary from "@/componentes/ui/button/ButtonPrimary";

export default function MakeDifference() {
  return (
    <section className={styles.makeDifference}>
      <div className={styles.makeDifference__wrapper}>
        <header className={styles.makeDifference__header}>
          <div className={tag.tag}>
            <HeartIcon />
            <span>Faça a Diferença</span>
          </div>
          <div>
            <h1 className={styles.makeDifference__header__title}>
              Apoie Nossa Causa
            </h1>
            <p className={styles.makeDifference__header__description}>
              Sua doação ajuda a salvar vidas e proporcionar cuidados essenciais
              aos animais resgatados.
            </p>
            <div className={styles.makeDifference__button}>
              <ButtonPrimary children="Doar Agora" />
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}
