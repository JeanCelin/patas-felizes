// app/animals/[specie]/page.js
import Link from "next/link";

import animals from "@/data/animals";
import categoriesData from "@/data/categories";

import { getCategoryCounts } from "@/utils/categoryCountUtils";

import styles from "./page.module.css";

import PetCard from "@/componentes/ui/cards/PetCard";
import AnimalListFooter from "@/app/(pages)/category/[specie]/(specie-components)/AnimalListFooter";
import ButtonSecondary from "@/componentes/ui/button/ButtonSecondary";

  const specieMap = {
  dogs: {
    label: "Cães",
    description: "Adote um cachorro e transforme uma vida.",
    keywords: ["adoção de cães", "cachorros para adoção", "ONG", "pets"],
  },
  cats: {
    label: "Gatos",
    description: "Encontre gatos carinhosos esperando um novo lar.",
    keywords: ["adoção de gatos", "felinos", "ONG", "pets"],
  },
  others: {
    label: "Outros Animais",
    description: "Adote coelhos, pássaros e outros animais resgatados.",
    keywords: ["adoção de animais", "outros pets", "ONG", "resgate animal"],
  },
};

export async function generateMetadata({ params }) {
  const { specie } = await params;
  const category = specieMap[specie];

  if (!category) {
    return {
      title: "Adoção de Animais | Patas Felizes",
      description:
        "Veja os animais disponíveis para adoção responsável na ONG Patas Felizes.",
    };
  }

  const { label, description, keywords } = category;

  return {
    title: `${label} para Adoção | Patas Felizes`,
    description: `${description} Veja os ${label.toLowerCase()} disponíveis na ONG Patas Felizes.`,
    keywords,
  };
}

export default async function SpeciePage({ params }) {
  const { specie } = await params;
  const category = categoriesData.find((item) => item.id === specie);
  const animalsList = animals.filter(
    (animal) => animal.category === category.id
  );
  const counts = getCategoryCounts();
  const count = counts[specie];

  const msg = (text) => {
    let specie = "";
    text === "others" ? (specie = "outros animais") : null;
    text === "dogs" ? (specie = "cães") : null;
    text === "cats" ? (specie = "gatos") : null;
    return specie;
  };
  const handleMsg = (specie) => {
    return msg(specie);
  };

  return (
    <>
      {count === 0 ? (
        <section className={styles.specie__none}>
          <p>{`No momento não temos ${handleMsg(
            specie
          )} disponíveis para adoção.`}</p>
          <p className={styles.specie__none__subtext}>
            Novos animais chegam regularmente. Volte em breve ou entre em
            contato conosco para mais informações.
          </p>
          <div>
            <Link href={"/category"} style={{ textDecoration: "none" }}>
              <ButtonSecondary children="Ver Outras Categorias" />
            </Link>
          </div>
        </section>
      ) : (
        <>
          <section className={styles.specie__cards__container}>
            {animalsList.map((animal) => (
              <div key={animal.id} className={styles.specie__cards}>
                <PetCard slug={animal.slug} />
              </div>
            ))}
          </section>
          <AnimalListFooter />
        </>
      )}
    </>
  );
}
