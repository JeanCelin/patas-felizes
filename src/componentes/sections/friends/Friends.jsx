import styles from "./Friends.module.css";
import tag from "@/styles/Tag.module.css";
import description from "@/styles/Description.module.css";

import HeartIcon from "@/componentes/icons/HearthIcon";

export default function Friends() {
  return (
    <section className={styles.friends}>
      <div className={styles.friends__container}>
        <div className={tag.tag}>
          <HeartIcon />
          <h1>Encontre um Amigo</h1>
        </div>
        <h2 className={`${description.title} ${styles.friends__text_center}`}>Conheça Nossos Pets para Adoção</h2>
        <p className={`${description.text} ${styles.friends__text_center}`}>
          Estes animais amorosos estão esperando por seus lares definitivos.
          Você poderia ser a combinação perfeita?
        </p>
      </div>
    </section>
  );
}
