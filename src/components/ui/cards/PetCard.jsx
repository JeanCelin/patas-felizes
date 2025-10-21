import Image from "next/image";
import styles from "./PetCard.module.css";
import ButtonPrimary from "../button/ButtonPrimary";
import Link from "next/link";
import animalsData from "@/data/animals";

//Card de apresentação dos animais, utiliza o slug para identificar o animal no banco de dados e puxar as informações do animal especificado.

export default function PetCard({ slug }) {
  //Encontra o animal no banco de dados pelo slug
  let pet = animalsData.find((animal) => animal.slug === slug);
  
  //Retorna nada se o animal não tiver o slug correspondente
  if(slug === undefined || null) return
  

  return (
    <div className={styles.petCard}>
      <Link
        href={`/category/${pet.category}/${pet.slug}`}
        style={{ textDecoration: "none" }}>
        <div className={styles.petCard__image}>
          <Image
            src={pet.images[0].src || "/placeholder.svg"}
            fill
            alt={pet.images[0].alt || "A descrição não foi adicionada, lamentamos o invonveniente."}
            loading="lazy"
            className={styles.image}
            sizes="(min-width: 1024px) 315px, (min-width: 768px) 46vw , 90vw"
          />
        </div>
        <section className={styles.petCard__friend}>
          <h3 className={styles.petCard__name}>{pet.name}</h3>
          <p className={styles.petCard__info}>
            {pet.breed} • {pet.age} {pet.age == 1 ? "ano" : "anos"} • {pet.sex}
          </p>
          <div className={styles.petCard__text__container}>
            <p className={styles.petCard__text}>{pet.about.smallDescription}</p>
          </div>
          <div className={styles.petCard__button}>
            <ButtonPrimary>Adote-me</ButtonPrimary>
          </div>
        </section>
      </Link>
    </div>
  );
}

// // ✅ Valores padrão
// PetCard.defaultProps = {
//   name: "Nome Desconhecido",
//   breed: "Raça indefinida",
//   age: "Idade não informada",
//   sex: "Sexo não especificado",
//   image: "/placeholder.svg", // caminho correto (sem /public)
//   alt: "Imagem do animal",
//   children: "Nenhuma descrição adicional.",
// };

// // ✅ Validação das props
// PetCard.propTypes = {
//   name: PropTypes.string.isRequired,
//   breed: PropTypes.string.isRequired,
//   age: PropTypes.string.isRequired,
//   sex: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
// };
