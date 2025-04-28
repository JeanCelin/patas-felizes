import styles from "./OurNumbers.module.css";

export default function OurNumbers() {
  return (
    <section className={styles.ourNumbers}>
      <div className={styles.ourNumbers__wrapper}>
        <header className={styles.ourNumbers__header}>
          <h1 className={styles.ourNumbers__header__title}> Nossos Números</h1>
          <p className={styles.ourNumbers__header__description}>
            Conheça os números que refletem o nosso trabalho e dedicação.
          </p>
        </header>
        <div className={styles.ourNumbers__content}>
          <div className={styles.ourNumbers__item}>
            <h2 className={styles.ourNumbers__title}>2.000+</h2>
            <p className={styles.ourNumbers__text}>Animais resgatados</p>
          </div>
          <div className={styles.ourNumbers__item}>
            <h2 className={styles.ourNumbers__title}>1.500+</h2>
            <p className={styles.ourNumbers__text}>Adoções Realizadas</p>
          </div>
          <div className={styles.ourNumbers__item}>
            <h2 className={styles.ourNumbers__title}>800+</h2>
            <p className={styles.ourNumbers__text}>Castrações</p>
          </div>
          <div className={styles.ourNumbers__item}>
            <h2 className={styles.ourNumbers__title}>100+</h2>
            <p className={styles.ourNumbers__text}>Voluntários Ativos</p>
          </div>
        </div>
      </div>
    </section>
  );
}