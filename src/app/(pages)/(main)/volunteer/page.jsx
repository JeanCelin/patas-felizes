import Commitment from "@/app/(pages)/(main)/volunteer/(volunteer-components)/Commitment";
import Join from "@/app/(pages)/(main)/volunteer/(volunteer-components)/Join";
import Opportunities from "@/app/(pages)/(main)/volunteer/(volunteer-components)/Opportunities";
import VolunteerForm from "@/app/(pages)/(main)/volunteer/(volunteer-components)/VolunteerForm";

import styles from "./page.module.css";
import NextSteps from "@/app/(pages)/(main)/volunteer/(volunteer-components)/NextSteps";

export const metadata = {
  title: "Seja um Voluntário",
  description:
    "Seja um voluntário da ONG Patas Felizes, ajude a transformar vidas. Participe no resgate ou nos cuidados de nossos animais.",
  keywords: [
    "voluntariar",
    "ajudar",
    "equipe",
    "resgatar",
    "faça parte"
  ],
};

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
