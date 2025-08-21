import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./PetCard.module.css";
import ButtonPrimary from "../button/ButtonPrimary";
import Link from "next/link";
import animals from "@/data/animals";

export default function PetCard({
  id,
  category,
  name,
  breed,
  age,
  sex,
  children,
  image,
  alt,
}) {




  
  return (
    <div className={styles.petCard}>
      <div className={styles.petCard__image}>
        <Image
          src={image || "/placeholder.svg"} // fallback se não vier imagem
          fill
          alt={alt}
          loading="lazy"
          className={styles.image}
          sizes="(min-width: 1024px) 33.33vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>
      <section className={styles.petCard__friend}>
        <h3 className={styles.petCard__name}>{name}</h3>
        <p className={styles.petCard__info}>
          {breed} • {age} {age == 1 ? "ano" : "anos"} • {sex}
        </p>
        <div className={styles.petCard__text__container}>
          <p className={styles.petCard__text}>{children}</p>
        </div>
        <div className={styles.petCard__button}>
          <Link href={`/adopt/${category}/${id}`}>
            <ButtonPrimary>Adote-me</ButtonPrimary>
          </Link>
        </div>
      </section>
    </div>
  );
}

// ✅ Valores padrão
PetCard.defaultProps = {
  name: "Nome Desconhecido",
  breed: "Raça indefinida",
  age: "Idade não informada",
  sex: "Sexo não especificado",
  image: "/placeholder.svg", // caminho correto (sem /public)
  alt: "Imagem do animal",
  children: "Nenhuma descrição adicional.",
};

// ✅ Validação das props
PetCard.propTypes = {
  name: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
