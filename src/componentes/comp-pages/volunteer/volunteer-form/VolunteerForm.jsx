import ButtonPrimary from "@/componentes/ui/button/ButtonPrimary";
import styles from "./VolunteerForm.module.css";

export default function VolunteerForm() {
  return (
    <section className={styles.volunteerForm}>

        <header>
          <h2 className={styles.volunteerForm__header__title}>
            Formulário de Voluntariado
          </h2>
          <p className={styles.volunteerForm__header__text}>
            Preencha o formulário abaixo para se candidatar como voluntário.
            Nossa equipe entrará em contato para agendar uma entrevista.
          </p>
        </header>
        <form className={styles.volunteerForm__form}>
          <div className={styles.volunteerForm__form__grid}>
            <div className={styles.volunteerForm__form__block}>
              <label
                htmlFor="name"
                className={styles.volunteerForm__form__label}>
                Nome Completo
              </label>
              <input
                className={styles.volunteerForm__form__input}
                type="text"
                id="name"
                name="name"
                required
                placeholder="Digite seu nome completo"
              />
            </div>
            <div className={styles.volunteerForm__form__block}>
              <label
                htmlFor="email"
                className={styles.volunteerForm__form__label}>
                Email
              </label>
              <input
                className={styles.volunteerForm__form__input}
                type="email"
                id="email"
                name="email"
                required
                placeholder="seu@email.com"
              />
            </div>
            <div className={styles.volunteerForm__form__block}>
              <label
                htmlFor="phone"
                className={styles.volunteerForm__form__label}>
                Telefone
              </label>
              <input
                className={styles.volunteerForm__form__input}
                type="tel"
                id="phone"
                name="phone"
                pattern="\(\d{2}\) \d{5}-\d{4}"
                required
                placeholder="(00) 00000-0000"
              />
            </div>
            <div className={styles.volunteerForm__form__block}>
              <label
                htmlFor="idade"
                className={styles.volunteerForm__form__label}>
                Idade
              </label>
              <input
                className={styles.volunteerForm__form__input}
                type="number"
                id="idade"
                name="idade"
                required
                placeholder="Sua idade"
              />
            </div>
          </div>
          <div className={styles.volunteerForm__form__block}>
            <label htmlFor="job" className={styles.volunteerForm__form__label}>
              Área de Interesse
            </label>
            <input
              className={styles.volunteerForm__form__input}
              type="text"
              id="job"
              name="job"
              required
              placeholder="Ex: Cuidador de Animais, Lar Temporário, etc."
            />
          </div>
          <div className={styles.volunteerForm__form__block}>
            <label
              htmlFor="availability"
              className={styles.volunteerForm__form__label}>
              Disponibilidade
            </label>
            <input
              className={styles.volunteerForm__form__input}
              type="text"
              id="availability"
              name="availability"
              required
              placeholder="Ex: Finais de semana, tardes de segunda e quarta, etc."
            />
          </div>
          <div className={styles.volunteerForm__form__block}>
            <label
              htmlFor="reason"
              className={styles.volunteerForm__form__label}>
              Por que você quer ser voluntário?
            </label>
            <textarea
              id="reason"
              name="reason"
              required
              placeholder="Conte-nos um pouco sobre você e por que deseja ser voluntário na Patas Carentes"
              className={styles.volunteerForm__form__textarea}
            />
          </div>
          <ButtonPrimary children="Enviar Formulário" />
        </form>
    </section>
  );
}
