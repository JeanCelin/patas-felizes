import styles from "./page.module.css";

import AdoptForm from "@/app/(pages)/adopt/(adopt-components)/AdoptForm";
import FindFriend from "@/app/(pages)/adopt/(adopt-components)/FindFriend";
import HowWork from "@/app/(pages)/adopt/(adopt-components)/HowWork";
import Friends from "@/components/friends/Friends";
import AdoptReq from "@/app/(pages)/adopt/(adopt-components)/AdoptReq";

export const metadata = {
  title: "Adoção de Pets",
  description:
    "Veja os pets disponíveis para adoção. Conheça o passo a passo para uma adoção responsável na Patas Felizes",
  keywords: ["cachorros", "gatos", "formulário", "adoção", "requisitos"],
};

export default function doar() {
  return (
    <section className={styles.adopt}>
      <FindFriend />
      <HowWork />
      <Friends />
      <section className={styles.adopt__form}>
        <div className={styles.adopt__form__wrapper}>
          <AdoptReq />
          <AdoptForm />
        </div>
      </section>
    </section>
  );
}
