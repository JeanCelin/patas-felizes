import styles from "./page.module.css";

import OurHistory from "@/app/(pages)/about/(about-components)/OurHistory";
import OurNumbers from "@/app/(pages)/about/(about-components)/OurNumbers";
import OurValues from "@/app/(pages)/about/(about-components)/OurValues";
import Team from "@/app/(pages)/about/(about-components)/Team";

export const metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a história da ONG Patas Felizes e os valores que nos guiam.",
  keywords: [
    "sobre",
    "história",
    "equipe",
    "resgate",
  ],
};

export default function About() {
  return (
    <section className={styles.about}>
      <OurHistory />
      <OurValues />
      <Team />
      <OurNumbers />
    </section>
  );
}
