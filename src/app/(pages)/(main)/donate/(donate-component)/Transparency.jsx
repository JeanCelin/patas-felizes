import styles from "./Transparency.module.css";

import TextCard from "@/components/ui/cards/TextCard";

export default function Transparency() {
  return (
    <section className={styles.transparency}>
      <div className={styles.transparency__wrapper}>
        <header className={styles.transparency__header}>
          <h2 className={styles.transparency__header__title}>Transparência</h2>
          <p className={styles.transparency__header__text}>
            Prestamos contas regularmente sobre como utilizamos os recursos
            doados.
          </p>
        </header>
        <section className={styles.transparency__cards}>
          <TextCard
            title="Relatórios Financeiros"
            text="Publicamos relatórios trimestrais detalhando como os recursos foram utilizados. Acreditamos na total transparência com nossos doadores."
            btnText="Ver Relatórios"
          />
          <TextCard
            title="Impacto das Doações"
            text="Compartilhamos regularmente histórias de animais que foram ajudados graças às doações recebidas."
            btnText="Ver História de Impacto"
          />
          <TextCard
            title="Certificações"
            text="Somos uma organização sem fins lucrativos devidamente registrada e certificada, garantindo que suas doações são utilizadas de forma ética e legal."
            btnText="Ver Certificações"
          />
        </section>
      </div>
    </section>
  );
}
