import styles from "./FindFriend.module.css";
import tag from "@/styles/Tag.module.css";

import HeartIcon from "@/componentes/icons/HeartIcon";

export default function FindFriend() {
  return (
    <section className={styles.findFriend}>
      <div className={styles.findFriend__wrapper}>
        <header className={styles.findFriend__header}>
          <div className={tag.tag}>
            <HeartIcon />
            <span>Encontre um Amigo</span>
          </div>
          <div className={styles.findFriend__header__description}>
            <h1 className={styles.findFriend__header__title}>Adote um Pet</h1>
            <p className={styles.findFriend__header__description}>
              Conheça nossos animais disponíveis para adoção e dê a eles uma
              segunda chance de serem felizes.
            </p>
          </div>
        </header>
      </div>
    </section>
  );
}
