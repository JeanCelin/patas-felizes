// app/animals/[specie]/page.js
import Link from "next/link";

import animals from "@/data/animals";
import categoriesData from "@/data/categories";

import { getCategoryCounts } from "@/utils/categoryCountUtils";

import styles from "./page.module.css";

import PetCard from "@/componentes/ui/cards/PetCard";
import AnimalListFooter from "@/app/(pages)/category/[specie]/(specie-components)/AnimalListFooter";
import ButtonSecondary from "@/componentes/ui/button/ButtonSecondary";

export default async function SpeciePage({ params }) {
  const { specie } = await params;
  const category = categoriesData.find((item) => item.id === specie);
  const animalsList = animals.filter(
    (animal) => animal.category === category.id
  );
  const counts = getCategoryCounts();
  const count = counts[specie];

  const msg = (text) => {
    let teste = "";
    text === "others" ? (teste = "outros animais") : null;
    text === "dogs" ? (teste = "cães") : null;
    text === "cats" ? (teste = "gatos") : null;
    return teste;
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
