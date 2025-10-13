import Image from "next/image";
import styles from "./CategoryCard.module.css";
import categoriesData from "@/data/categories";
import animalsData from "@/data/animals";
import ButtonPrimary from "../button/ButtonPrimary";
import ArrowRightIcon from "@/componentes/icons/ArrowRightIcon";

export default function CategoryCard() {
  // Contagem simples por categoria
  const dogsCount = animalsData.filter(
    (animal) => animal.category === "dogs"
  ).length;


  const catsCount = animalsData.filter(
    (animal) => animal.category === "cats"
  ).length;


  const othersCount = animalsData.filter(
    (animal) => animal.category === "others"
  ).length;


  // Agora mapeia as categorias e adiciona o número correspondente
  const categories = categoriesData.map((category, index) => {
    let count = 0; // começa em 0 e define de acordo com o id


    if (category.id === "dogs") {
      count = dogsCount;

    } else if (category.id === "cats") {
      count = catsCount;

    } else if (category.id === "others") {
      count = othersCount;

    }

    return (
      <li key={index} className={styles.categoryCard__card}>
        <div className={styles.categoryCard__header}>
          <div className={styles.categoryCard__image}>
            <Image
              src={category.iconUrl || "/placeholder.svg"}
              alt={category.alt}
              loading="lazy"
              fill
              className={styles.image}
              sizes="50px"
            />

          </div>
          <h2>{category.title}</h2>
          <p>{category.text}</p>
          <div className={styles.categoryCard__count}>
            <span>{count} </span>
            <p>animais disponíveis</p>{" "}
          </div>
        </div>

        <ButtonPrimary width="100%">Ver {category.title}</ButtonPrimary>
      </li>
    );
  });

  return <ul className={styles.categoryCard__container}>{categories}</ul>;
}
