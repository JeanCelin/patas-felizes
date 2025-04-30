import PawIcon from "@/componentes/icons/PawIcon";
import styles from "./Commitment.module.css";
import CalendarIcon from "@/componentes/icons/CalendarIcon";
import UsersIcon from "@/componentes/icons/UsersIcon";
import HeartIcon from "@/componentes/icons/HeartIcon";
import GraduationCapIcon from "@/componentes/icons/GraduationCapIcon";
import CircleCheckBigIcon from "@/componentes/icons/CircleCheckBigIcon";

export default function Commitment() {
  return (
    <article className={styles.commitment}>
      <div className={styles.commitment__wrapper}>
        <header className={styles.commitment__header}>
          <h2 className={styles.commitment__header__title}>
            Compromisso do Voluntário
          </h2>
          <p className={styles.commitment__header__text}>
            Para garantir o bem-estar dos animais e o bom funcionamento da
            organização, pedimos que nossos voluntários:
          </p>
        </header>
        <section className={styles.commitment__sections}>
          <section className={styles.commitment__item}>
            <div className={styles.commitment__item__icon}>
              <PawIcon color="var(--color4)" />
            </div>
            <div className={styles.commitment__item__content}>
              <h3 className={styles.commitment__title}>Compromisso de Tempo</h3>
              <p className={styles.commitment__text}>
                Pedimos um compromisso mínimo de 4 horas por mês, com horários
                flexíveis disponíveis.
              </p>
            </div>
          </section>
          <section className={styles.commitment__item}>
            <div className={styles.commitment__item__icon}>
              <CalendarIcon color="var(--color4)" />
            </div>
            <div className={styles.commitment__item__content}>
              <h3 className={styles.commitment__title}>Regularidade</h3>
              <p className={styles.commitment__text}>
                Mantenha um cronograma regular para que possamos contar com sua
                ajuda e os animais possam se acostumar com você.
              </p>
            </div>
          </section>
          <section className={styles.commitment__item}>
            <div className={styles.commitment__item__icon}>
              <UsersIcon color="var(--color4)" />
            </div>
            <div className={styles.commitment__item__content}>
              <h3 className={styles.commitment__title}>Trabalho em Equipe</h3>
              <p className={styles.commitment__text}>
                Trabalhe bem com outros voluntários e funcionários, respeitando
                as diretrizes e procedimentos.
              </p>
            </div>
          </section>
          <section className={styles.commitment__item}>
            <div className={styles.commitment__item__icon}>
              <HeartIcon color="var(--color4)" />
            </div>
            <div className={styles.commitment__item__content}>
              <h3 className={styles.commitment__title}>Compaixão</h3>
              <p className={styles.commitment__text}>
              Trate todos os animais com gentileza, paciência e respeito, independentemente de sua condição.
              </p>
            </div>
          </section>
          <section className={styles.commitment__item}>
            <div className={styles.commitment__item__icon}>
              <GraduationCapIcon color="var(--color4)" />
            </div>
            <div className={styles.commitment__item__content}>
              <h3 className={styles.commitment__title}>Aprendizado</h3>
              <p className={styles.commitment__text}>
              Esteja disposto a aprender e seguir os protocolos de cuidados com os animais e segurança.
              </p>
            </div>
          </section>
          <section className={styles.commitment__item}>
            <div className={styles.commitment__item__icon}>
              <CircleCheckBigIcon color="var(--color4)" />
            </div>
            <div className={styles.commitment__item__content}>
              <h3 className={styles.commitment__title}>Confiabilidade</h3>
              <p className={styles.commitment__text}>
              Cumpra seus compromissos e avise com antecedência se não puder comparecer.
              </p>
            </div>
          </section>

        </section>
      </div>
    </article>
  );
}
