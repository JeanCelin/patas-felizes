import animalsData from "@/data/animals";
import styles from "./page.module.css";
import Image from "next/image";

export default async function AnimalProfile({ params }) {
  const { animals } = await params;
  console.log(animals);
  let animalId = animals[1];

  animalId = animalsData.find((animal) => animal.id === animalId);

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
        informaçãos dos Dogs
      </section>
    </section>
  );
}
