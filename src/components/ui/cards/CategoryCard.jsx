import Link from "next/link";
import Image from "next/image";

import { getCategoryCounts } from "@/utils/categoryCountUtils";

import styles from "./CategoryCard.module.css";

import categoriesData from "@/data/categories";
import ButtonPrimary from "../button/ButtonPrimary";



export default function CategoryCard() {
  // Obetem o valor total de animais dentro de cada categoria
  const counts = getCategoryCounts();

  return (
    <ul className={styles.categoryCard__container}>


    {/* Utiliza os dados em categoriesData.js para criar os cards de cada categoria.  */}
      {categoriesData.map((category, index) => {
        const count = counts[category.id] || 0;
        return (
          <li key={index} className={styles.categoryCard__card}>
            <Link
              href={`/category/${category.id}`}
              style={{ textDecoration: "none", color: "var(--color-font)" }}>
              <div className={styles.categoryCard__header}>
                <div className={styles.categoryCard__image}>
                  <Image
                    src={category.iconUrl || "/placeholder.svg"}
                    alt={category.alt}
                    loading="lazy"
                    width={96}
                    height={96}
                    className={styles.image}
                    
                  />
                </div>
                <h2>{category.title}</h2>
                <p>{category.text}</p>
                <div className={styles.categoryCard__count}>
                  <span>{count}</span>
                  <p>animais disponíveis</p>
                </div>
              </div>
              <ButtonPrimary width="100%">Ver {category.title}</ButtonPrimary>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
