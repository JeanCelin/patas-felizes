import ContactHero from "@/componentes/comp-pages/contact/hero/ContactHero";
import ContactForm from "@/componentes/comp-pages/contact/contact-form/ContactForm";
import ContactInfo from "@/componentes/comp-pages/contact/contact-info/ContactInfo";

export default function contact() {
  return (
    <>
      <ContactHero />
      <div>
        <ContactForm />
        <ContactInfo />
      </div>
    </>
  );
}
