import MapPinIcon from "@/componentes/icons/MapPinIcon";
import styles from "./ContactInfo.module.css";
import PhoneIcon from "@/componentes/icons/PhoneIcon";
import MailIcon from "@/componentes/icons/MailIcon";
import ClockIcon from "@/componentes/icons/ClockIcon";
import Image from "next/image";

export default function ContactInfo() {
  return (
    <section className={styles.contactInfo}>
      <header className={styles.contactInfo__header}>
        <h2 className={styles.contactInfo__header__title}>
          Informações de Contato
        </h2>
        <p className={styles.contactInfo__header__text}>
          Você também pode entrar em contato conosco através dos seguintes
          canais:
        </p>
      </header>
      <ul className={styles.contactInfo__list}>
        <li className={styles.contactInfo__list__item}>
          <span className={styles.contactInfo__list__item__icon}>
            <MapPinIcon size="24px" />
          </span>
          <div className={styles.contactInfo__list__item__content}>
            <h3 className={styles.contactInfo__list__item__title}>Endereço</h3>
            <p className={styles.contactInfo__list__item__text}>
              Rua do Resgate, 123, Cidade Animal, CA 12345
            </p>
          </div>
        </li>
        <li className={styles.contactInfo__list__item}>
          <span className={styles.contactInfo__list__item__icon}>
            <PhoneIcon size="24px" />
          </span>
          <div className={styles.contactInfo__list__item__content}>
            <h3 className={styles.contactInfo__list__item__title}>Telefone</h3>
            <p className={styles.contactInfo__list__item__text}>
              (11) 1234-5678
            </p>
          </div>
        </li>
        <li className={styles.contactInfo__list__item}>
          <span className={styles.contactInfo__list__item__icon}>
            <MailIcon size="24px" />
          </span>
          <div className={styles.contactInfo__list__item__content}>
            <h3 className={styles.contactInfo__list__item__title}>Email</h3>
            <p className={styles.contactInfo__list__item__text}>
              info@patascarentes.org
            </p>
          </div>
        </li>
        <li className={styles.contactInfo__list__item}>
          <span className={styles.contactInfo__list__item__icon}>
            <ClockIcon size="24px" />
          </span>
          <div className={styles.contactInfo__list__item__content}>
            <h3 className={styles.contactInfo__list__item__title}>
              Horário de Funcionamento
            </h3>
            <p className={styles.contactInfo__list__item__text}>
              Segunda a Sexta: 9h às 18h
            </p>
            <p className={styles.contactInfo__list__item__text}>
              Sábados: 10h às 16h
            </p>
            <p className={styles.contactInfo__list__item__text}>
              Domingos e Feriados: Fechado
            </p>
          </div>
        </li>
      </ul>
      <section className={styles.contactInfo__socials}>
        <span className={styles.contactInfo__title}>Redes Sociais</span>
        <p>
          Siga-nos nas redes sociais para acompanhar nosso trabalho e novidades:
        </p>
        <div className={styles.contactInfo__socials__icons}>
          <div className={styles.contactInfo__socials__icon}>
            <Image
              src="/icons/facebook.svg"
              width={24}
              height={24}
              alt="Facebook icon"
              loading="lazy"
            />
          </div>
          <div className={styles.contactInfo__socials__icon}>
            <Image
              src="/icons/instagram.svg"
              width={24}
              height={24}
              alt="Instagram icon"
              loading="lazy"
            />
          </div>
          <div className={styles.contactInfo__socials__icon}>
            <Image
              src="/icons/x.svg"
              width={24}
              height={24}
              alt="x icon"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
