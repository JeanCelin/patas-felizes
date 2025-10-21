import styles from "./ContactHero.module.css";
import tag from "@/styles/Tag.module.css";

import MessageSquareIcon from "@/components/icons/MessageSquare";

export default function ContactHero() {
  return (
    <div>
      <section className={styles.contactHero}>
        <div className={styles.contactHero__wrapper}>
          <header className={styles.contactHero__header}>
            <div className={tag.tag}>
              <MessageSquareIcon />
              <span>Fale Conosco</span>
            </div>
            <div>
              <h1 className={styles.contactHero__header__title}>
                Entre em Contato
              </h1>
              <p className={styles.contactHero__header__description}>
                Estamos aqui para responder suas dúvidas e ouvir suas sugestões.
                Entre em contato conosco.
              </p>
            </div>
          </header>
        </div>
      </section>
    </div>
  );
}
