import styles from "./FeedbackCard.module.css";
import Image from "next/image";
import PropTypes from "prop-types";

// Utiliza as propriedades recebidas para criar o card do feedback na página principal do site
export default function FeedbackCard({ name, profile, feedback, photo, alt }) {
  return (
    <article className={styles.feedbackCard}>
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
    </article>
  );
}

