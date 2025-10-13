import styles from './CategoryHeader.module.css'
import tag from "@/styles/Tag.module.css";

export default function CategoryHeader () {
  return (
          <section className={styles.categoryHeader}>
        <div className={styles.categoryHeader__wrapper}>
          <header className={styles.categoryHeader__header}>
            <div className={tag.tag}>
              <span>Explore por Categoria</span>
            </div>
            <div>
              <h1 className={styles.categoryHeader__header__title}>
                Categoria de Animais
              </h1>
              <p className={styles.categoryHeader__header__description}>
                Navegue por nossas categorias para encontrar o tipo de animal que melhor se adapta ao seu estilo de vida e família.
              </p>
            </div>
          </header>
        </div>
      </section>
  )
}