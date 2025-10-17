import styles from "./ToHelp.module.css";
import tag from "@/styles/Tag.module.css";


import HandHeartIcon from "@/componentes/icons/HandHeartIcon";
import Card from "@/componentes/ui/cards/HelpCard";
import DollarSignIcon from "@/componentes/icons/DollarSignIcon";
import UsersIcon from "@/componentes/icons/UsersIcon";
import HomeIcon from "@/componentes/icons/HomeIcon";
import HeartIcon from "@/componentes/icons/HeartIcon";

export default function ToHelp() {
  return (
    <section className={styles.toHelp}>
      <div className={styles.toHelp__wrapper}>
        <header className={styles.toHelp__container}>
          <div className={tag.tag}>
            <HandHeartIcon />
            <span>Participe</span>
          </div>
          <h2 className={styles.toHelp__title}>Como Você Pode Ajudar</h2>
          <p className={styles.toHelp__text}>
            Existem muitas maneiras de apoiar nossa missão e fazer a diferença
            na vida dos animais necessitados.
          </p>
        </header>
        <section className={styles.toHelp__cards}>
          <Card
            icon={<DollarSignIcon size="24" />}
            title="Doar"
            text="Seu apoio financeiro nos ajuda a fornecer alimentos, abrigo e cuidados médicos aos animais necessitados."
          />
          <Card
            icon={<UsersIcon size="24" />}
            title="Voluntariar"
            text="Doe seu tempo e habilidades para ajudar com o cuidado dos animais, eventos ou tarefas administrativas."
          />
          <Card
            icon={<HomeIcon size="24" />}
            title="Acolher"
            text="Forneça um lar temporário para animais que aguardam adoção, dando-lhes amor e socialização."
          />
          <Card
            icon={<HeartIcon size="24" />}
            title="Apadrinhar"
            text="Apadrinhe os cuidados de um animal específico ou apoie nossos programas educacionais e comunitários."
          />
        </section>
      </div>
    </section>
  );
}
