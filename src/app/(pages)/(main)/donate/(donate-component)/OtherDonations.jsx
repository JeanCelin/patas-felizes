import styles from "./OtherDonations.module.css";

import TextCard from "@/componentes/ui/cards/TextCard";

export default function OtherDonations() {
  return (
    <section className={styles.otherDonations}>
      <div className={styles.otherDonations__wrapper}>

      <header className={styles.otherDonations__header}>
        <h2 className={styles.otherDonations__header__title}>
          Outras Formas de Doar
        </h2>
        <p className={styles.otherDonations__header__text}>
          Além das doações financeiras, existem outras maneiras de apoiar nosso
          trabalho.
        </p>
      </header>
      <section className={styles.otherDonations__cards}>
        <TextCard
          title="Doação Mensal"
          text="Torne-se um doador recorrente e ajude-nos a planejar melhor nossos recursos. Doações mensais, mesmo pequenas, fazem uma grande diferença."
          btnText="Seja um doador Mensal"
          />
        <TextCard
          title="Doação de Suprimentos"
          text="Aceitamos doações de ração, medicamentos, cobertores, brinquedos e outros itens essenciais para o cuidado dos animais."
          btnText="Ver Lista de Necessidades"
          />
        <TextCard
          title="Apadrinhe um Animal"
          text="Você pode apadrinhar um animal específico, contribuindo mensalmente para seus cuidados até que ele seja adotado."
          btnText="Animais para Apadrinhamento"
          />
      </section>
          </div>
    </section>
  );
}
