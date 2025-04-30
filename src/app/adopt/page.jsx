import AdoptForm from "@/componentes/comp-pages/adopt/adopt-form/AdoptForm";
import styles from "./page.module.css";

import FindFriend from "@/componentes/comp-pages/adopt/find-friend/FindFriend";
import HowWork from "@/componentes/comp-pages/adopt/how-work/HowWork";
import Friends from "@/componentes/friends/Friends";
import AdoptReq from "@/componentes/comp-pages/adopt/adopt-req/AdoptReq";

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
