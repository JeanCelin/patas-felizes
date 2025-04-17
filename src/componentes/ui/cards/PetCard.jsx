import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./PetCard.module.css";
import ButtonPrimary from "../button/ButtonPrimary";

export default function PetCard({ name, breed, age, sex, children, image, alt }) {
  return (
    <div className={styles.petCard}>
      <div className={styles.petCard__image}>
        <Image
          src={image || "/placeholder.svg"} // fallback se não vier imagem
          fill
          alt={alt}
          className={styles.image}
        />
      </div>
      <section className={styles.petCard__friend}>
        <h1 className={styles.petCard__name}>{name}</h1>
        <p className={styles.petCard__info}>
          {breed} • {age} {age == 1 ? "ano" : "anos"} • {sex}
        </p>
        <p className={styles.petCard__text}>{children}</p>
        <div className={styles.petCard__button}>
          <ButtonPrimary>Adote-me</ButtonPrimary>
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
