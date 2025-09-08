import animalsData from "@/data/animals";
import styles from "./page.module.css";
import AnimalPhotos from "@/componentes/comp-pages/animal-profile/photos/AnimalPhotos";
import ProfileHeader from "@/componentes/comp-pages/animal-profile/profile/ProfileHeader";
import ProfileHealth from "@/componentes/comp-pages/animal-profile/profile/ProfileHealth";
import ProfileCompatibility from "@/componentes/comp-pages/animal-profile/profile/ProfileCompatibility";
import ProfileButtons from "@/componentes/comp-pages/animal-profile/profile/ProfileButtons";

export default async function AnimalProfile({ params }) {
  const { animals } = await params;
  console.log(animals);
  let animalId = animals[1];
  let animalData = animalsData.find((animal) => animal.id === animalId);
  console.log(animalData);
  return (
    <section className={styles.animalProfile}>
      <AnimalPhotos images={animalData.images} />
      <section className={styles.profileContainer}>
        <ProfileHeader
          name={animalData.name}
          breed={animalData.breed}
          status={animalData.status}
          age={animalData.age}
          size={animalData.size}
          weight={animalData.weight}
          location={animalData.location}
        />
        <ProfileHealth health={animalData.health} />

        <ProfileCompatibility compatibility={animalData.compatibility} />
        <div>
          <ProfileButtons name={animalData.name} />
          <section className={styles.adoptionFee__container}>
            <div className={styles.adoptionFee__content}>
              <span className={styles.adoptionFee__title}>Taxa de Adoção:</span>
              <span
                className={
                  styles.adoptionFee__value
                }>{`R$ ${animalData.adoptionFee}`}</span>
            </div>
            <p className={styles.adoptionFee__note}>
              Inclui vacinação, castração e microchip
            </p>
          </section>
        </div>
      </section>
    </section>
  );
}
