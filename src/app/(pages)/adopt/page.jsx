import styles from "./page.module.css";

import AdoptForm from "@/app/(pages)/adopt/(adopt-components)/AdoptForm";
import FindFriend from "@/app/(pages)/adopt/(adopt-components)/FindFriend";
import HowWork from "@/app/(pages)/adopt/(adopt-components)/HowWork";
import Friends from "@/componentes/friends/Friends";
import AdoptReq from "@/app/(pages)/adopt/(adopt-components)/AdoptReq";

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
