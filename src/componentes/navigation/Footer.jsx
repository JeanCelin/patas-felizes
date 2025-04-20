import Image from "next/image";

import styles from "./Footer.module.css";
import PawIcon from "../icons/PawIcon";
import MapPinIcon from "../icons/MapPinIcon";
import PhoneIcon from "../icons/PhoneIcon";
import MailIcon from "../icons/MailIcon";
import { AlignStartHorizontal } from "lucide-react";
import SecondaryInput from "../ui/inputs/PrimaryInput";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer__social}>
        <div className={styles.footer__social__logo}>
          <PawIcon size="24" color="var(--color1)" />
          <h3 className={styles.footer__logoName}>Patas Carentes</h3>
        </div>
        <p className={styles.footer__text}>
          Dedicada ao resgate, reabilitação e adoção de animais abandonados
          desde 2015.
        </p>
        <div className={styles.footer__social__icons}>
          <Image
            src="/icons/facebook.svg"
            width={20}
            height={20}
            alt="Facebook"
            style={{}}
          />
          <Image
            src="/icons/instagram.svg"
            width={20}
            height={20}
            alt="Instagram"
          />
          <Image src="/icons/x.svg" width={20} height={20} alt="x" />
        </div>
      </section>
      <section className={styles.footer__fastlinks}>
        <h3 className={styles.footer__title}>Links Rápidos</h3>
        <ul className={styles.footer__fastlinks__list}>
          <li>Início</li>
          <li>Sobre nós</li>
          <li>Pets para Adoção</li>
          <li>Doar</li>
          <li>Voluntariado</li>
        </ul>
      </section>
      <section className={styles.footer__contact}>
        <h3 className={styles.footer__title}>Contato</h3>
        <div className={styles.footer__contact__info__container}>
          <div className={`${styles.footer__contact__info}`}>
            <MapPinIcon
              size="24"
              color="var(--color1)"
              className={styles.footer__icon}
            />
            <p>Endereço: Rua dos Animais, 123 - São Paulo, SP</p>
          </div>
          <div className={`${styles.footer__contact__info} `}>
            <PhoneIcon
              size="20"
              color="var(--color1)"
              className={styles.footer__icon}
            />
            <p>(11) 1234-5678</p>
          </div>
          <div className={`${styles.footer__contact__info}`}>
            <MailIcon
              size="20"
              color="var(--color1)"
              className={styles.footer__icon}
            />
            <p>info@patascarentes.org </p>
          </div>
        </div>
      </section>
      <section className={styles.footer__newsletter}>
        <h3 className={styles.footer__title}>Newsletter</h3>
        <p className={styles.footer__text}>
          Inscreva-se em nossa newsletter para atualizações sobre pets para
          adoção, eventos e mais.
        </p>
        <form action="">
          <SecondaryInput placeholder="teste" />
          <button type="submit">Inscrever-se</button>
        </form>
        <p>© 2023 Patas Carentes. Todos os direitos reservados.</p>
      </section>
    </footer>
  );
}
