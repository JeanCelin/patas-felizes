import Commitment from "@/componentes/comp-pages/volunteer/commitment/Commitment";
import Join from "@/componentes/comp-pages/volunteer/join/Join";
import Opportunities from "@/componentes/comp-pages/volunteer/opportunities/Opportunities";
import VolunteerForm from "@/componentes/comp-pages/volunteer/volunteer-form/VolunteerForm";

import styles from "./page.module.css";
import NextSteps from "@/componentes/comp-pages/volunteer/next-steps/NextSteps";

export default function Volunteer() {
  return (
    <>
      <Join />
      <Opportunities />
      <Commitment />
      <div className={styles.volunteer__form}>
        <div className={styles.volunteer__form__wrapper}>
          <VolunteerForm />
          <NextSteps />
        </div>
      </div>
    </>
  );
}
