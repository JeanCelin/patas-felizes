import PetCard from "@/componentes/ui/cards/PetCard";
import styles from "./page.module.css";
import tag from "@/styles/Tag.module.css";
import categoriesData from "@/data/categories";
import { getCategoryCounts } from "@/utils/categoryCountUtils";
import Image from "next/image";
import animals from "@/data/animals";
import ButtonPrimary from "@/componentes/ui/button/ButtonPrimary";
import ButtonSecondary from "@/componentes/ui/button/ButtonSecondary";
import Link from "next/link";
import AnimalListFooter from "@/componentes/comp-pages/animals-list/AnimalListFooter";

export default async function Specie({ params }) {
  const { specie } = await params;
  console.log(specie);
  const counts = getCategoryCounts();

  const category = categoriesData.find((animal) => animal.id === specie);
  console.log(category);

  if (!category) return <h1>Categoria não encontrada</h1>;

  console.log(animals);
  let animalsList = animals.filter(
    (animals) => animals.category == category.id
  );
  console.log(animalsList);
  return (
    <section className={styles.specie__container}>
      <div className={styles.specie__header}>
        <Image
          src={category.iconUrl || "/placeholder.svg"}
          alt={category.alt}
          width={100}
          height={100}
        />
        <h2
          className={
            styles.specie__title
          }>{`${category.title} para Adoção`}</h2>
        <p>Encontre seu melhor amigo</p>
        <p className={tag.tag}>{counts[specie]} animais disponíveis</p>
        <div className={styles.specie__header__buttons}>
          <div>
            <Link href={"/adopt/category"} style={{ textDecoration: "none" }}>
              <ButtonSecondary
                width="100%"
                maxWidth="200px"
                children="     Voltar"
              />
            </Link>
          </div>
          <div>
            <Link href={"/contact"} style={{ textDecoration: "none" }}>
              <ButtonPrimary
                width="100%"
                maxWidth="200px"
                children={"Fale Conosco"}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.specie__cards__container}>
        {animalsList.map((animal, index) => {
          return (
            <div key={index} className={styles.specie__cards}>
              <PetCard slug={animal.slug} />
            </div>
          );
        })}
      </div>
      <section>
        <AnimalListFooter />
      </section>
    </section>
  );
}
