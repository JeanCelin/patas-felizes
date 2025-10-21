import styles from "./DonationHelp.module.css";

import Card from "@/components/ui/cards/HelpCard";
import HeartIcon from "@/components/icons/HeartIcon";
import ShoppingBagIcon from "@/components/icons/ShoppingBagIcon";
import GiftIcon from "@/components/icons/GiftIcon";
import CalendarIcon from "@/components/icons/CalendarIcon";
import PawIcon from "@/components/icons/PawIcon";
import FileTextIcon from "@/components/icons/FileTextIcon";

export default function DonationHelp() {
  return (
    <section className={styles.donationHelp}>
      <div className={styles.donationHelp__wrapper}>
        <header className={styles.donationHelp__container}>
          <h2 className={styles.donationHelp__title}>Como Você Pode Ajudar</h2>
          <p className={styles.donationHelp__text}>
            Existem muitas maneiras de apoiar nossa missão e fazer a diferença
            na vida dos animais necessitados.
          </p>
        </header>
        <section className={styles.donationHelp__cards}>
          <Card
            icon={<ShoppingBagIcon size="24" />}
            title="R$25"
            text="Fornece alimentação para um animal resgatado por uma semana."
          />
          <Card
            icon={<GiftIcon size="24" />}
            title="R$50"
            text="Cobre os custos de vacinas e vermífugos para um animal recém-resgatado."
          />
          <Card
            icon={<HeartIcon size="24" />}
            title="R$100"
            text="Ajuda a custear procedimentos médicos básicos e medicamentos."
          />
          <Card
            icon={<CalendarIcon size="24" />}
            title="R$200"
            text="Contribui para o custo mensal de manutenção do abrigo e cuidados diários."
          />
          <Card
            icon={<PawIcon size="24" />}
            title="R$500"
            text="Cobre o custo de uma cirurgia de castração para vários animais."
          />
          <Card
            icon={<FileTextIcon size="24" />}
            title="R$1000+"
            text="Ajuda a financiar cirurgias complexas e tratamentos especializados."
          />
        </section>
      </div>
    </section>
  );
}
