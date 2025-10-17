import styles from "./page.module.css";

import Header from "@/app/(pages)/category/(category-components)/CategoryHeader";
import CategoryFooter from "@/app/(pages)/category/(category-components)/CategoryFooter";
import CategoryCard from "@/componentes/ui/cards/CategoryCard";

export default function Category() {
  return (
    <section className={styles.category}>
      <Header />
      <section className={styles.category__card}>
        <CategoryCard />
      </section>
      <section className={styles.category__footer}>
        <CategoryFooter />
      </section>
    </section>
  );
}
