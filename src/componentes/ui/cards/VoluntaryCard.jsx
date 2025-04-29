import Image from "next/image";
import placeholder from "/public/placeholder.svg";
import styles from "./VoluntaryCard.module.css";

export default function VoluntaryCard({ photo, name, profile, description }) {
  return (
    <article className={styles.voluntaryCard}>
      <div className={styles.voluntaryCard__image__container}>
        <Image
          src={photo || placeholder}
          alt={name}
          width={150}
          height={150}
          className={styles.voluntaryCard__image}
          loading="lazy"
        />
      </div>
      <div className={styles.voluntaryCard__content}>
        <h3 className={styles.voluntaryCard__name}>{name}</h3>
        <h4 className={styles.voluntaryCard__profile}>{profile}</h4>
        <p className={styles.voluntaryCard__description}>{description}</p>
      </div>
    </article>
  );
}
