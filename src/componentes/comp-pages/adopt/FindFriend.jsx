import styles from "./FindFriend.module.css";
import tag from "@/styles/Tag.module.css";

import HeartIcon from "@/componentes/icons/HeartIcon";

export default function FindFriend() {
  return (
    <div className={styles.findFriend}>
      <div className={styles.findFriend__wrapper}>
        <section className={styles.findFriend__section}>
          <header className={styles.findFriend__header}>
            <div className={tag.tag}>
              <HeartIcon />
              <h1>Encontre um Amigo</h1>
            </div>
            <div className={styles.findFriend__header__description}>
              <h2 className={styles.findFriend__header__title}>Adote um Pet</h2>
              <p className={styles.findFriend__header__description}>
                Conheça nossos animais disponíveis para adoção e dê a eles uma
                segunda chance de serem felizes.
              </p>
            </div>
          </header>
        </section>
      </div>
    </div>
  );
}
