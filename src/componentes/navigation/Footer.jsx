import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.css";

import PawIcon from "../icons/PawIcon";
import MapPinIcon from "../icons/MapPinIcon";
import PhoneIcon from "../icons/PhoneIcon";
import MailIcon from "../icons/MailIcon";
import NewsletterInput from "../ui/inputs/NewsletterInput";
import ButtonPrimary from "../ui/button/ButtonPrimary";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__sections}>
        <section className={styles.footer__social}>
          <div className={styles.footer__social__logo}>
            <PawIcon size="24" color="var(--color1)" />
            <span className={styles.footer__logoName}>Patas Carentes</span>
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
              alt="Facebook icon"
              loading="lazy"
            />
            <Image
              src="/icons/instagram.svg"
              width={20}
              height={20}
              alt="Instagram icon"
              loading="lazy"
            />
            <Image
              src="/icons/x.svg"
              width={20}
              height={20}
              alt="x icon"
              loading="lazy"
            />
          </div>
        </section>
        <section className={styles.footer__fastlinks}>
          <h3 className={styles.footer__title}>Links Rápidos</h3>
          <ul className={styles.footer__fastlinks__list}>
            <li className={styles.footer__fastlinks__link}>
              <Link href="/">Início</Link>
            </li>
            <li className={styles.footer__fastlinks__link}>
              <Link href="/">Sobre nós</Link>
            </li>
            <li className={styles.footer__fastlinks__link}>
              <Link href="/">Pets para Adoção</Link>
            </li>
            <li className={styles.footer__fastlinks__link}>
              <Link href="/">Doar</Link>
            </li>
            <li className={styles.footer__fastlinks__link}>
              <Link href="/">Voluntariado</Link>
            </li>
          </ul>
        </section>
        <section className={styles.footer__contact}>
          <h3 className={styles.footer__title}>Contato</h3>
          <div className={styles.footer__contact__info__container}>
            <div className={`${styles.footer__contact__info}`}>
              <div>
                <MapPinIcon
                  size="20"
                  color="var(--color1)"
                  className={styles.footer__icon}
                />
              </div>
              <p> Rua dos Animais, 123 - São Paulo, SP, texto maior</p>
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
          <form action="" className={styles.footer__newsletter__form}>
            <div className={styles.footer__newsletter__form}>
              <NewsletterInput placeholder="Seu email" />
              <ButtonPrimary children="Inscrever-se" />
            </div>
          </form>
        </section>
      </div>
      <div className={styles.footer__copyrights}>
        <p>&copy; 2025 Patas Carentes. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
