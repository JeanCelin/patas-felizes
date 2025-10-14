import Header from "@/componentes/comp-pages/category/header/CategoryHeader";
import styles from "./page.module.css";
import CategoryCard from "@/componentes/ui/cards/CategoryCard";
import CategoryFooter from "@/componentes/comp-pages/category/footer/CategoryFooter";

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
