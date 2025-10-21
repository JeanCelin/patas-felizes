import Link from "next/link";

import animalsData from "@/data/animals";

import styles from "./page.module.css";

import AnimalPhotos from "@/app/(pages)/category/[specie]/[...animals]/(animals-components)/AnimalPhotos";
import ProfileHeader from "@/app/(pages)/category/[specie]/[...animals]/(animals-components)/ProfileHeader";
import ProfileHealth from "@/app/(pages)/category/[specie]/[...animals]/(animals-components)/ProfileHealth";
import ProfileCompatibility from "@/app/(pages)/category/[specie]/[...animals]/(animals-components)/ProfileCompatibility";
import ProfileButtons from "@/app/(pages)/category/[specie]/[...animals]/(animals-components)/ProfileButtons";
import ProfileAbout from "@/app/(pages)/category/[specie]/[...animals]/(animals-components)/ProfileAbout";
import AdoptForm from "@/app/(pages)/adopt/(adopt-components)/AdoptForm";
import ButtonSecondary from "@/components/ui/button/ButtonSecondary";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";

export async function generateMetadata({ params }) {
  const { animals } = await params;
  return {
    title: "Adote" + ` ${animals}`.toUpperCase(),
    description: `Adote ${animals} e dê uma segunda chance de recomeço.`,
    keywords: [
      "adoção de cães",
      "adoção de gatos",
      "ONG",
      "pets",
      "raça",
      "melhor amigo",
    ],
  };
}

export default async function AnimalProfile({ params }) {
  const { animals } = await params;
  let slug = animals[0];
  let animalData = animalsData.find((animal) => animal.slug === slug);
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
