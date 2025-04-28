import styles from "./Team.module.css";
import tag from "@/styles/Tag.module.css";
import UsersIcon from "@/componentes/icons/UsersIcon";

export default function Team() {
  return (
    <section className={styles.team}>
      <div className={styles.team__wrapper}>
        <header className={styles.team__header}>
          <div className={tag.tag}>
            <UsersIcon />
            <h1>Nossa Equipe</h1>
          </div>
          <h2 className={styles.team__header__title}>Quem Faz Acontecer</h2>
          <p className={styles.team__header__description}>
            Conheça as pessoas dedicadas que trabalham diariamente para cuidar
            dos nossos animais.
          </p>
        </header>
      </div>
    </section>
  );
}
