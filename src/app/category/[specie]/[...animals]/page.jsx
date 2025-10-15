import animalsData from "@/data/animals";
import styles from "./page.module.css";

import AnimalPhotos from "@/componentes/comp-pages/animal-profile/photos/AnimalPhotos";
import ProfileHeader from "@/componentes/comp-pages/animal-profile/profile/ProfileHeader";
import ProfileHealth from "@/componentes/comp-pages/animal-profile/profile/ProfileHealth";
import ProfileCompatibility from "@/componentes/comp-pages/animal-profile/profile/ProfileCompatibility";
import ProfileButtons from "@/componentes/comp-pages/animal-profile/profile/ProfileButtons";
import ProfileAbout from "@/componentes/comp-pages/animal-profile/about/ProfileAbout";
import AdoptForm from "@/componentes/comp-pages/adopt/adopt-form/AdoptForm";
import ButtonSecondary from "@/componentes/ui/button/ButtonSecondary";
import Link from "next/link";
import ArrowLeftIcon from "@/componentes/icons/ArrowLeftIcon";

export default async function AnimalProfile({ params }) {
  const { animals } = await params;
  console.log(animals);
  console.log(animalsData);
  let slug = animals[0];
  console.log(slug);
  let animalData = animalsData.find((animal) => animal.slug === slug);

  console.log(animalData);

  return (
    <>
      <section className={styles.animalProfile}>
        <div className={styles.buttonBack__container}>
          <Link href={`/category/${animalData.category}`}>
            <ButtonSecondary children={"Voltar"} icon={<ArrowLeftIcon />} />
          </Link>
        </div>
        <div className={styles.animalProfile__photos}>
          <AnimalPhotos images={animalData.images || "/placeholder.svg"} />
        </div>
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
                <span className={styles.adoptionFee__title}>
                  Taxa de Adoção:
                </span>
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
      <section className={styles.profileAbout}>
        <ProfileAbout about={animalData.about} name={animalData.name} />
      </section>
      <section className={styles.profileAdoptForm}>
        <AdoptForm align={"center"} textAlign={"center"} />
      </section>
    </>
  );
}
