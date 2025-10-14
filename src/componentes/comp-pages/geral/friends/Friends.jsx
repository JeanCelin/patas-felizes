import animals from "@/data/animals";
import PetCard from "@/componentes/ui/cards/PetCard";
import styles from "./Friends.module.css";
import tag from "@/styles/Tag.module.css";
import HeartIcon from "@/componentes/icons/HeartIcon";
import ButtonSecondary from "@/componentes/ui/button/ButtonSecondary";
import Link from "next/link";
export default function Friends() {

  function getFirstAnimalSlugs(limit = 6) {
    return animals.slice(0, limit).map((animal) => animal.slug);
  }
  
  const slugs = getFirstAnimalSlugs();

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
          {slugs.length > 0 ? (
            slugs.map((slug) => <PetCard key={slug} slug={slug} />)
          ) : (
            <p>Nenhum animal disponível no momento.</p>
          )}
        </div>

        <div className={styles.friends__buttonMore}>
          <Link href={'/adopt/category'}>
          <ButtonSecondary>Ver Todos os Pets Disponíveis</ButtonSecondary>
          </Link>
        </div>
      </div>
    </section>
  );
}
