import styles from "./ToHelp.module.css";

import tag from "@/styles/tag.module.css";
import description from "@/styles/description.module.css";
import HandHeartIcon from "@/componentes/icons/HandHearthIcon";

export default function ToHelp() {
  return (
    <section className={styles.toHelp}>
      <div className={styles.toHelp__container}>
        <div className={tag.tag}>
          <HandHeartIcon />
          <h1>Participe</h1>
        </div>
        <h2 className={`${description.title} ${styles.toHelp__center}`}>Como Você Pode Ajudar</h2>
        <p className={`${description.text} ${styles.toHelp__center}`}>
          Existem muitas maneiras de apoiar nossa missão e fazer a diferença na
          vida dos animais necessitados.
        </p>
      </div>
    </section>
  );
}
