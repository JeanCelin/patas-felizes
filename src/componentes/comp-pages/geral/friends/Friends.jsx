import animals from "@/data/animals";
import PetCard from "@/componentes/ui/cards/PetCard";
import styles from "./Friends.module.css";
import tag from "@/styles/Tag.module.css";
import HeartIcon from "@/componentes/icons/HeartIcon";
import ButtonSecondary from "@/componentes/ui/button/ButtonSecondary";

export default function Friends() {
  return (
    <section className={styles.friends}>
      <div className={styles.friends__wrapper}>
        <header className={styles.friends__container}>
          <div className={tag.tag}>
            <HeartIcon />
            <span>Encontre um Amigo</span>
          </div>
          <h2 className={styles.friends__title}>
            Conheça Nossos Pets para Adoção
          </h2>
          <p className={styles.friends__text}>
            Estes animais amorosos estão esperando por seus lares definitivos.
            Você poderia ser a combinação perfeita?
          </p>
        </header>
        <div className={styles.friends__cards}>
          <PetCard id="max" />
          {/* <PetCard id="bob" />
          <PetCard id="mel" />
          <PetCard id="luna" />
          <PetCard id="thor" />
          <PetCard id="duck" /> */}
        </div>
        <div className={styles.friends__buttonMore}>
          <ButtonSecondary children="Ver Todos os Pets Disponíveis" />
        </div>
      </div>
    </section>
  );
}
