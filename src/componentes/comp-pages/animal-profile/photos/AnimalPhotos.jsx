import Image from "next/image";
import styles from "./AnimalPhotos.module.css";

export default function AnimalPhotos({ images }) {
  if (!images || images.length === 0) return null;

  const [main, ...rest] = images;

  return (
    <section className={styles.photosContainer}>
      <div key={main.id} className={styles.photoMain}>
        <Image
          src={main.src || "/placeholder.svg"}
          alt={main.alt || "A descrição não foi adicionada, lamentamos o invonveniente."}
          fill
        />
      </div>

      {rest.slice(0, 4).map((img) => (
        <div key={img.id} className={styles.photoSecondary}>
          <Image
            src={img.src || "/placeholder.svg"}
            alt={img.alt || "A descrição não foi adicionada, lamentamos o invonveniente."}
            fill
          />
        </div>
      ))}
    </section>
  );
}
