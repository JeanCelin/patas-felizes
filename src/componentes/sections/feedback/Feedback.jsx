import styles from "./Feedback.module.css";
import tag from "@/styles/tag.module.css";

import HeartIcon from "@/componentes/icons/HeartIcon";
import FeedbackCard from "@/componentes/ui/cards/FeedbackCard";

export default function Feedback() {
  return (
    <section className={styles.feedback}>
      <div className={styles.feedback__wrapper}>

      <div className={styles.feedback__container}>
        <div className={tag.tag}>
          <HeartIcon />
          <h1>Histórias de Sucesso</h1>
        </div>
        <h2 className={styles.feedback__title}>
          O Que Dizem Sobre Nós
        </h2>
        <p className={styles.feedback__text }>
          Ouça de quem adotou, voluntariou ou apoiou nossa causa.
        </p>
      </div>
      <div className={styles.feedback__cards}>
        <FeedbackCard
          name="Maria Silva"
          profile="Adotante"
          feedback="&ldquo;Adotar a Luna da Patas Carentes foi a melhor decisão que já tomei. A equipe foi muito prestativa durante todo o processo, e a Luna trouxe muita alegria para nossa casa.&rdquo;"
          />
        <FeedbackCard
          name="João Pereira"
          profile="Voluntário"
          feedback="&ldquo;Ser voluntário na Patas Carentes tem sido incrivelmente gratificante. Ver os animais se transformarem de assustados e doentes para saudáveis e felizes é uma experiência incrível.&rdquo;"
          />
        <FeedbackCard
          name="Ana Santos"
          profile="Doadora Mensal"
          feedback="&ldquo;Apoio a Patas Carentes há dois anos. A transparência deles e o impacto que fazem com recursos limitados é verdadeiramente inspirador.&rdquo;"
          />
      </div>
          </div>
    </section>
  );
}
