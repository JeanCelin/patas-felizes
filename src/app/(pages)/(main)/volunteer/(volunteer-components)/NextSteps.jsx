import styles from "./NextSteps.module.css";

import HeartIcon from "@/componentes/icons/HeartIcon";

export default function NextSteps() {
  return (
    <article className={styles.nextSteps}>
      <header className={styles.nextSteps__header}>
        <h2 className={styles.nextSteps__header__title}>Próximos Passos</h2>
        <p className={styles.nextSteps__header__text}>
          Após o envio do seu formulário, este é o processo que seguiremos:
        </p>
      </header>
      <ul className={styles.nextSteps__list}>
        <li className={styles.nextSteps__list__item}>
          <span className={styles.nextSteps__list__number}>1</span>
          <p className={styles.nextSteps__list__item__text}>
            Revisão do seu formulário pela nossa equipe de coordenação de
            voluntários (1-2 dias úteis).
          </p>
        </li>
        <li className={styles.nextSteps__list__item}>
          <span className={styles.nextSteps__list__number}>2</span>
          <p className={styles.nextSteps__list__item__text}>
            Contato por email ou telefone para agendar uma entrevista presencial
            ou virtual.
          </p>
        </li>
        <li className={styles.nextSteps__list__item}>
          <span className={styles.nextSteps__list__number}>3</span>
          <p className={styles.nextSteps__list__item__text}>
            Entrevista para conhecermos melhor você e suas motivações, e para
            você conhecer mais sobre nosso trabalho.
          </p>
        </li>
        <li className={styles.nextSteps__list__item}>
          <span className={styles.nextSteps__list__number}>4</span>
          <p className={styles.nextSteps__list__item__text}>
            Sessão de orientação e treinamento específico para a área em que
            você vai atuar.
          </p>
        </li>
        <li className={styles.nextSteps__list__item}>
          <span className={styles.nextSteps__list__number}>5</span>
          <p className={styles.nextSteps__list__item__text}>
            Início das atividades como voluntário, sempre com o apoio de
            voluntários experientes.
          </p>
        </li>
      </ul>
      <aside className={styles.nextSteps__aside}>
        <HeartIcon color="var(--color4)" />
        <div className={styles.nextSteps__aside__content}>
          <span>Importante</span>
          <p>
            Cada hora que você dedica como voluntário faz uma diferença real na
            vida de um animal necessitado. Junte-se a nós nessa missão de amor e
            cuidado!
          </p>
        </div>
      </aside>
    </article>
  );
}
