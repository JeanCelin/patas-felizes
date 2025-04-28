import OurHistory from "@/componentes/comp-pages/about/our-history/OurHistory";
import OurNumbers from "@/componentes/comp-pages/about/our-numbers/OurNumbers";
import OurValues from "@/componentes/comp-pages/about/our-values/OurValues";
import Team from "@/componentes/comp-pages/about/team/Team";

import styles from "./page.module.css";

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
