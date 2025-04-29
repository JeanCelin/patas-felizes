import styles from "./HowWork.module.css";

export default function HowWork() {
  return (
    <article className={styles.howWork}>
      <div className={styles.howWork__wrapper}>
 
      <header className={styles.howWork__header}>
        <h2 className={styles.howWork__title}>Como Funciona a Adoção</h2>
        <p className={styles.howWork__text}>
          Nosso processo de adoção foi desenvolvido para garantir que cada
          animal encontre um lar amoroso e adequado às suas necessidades.
        </p>
      </header>
      <section className={styles.howWork__steps}>
        <section className={styles.howWork__step}>
          <div className={styles.howWork__stepNumber__container}>
            <span className={styles.howWork__stepNumber}>1</span>
          </div>
          <h3 className={styles.howWork__stepTitle}> Escolha um Pet</h3>
          <p className={styles.howWork__stepText}>
            Navegue por nossa galeria de animais disponíveis e encontre aquele
            que toca seu coração.
          </p>
        </section>
        <section className={styles.howWork__step}>
          <div className={styles.howWork__stepNumber__container}>
            <span className={styles.howWork__stepNumber}>2</span>
          </div>
          <h3 className={styles.howWork__stepTitle}> Preencha o Formulário</h3>
          <p className={styles.howWork__stepText}>
            Complete nosso formulário de adoção para que possamos conhecer
            melhor você e seu ambiente.
          </p>
        </section>
        <section className={styles.howWork__step}>
          <div className={styles.howWork__stepNumber__container}>
            <span className={styles.howWork__stepNumber}>3</span>
          </div>
          <h3 className={styles.howWork__stepTitle}> Entrevista e Visita</h3>
          <p className={styles.howWork__stepText}>
            Realizamos uma entrevista e, se necessário, uma visita ao seu lar
            para garantir um ambiente adequado.
          </p>
        </section>
        <section className={styles.howWork__step}>
          <div className={styles.howWork__stepNumber__container}>
            <span className={styles.howWork__stepNumber}>4</span>
          </div>
          <h3 className={styles.howWork__stepTitle}> Adoção Finalizada</h3>
          <p className={styles.howWork__stepText}>
            Após aprovação, você assina o termo de adoção e leva seu novo amigo
            para casa!
          </p>
        </section>
      </section>
      </div>
    </article>
  );
}
