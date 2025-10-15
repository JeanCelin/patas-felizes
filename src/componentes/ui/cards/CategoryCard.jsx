import Image from "next/image";
import styles from "./CategoryCard.module.css";
import categoriesData from "@/data/categories";
import ButtonPrimary from "../button/ButtonPrimary";
import { getCategoryCounts } from "@/utils/categoryCountUtils";
import Link from "next/link";

export default function CategoryCard() {
  const counts = getCategoryCounts();

  return (
    <ul className={styles.categoryCard__container}>
      {categoriesData.map((category, index) => {
        const count = counts[category.id] || 0;
        console.log(category);
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
                    fill
                    className={styles.image}
                    sizes="50px"
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
