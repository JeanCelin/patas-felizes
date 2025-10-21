import styles from "./Team.module.css";
import tag from "@/styles/Tag.module.css";

import UsersIcon from "@/components/icons/UsersIcon";
import VoluntaryCard from "@/components/ui/cards/VoluntaryCard";
import womanPhoto from "/public/perfil/perfil-woman.jpeg";
import womanPhoto3 from "/public/perfil/perfil-woman3.png";
import manPhoto from "/public/perfil/perfil-man.png";
import manPhoto2 from "/public/perfil/perfil-man2.png";
import manPhoto3 from "/public/perfil/perfil-man3.png";

export default function Team() {
  return (
    <section className={styles.team}>
      <div className={styles.team__wrapper}>
        <header className={styles.team__header}>
          <div className={tag.tag}>
            <UsersIcon />
            <span>Nossa Equipe</span>
          </div>
          <h2 className={styles.team__header__title}>Quem Faz Acontecer</h2>
          <p className={styles.team__header__description}>
            Conheça as pessoas dedicadas que trabalham diariamente para cuidar
            dos nossos animais.
          </p>
        </header>
        <ul className={styles.team__members}>
          <li>
            <VoluntaryCard
              photo={womanPhoto}
              name="Ana Oliveira"
              profile="Fundadora e Diretora"
              description="Veterinária com mais de 15 anos de experiência, Ana fundou a Patas Felizes após anos trabalhando com animais de rua."
            />
          </li>
          <li>
            <VoluntaryCard
              photo={manPhoto}
              name="Carlos Santos"
              profile="Coordenador de Resgates"
              description="Ex-bombeiro, Carlos coordena todas as operações de resgate, especialmente em situações de emergência e difícil acesso."
            />
          </li>
          <li>
            <VoluntaryCard
              photo={manPhoto2}
              name="Pedro Almeida"
              profile="Coordenador de Adoções"
              description="Com formação em psicologia, Pedro avalia potenciais adotantes e faz o acompanhamento pós-adoção para garantir o bem-estar dos animais."
            />
          </li>
          <li>
            <VoluntaryCard
              photo={womanPhoto3}
              name="Juliana Ferreira"
              profile="Coordenadora de Voluntários"
              description="Juliana organiza nossa rede de mais de 100 voluntários, coordenando escalas, treinamentos e atividades."
            />
          </li>
          <li>
            <VoluntaryCard
              photo={manPhoto3}
              name="Roberto Santos"
              profile="Diretor Financeiro"
              description="Contador com experiência em ONGs, Roberto gerencia os recursos financeiros e garante a transparência nas prestações de contas."
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
