// app/animals/[specie]/layout.js
import Image from "next/image";
import Link from "next/link";

import categoriesData from "@/data/categories";

import { getCategoryCounts } from "@/utils/categoryCountUtils";

import styles from "./page.module.css";
import tag from "@/styles/Tag.module.css";

import ButtonPrimary from "@/components/ui/button/ButtonPrimary";
import ButtonSecondary from "@/components/ui/button/ButtonSecondary";

export default async function SpecieLayout({ children, params }) {
  const { specie } = await params;
  const category = categoriesData.find((item) => item.id === specie);
  const counts = getCategoryCounts();
  const count = counts[specie];

  return (
    <section className={styles.specie__container}>
      <header className={styles.specie__header}>
        <Image
          src={category.iconUrl || "/placeholder.svg"}
          alt={category.alt}
          width={100}
          height={100}
        />
        <h2 className={styles.specie__title}>{category.title} para Adoção</h2>
        <p>Encontre seu melhor amigo</p>
        <p className={tag.tag}>{count} animais disponíveis</p>

        <div className={styles.specie__header__buttons}>
          <Link href="/category" style={{ textDecoration: "none" }}>
            <ButtonSecondary width="100%" maxWidth="200px">
              Voltar
            </ButtonSecondary>
          </Link>

          <Link href="/contact" style={{ textDecoration: "none" }}>
            <ButtonPrimary width="100%" maxWidth="200px">
              Fale Conosco
            </ButtonPrimary>
          </Link>
        </div>
      </header>

      {/* === Conteúdo variável === */}
      <main>{children}</main>
    </section>
  );
}
