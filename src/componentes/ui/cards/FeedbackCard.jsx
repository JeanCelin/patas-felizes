import styles from "./FeedbackCard.module.css";
import Image from "next/image";
import PropTypes from "prop-types";

export default function FeedbackCard({ name, profile, feedback, photo, alt }) {
  return (
    <div className={styles.feedbackCard}>
      <div className={styles.feedbackCard__user_container}>
        <div className={styles.feedbackCard__img}>
          <Image
            src={photo || "/placeholder.svg"}
            alt={alt}
            loading="lazy"
            fill
            className={styles.image}
            sizes="50px"
 
          />
        </div>
        <div className={styles.feedbackCard__user}>
          <h3 className={styles.feedbackCard__userName}>{name}</h3>
          <p className={styles.feedbackCard__userProfile}>{profile}</p>
        </div>
      </div>
      <div className={styles.feedbackCard__card_text}>
        <p className={styles.feedbackCard__feedback}>{feedback}</p>
      </div>
    </div>
  );
}

// ✅ Valores padrão (fallbacks)
FeedbackCard.defaultProps = {
  name: "Usuário Anônimo",
  profile: "Participante",
  feedback: "Nenhum feedback fornecido.",
  photo: "/placeholder.svg",
  alt: "Foto do usuário",
};

// ✅ Validação das props
FeedbackCard.propTypes = {
  name: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
  feedback: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
