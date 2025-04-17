import styles from "./ToHelp.module.css";

import tag from "@/styles/tag.module.css";
import description from "@/styles/description.module.css";
import HandHeartIcon from "@/componentes/icons/HandHearthIcon";
import HelpCard from "@/componentes/ui/cards/HelpCard";
import DollarSignIcon from "@/componentes/icons/DollarSignIcon";
import UsersIcon from "@/componentes/icons/UsersIcon";
import HomeIcon from "@/componentes/icons/HomeIcon";
import HeartIcon from "@/componentes/icons/HearthIcon";

export default function ToHelp() {
  return (
    <section className={styles.toHelp}>
      <div className={styles.toHelp__container}>
        <div className={tag.tag}>
          <HandHeartIcon />
          <h1>Participe</h1>
        </div>
        <h2 className={`${description.title} ${styles.toHelp__center}`}>Como Você Pode Ajudar</h2>
        <p className={`${description.text} ${styles.toHelp__center}`}>
          Existem muitas maneiras de apoiar nossa missão e fazer a diferença na
          vida dos animais necessitados.
        </p>
      </div>
      <div className={styles.toHelp__cards}>
        <HelpCard icon = {<DollarSignIcon size="24"/>} title="Doar" text="Seu apoio financeiro nos ajuda a fornecer alimentos, abrigo e cuidados médicos aos animais necessitados."/>
        <HelpCard icon = {<UsersIcon size="24"/>} title="Voluntariar" text="Doe seu tempo e habilidades para ajudar com o cuidado dos animais, eventos ou tarefas administrativas."/>
        <HelpCard icon = {<HomeIcon size="24"/>} title="Acolher" text="Forneça um lar temporário para animais que aguardam adoção, dando-lhes amor e socialização."/>
        <HelpCard icon = {<HeartIcon size="24"/>} title="Apadrinhar" text="Apadrinhe os cuidados de um animal específico ou apoie nossos programas educacionais e comunitários."/>
      </div>
    </section>
  );
}
