import styles from "./ContactForm.module.css";

import ButtonPrimary from "@/componentes/ui/button/ButtonPrimary";

export default function ContactForm() {
  return (
    <section className={styles.contactForm}>
   
        <header>
          <h2 className={styles.contactForm__header__title}>
            Envie uma Mensagem
          </h2>
          <p className={styles.contactForm__header__text}>
            Preencha o formulário abaixo e entraremos em contato o mais breve
            possível.
          </p>
        </header>
        <form className={styles.contactForm__form}>
          <div className={styles.contactForm__form__grid}>
            <div className={styles.contactForm__form__block}>
              <label htmlFor="name" className={styles.contactForm__form__label}>
                Nome Completo
              </label>
              <input
                className={styles.contactForm__form__input}
                type="text"
                id="name"
                name="name"
                required
                placeholder="Digite seu nome completo"
              />
            </div>
            <div className={styles.contactForm__form__block}>
              <label
                htmlFor="email"
                className={styles.contactForm__form__label}>
                Email
              </label>
              <input
                className={styles.contactForm__form__input}
                type="email"
                id="email"
                name="email"
                required
                placeholder="seu@email.com"
              />
            </div>
            <div className={styles.contactForm__form__block}>
              <label
                htmlFor="phone"
                className={styles.contactForm__form__label}>
                Telefone
              </label>
              <input
                className={styles.contactForm__form__input}
                type="tel"
                id="phone"
                name="phone"
                pattern="\(\d{2}\) \d{5}-\d{4}"
                required
                placeholder="(00) 00000-0000"
              />
            </div>
            <div className={styles.contactForm__form__block}>
              <label
                htmlFor="subject"
                className={styles.contactForm__form__label}>
                Assunto
              </label>
              <input
                className={styles.contactForm__form__input}
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Ex: Adoção, Doação, Voluntariado, etc."
              />
            </div>
          </div>

          <div className={styles.contactForm__form__block}>
            <label
              htmlFor="message"
              className={styles.contactForm__form__label}>
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Digite sua mensagem aqui"
              className={styles.contactForm__form__textarea}
            />
          </div>
          <ButtonPrimary children="Enviar Mensagem" />
        </form>
    </section>
  );
}
