import styles from "./ContactLocation.module.css";

export default function ContactLocation() {
  return (
    <section className={styles.contactLocation}>
      <div>
        <h2 className={styles.contactLocation__header__title}>Nossa Localização</h2>
        <p className={styles.contactLocation__header__text}> 
          Visite nosso abrigo e conheça pessoalmente nosso trabalho e os animais
          disponíveis para adoção.
        </p>
      </div>
      <div className={styles.contactLocation__map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.6163181422694!2d-41.20648202414475!3d-20.60372065964248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb97c799108788f%3A0x34a3d90e51c0e248!2sPar%C3%B3quia%20Nossa%20Senhora%20da%20Penha%20-%20Centro!5e0!3m2!1spt-BR!2sbr!4v1754395637420!5m2!1spt-BR!2sbr"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  );
}
