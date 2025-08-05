import ContactHero from "@/componentes/comp-pages/contact/hero/ContactHero";
import ContactForm from "@/componentes/comp-pages/contact/contact-form/ContactForm";
import ContactInfo from "@/componentes/comp-pages/contact/contact-info/ContactInfo";

import styles from "./page.module.css";
import Fac from "@/componentes/comp-pages/contact/fac/Fac";
import ContactLocation from "@/componentes/comp-pages/contact/contact-location/ContactLocation";

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
