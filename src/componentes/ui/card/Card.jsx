import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./Card.module.css";
import ButtonPrimary from "../button/ButtonPrimary";

export default function Card({ name, breed, age, sex, children, image, alt }) {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <Image
          src={image || "/placeholder.svg"} // fallback se não vier imagem
          fill
          alt={alt}
          className={styles.image}
        />
      </div>
      <section className={styles.card__friend}>
        <h1 className={styles.card__name}>{name}</h1>
        <p className={styles.card__info}>
          {breed} • {age} {age == 1 ? "ano" : "anos"} • {sex}
        </p>
        <p className={styles.card__text}>{children}</p>
        <div className={styles.card__button}>
          <ButtonPrimary children="Adote-me" />
        </div>
      </section>
    </div>
  );
}

// ✅ Valores padrão (fallbacks genéricos)
Card.defaultProps = {
  name: "Nome Desconhecido",
  breed: "Raça indefinida",
  age: "Idade não informada",
  sex: "Sexo não especificado",
  image: "/placeholder.svg", // caminho correto (sem "/public")
  alt: "Imagem do animal",
  children: "Nenhuma descrição adicional.",
};

// ✅ Validação das props
Card.propTypes = {
  name: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
