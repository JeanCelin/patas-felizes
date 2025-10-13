import Header from "@/componentes/comp-pages/category/header/CategoryHeader";
import styles from "./page.module.css";
import CategoryCard from "@/componentes/ui/cards/CategoryCard";

export default function Category() {
  return (
    <>
      <Header />
      <section className={styles.category__card}>
        <CategoryCard />

      </section>
    </>
  );
}
