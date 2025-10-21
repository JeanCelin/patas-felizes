import styles from "./page.module.css";

import ContactHero from "@/app/(pages)/(main)/contact/(contact-components)/ContactHero";
import ContactForm from "@/app/(pages)/(main)/contact/(contact-components)/ContactForm";
import ContactInfo from "@/app/(pages)/(main)/contact/(contact-components)/ContactInfo";
import Fac from "@/app/(pages)/(main)/contact/(contact-components)/Fac";
import ContactLocation from "@/app/(pages)/(main)/contact/(contact-components)/ContactLocation";

export const metadata = {
  title: "Entre em Contato",
  description:
    "Tire suas dúvidas, saiba como adotar seu pet hoje. Entre em contato com a ONG Patas Felizes e agende uma visita.",
  keywords: ["dúvidas", "contato", "enviar mensagem", "perguntas frequentes"],
};

export default function contact() {
  return (
    <>
      <ContactHero />
      <div className={styles.contact__form}>
        <div className={styles.contact__wrapper}>
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <Fac />
      <ContactLocation />
    </>
  );
}
