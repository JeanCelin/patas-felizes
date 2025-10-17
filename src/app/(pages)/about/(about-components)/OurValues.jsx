import styles from "./OurValues.module.css";
import tag from "@/styles/Tag.module.css";

import HeartIcon from "@/componentes/icons/HeartIcon";
import AwardIcon from "@/componentes/icons/AwardIcon";
import UsersIcon from "@/componentes/icons/UsersIcon";
import Card from "@/componentes/ui/cards/HelpCard";

export default function OurValues() {
  return (
    <section className={styles.ourValues}>
      <div className={styles.ourValues__wrapper}>
        <header className={styles.ourValues__header}>
          <div className={tag.tag}>
            <HeartIcon />
            <span>Nossos Valores</span>
          </div>
          <h2 className={styles.ourValues__header__title}>O Que Nos Guia</h2>
          <p className={styles.ourValues__header__text}>
            Nossos valores fundamentais orientam todas as nossas ações e
            decisões.
          </p>
        </header>
        <div className={styles.ourValues__cards}>
          <Card
            icon={<HeartIcon size={24} />}
            title="Compaixão"
            text="Tratamos cada animal com amor e respeito, reconhecendo seu valor intrínseco e direito ao bem-estar."
            backgroundColor="white"
          />
          <Card
            icon={<AwardIcon size={24} />}
            title="Responsabilidade"
            text="Assumimos o compromisso de cuidar dos animais sob nossa guarda e de usar os recursos doados com transparência."
            backgroundColor="white"
          />
          <Card
            icon={<UsersIcon size={24} />}
            title="Comunidade"
            text="Acreditamos no poder da comunidade para transformar a vida dos animais e promover a posse responsável."
            backgroundColor="white"
          />
        </div>
      </div>
    </section>
  );
}
