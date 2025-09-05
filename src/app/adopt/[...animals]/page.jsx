import animalsData from "@/data/animals";
import styles from "./page.module.css";
import Image from "next/image";
import HeartIcon from "@/componentes/icons/HeartIcon";

export default async function AnimalProfile({ params }) {
  const { animals } = await params;
  console.log(animals);
  let animalId = animals[1];
  let animalData = animalsData.find((animal) => animal.id === animalId);
  console.log(animalData);
  return (
    <section className={styles.animalProfile}>
      <section className={styles.photosContainer}>
        <div className={`${styles.photoMain}`}>
          <Image src={"/placeholder.svg"} alt="Foto principal do animal" fill />
        </div>
        <div className={`${styles.photoSecondary}`}>
          <Image src={"/placeholder.svg"} alt="Foto principal do animal" fill />
        </div>
        <div className={`${styles.photoSecondary}`}>
          <Image src={"/placeholder.svg"} alt="Foto principal do animal" fill />
        </div>
        <div className={`${styles.photoSecondary}`}>
          <Image src={"/placeholder.svg"} alt="Foto principal do animal" fill />
        </div>
      </section>
      <section className={styles.profileContainer}>
        <section className={styles.profileHeader}>
          <div className={styles.profileHeader__info}>
            <div className={styles.profileHeader__name__container}>
              <h1 className={styles.profileHeader__name}>{animalData.name}</h1>
              <span className={styles.status}>
                {animalData.status === true ? "Disponível" : "Indisponível"}
              </span>
            </div>
            <p className={styles.profileHeader__breed}>{animalData.breed}</p>
          </div>
          <div className={styles.profileHeader__info__container}>
            <div className={styles.profileHeader__info__item}>
              <HeartIcon />
              <p>
                {animalData.age > 1
                  ? `${animalData.age} anos`
                  : `${animalData.age} ano`}
              </p>
            </div>
            <div className={styles.profileHeader__info__item}>
              <HeartIcon />
              <p>{`Porte ${animalData.size}`}</p>
            </div>
            <div className={styles.profileHeader__info__item}>
              <HeartIcon />
              <p>{` ${animalData.weight} kg`}</p>
            </div>
            <div className={styles.profileHeader__info__item}>
              <HeartIcon />
              <p>{` ${animalData.location}`}</p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
