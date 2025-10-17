import styles from "./Opportunities.module.css";
import tag from "@/styles/Tag.module.css";

import HeartIcon from "@/componentes/icons/HeartIcon";
import Card from "@/componentes/ui/cards/HelpCard";
import PawIcon from "@/componentes/icons/PawIcon";
import HomeIcon from "@/componentes/icons/HomeIcon";
import BriefcaseIcon from "@/componentes/icons/Briefcase";
import CameraIcon from "@/componentes/icons/Camera";
import GraduationCapIcon from "@/componentes/icons/GraduationCapIcon";
import CalendarIcon from "@/componentes/icons/CalendarIcon";

export default function Opportunities() {
  return (
    <section className={styles.opportunities}>
      <div className={styles.opportunities__wrapper}>
        <header className={styles.opportunities__header}>
          <div className={tag.tag}>
            <HeartIcon />
            <span>Oportunidades</span>
          </div>
          <h2 className={styles.opportunities__header__title}>
            Como Você Pode Ajudar
          </h2>
          <p className={styles.opportunities__header__text}>
            Temos diversas áreas onde você pode contribuir com suas habilidades
            e tempo.
          </p>
        </header>
        <div className={styles.opportunities__cards}>
          <Card
            icon={<PawIcon size={24} />}
            title="Cuidador de Animais"
            text="Ajude a alimentar, limpar e socializar com os animais em nosso abrigo. Dê a eles o carinho e atenção que precisam."
            backgroundColor="white"
          />
          <Card
            icon={<HomeIcon size={24} />}
            title="Lar Temporário"
            text="Ofereça sua casa como um lar temporário para animais que precisam de cuidados especiais ou socialização."
            backgroundColor="white"
          />
          <Card
            icon={<BriefcaseIcon size={24} />}
            title="Administrativo"
            text="Ajude com tarefas administrativas, organização de arquivos, atendimento telefônico e resposta a emails."
            backgroundColor="white"
          />
          <Card
            icon={<CameraIcon size={24} />}
            title="Fotografia"
            text="Tire fotos dos nossos animais para ajudar a promovê-los para adoção em nossas redes sociais."
            backgroundColor="white"
          />
          <Card
            icon={<GraduationCapIcon size={24} />}
            title="Educação"
            text="Participe de programas educacionais em escolas e comunidades sobre posse responsável de animais."
            backgroundColor="white"
          />
          <Card
            icon={<CalendarIcon size={24} />}
            title="Eventos"
            text="Ajude a organizar e participar de eventos de adoção, arrecadação de fundos e conscientização."
            backgroundColor="white"
          />
        </div>
      </div>
    </section>
  );
}
