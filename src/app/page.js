import Image from "next/image";
import styles from "./page.module.css";
import ButtonPrimary from "@/componentes/ui/button/ButtonPrimary";
import ButtonSecondary from "@/componentes/ui/button/ButtonSecondary";
import placeholder from "../../public/placeholder.svg";

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.section_animalCare}>
        <div>
          <h1 className={styles.title_targe}>Resgate e Cuidado Animal</h1>
          <h2 className={styles.title_call}>Ajude a Dar Uma Segunda Chance</h2>
          <p className={styles.animalCare_text}>
            Patas Carentes é dedicada ao resgate, reabilitação e adoção de
            animais abandonados. Todo animal merece amor, cuidado e um lar para
            sempre.
          </p>
        </div>
        <div className={styles.buttons__container}>
          <ButtonPrimary children={"Adote um Pet"} width={"100%"} />
          <ButtonSecondary children={"Faça uma doação"} />
        </div>
        <div className={styles.image__container}>
          <Image
            src={placeholder}
            alt="Placeholder"
            className={styles.placeholder}
            height={600}
            style={{ objectFit: "contain" }}
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}
// sizes="(max-width: 400px) 70vw, 30vw"
