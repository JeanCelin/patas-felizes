import styles from "./AdoptForm.module.css";

import ButtonPrimary from "@/components/ui/button/ButtonPrimary";

export default function AdoptForm({ align, textAlign }) {
  return (
    <section className={styles.adoptForm}>
      <header
        className={styles.adoptForm__header}
        style={{ alignItems: align }}>
        <h2
          className={styles.adoptForm__header__title}
          style={{ textAlign: textAlign }}>
          Formulário de Adoção
        </h2>
        <p
          className={styles.adoptForm__header__text}
          style={{ textAlign: textAlign }}>
          Preencha o formulário abaixo para iniciar o processo de adoção.
          Entraremos em contato em até 48 horas.
        </p>
      </header>

      <form className={styles.adoptForm__form}>
        <div className={styles.form__group}>
          <label className={styles.form__group__label} htmlFor="name">
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Digite seu nome completo"
            className={styles.form__group__input}
          />
        </div>

        <div className={styles.form__group}>
          <label className={styles.form__group__label} htmlFor="phone">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="\(\d{2}\) \d{5}-\d{4}"
            required
            placeholder="(00) 00000-0000"
            className={styles.form__group__input}
          />
        </div>

        <div className={styles.form__group}>
          <label className={styles.form__group__label} htmlFor="pet">
            Pet de Interesse
          </label>
          <input
            type="text"
            id="pet"
            name="pet"
            required
            placeholder="Nome do pet que deseja adotar"
            className={styles.form__group__input}
          />
        </div>

        <div className={styles.form__group}>
          <label className={styles.form__group__label} htmlFor="reason">
            Por que você quer adotar esse pet?
          </label>
          <textarea
            id="reason"
            name="reason"
            rows="4"
            required
            placeholder="Conte-nos um pouco sobre você e por que deseja adotar esse animal"
            className={styles.form__group__textarea}></textarea>
        </div>

        <ButtonPrimary children="Enviar Formulário" />
      </form>
    </section>
  );
}
