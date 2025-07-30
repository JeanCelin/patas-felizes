import styles from "./Fac.module.css";
import FacCard from "@/componentes/ui/cards/FacCard";

export default function Fac() {
  return (
    <section className={styles.fac}>
      <div className={styles.fac__wrapper}>
        <div className={styles.fac__header}>
          <h2 className={styles.fac__header__title}>Perguntas frequentes</h2>
          <p className={styles.fac__header__text}>
            Respostas para as dúvidas mais comuns sobre nosso trabalho.
          </p>
        </div>
        <section className={styles.fac__cards}>
          <FacCard
            title="Como posso adotar um animal?"
            text="Para adotar um animal, você precisa preencher nosso formulário de adoção, passar por uma entrevista e, em alguns casos, receber uma visita em sua casa para verificarmos se o ambiente é adequado para o 
          animal."
          />
          <FacCard
            title="Quais são os custos de adoção?"
            text="Cobramos uma taxa simbólica de adoção que ajuda a cobrir parte dos custos de resgate, cuidados veterinários e castração. O valor varia de acordo com o animal e sua condição de saúde."
          />
          <FacCard
            title="Como posso me tornar um voluntário?"
            text="Para se tornar um voluntário, preencha o formulário em nossa página de voluntariado. Entraremos em contato para agendar uma entrevista e orientação."
          />
          <FacCard
            title="Vocês aceitam doações de itens?"
            text="Sim, aceitamos doações de ração, medicamentos, cobertores, brinquedos e outros itens essenciais para o cuidado dos animais. Entre em contato para saber nossas necessidades atuais."
          />
          <FacCard
            title="Como denunciar maus-tratos a animais?"
            text="Denúncias de maus-tratos devem ser feitas diretamente às autoridades competentes, como a polícia ambiental ou órgãos de proteção animal. Você também pode nos contatar para orientações sobre como proceder."
          />
        </section>
      </div>
    </section>
  );
}
