import styles from "./Team.module.css";
import tag from "@/styles/Tag.module.css";
import UsersIcon from "@/componentes/icons/UsersIcon";
import VoluntaryCard from "@/componentes/ui/cards/VoluntaryCard";
import womanPhoto from "/public/perfil/perfil-woman.jpeg";
import manPhoto from "/public/perfil/perfil-man.jpeg";

export default function Team() {
  return (
    <section className={styles.team}>
      <div className={styles.team__wrapper}>
        <header className={styles.team__header}>
          <div className={tag.tag}>
            <UsersIcon />
            <h1>Nossa Equipe</h1>
          </div>
          <h2 className={styles.team__header__title}>Quem Faz Acontecer</h2>
          <p className={styles.team__header__description}>
            Conheça as pessoas dedicadas que trabalham diariamente para cuidar
            dos nossos animais.
          </p>
        </header>
        <div className={styles.team__members}>
          <VoluntaryCard
            photo={womanPhoto}
            name="Ana Oliveira"
            profile="Fundadora e Diretora"
            description="Veterinária com mais de 15 anos de experiência, Ana fundou a Patas Carentes após anos trabalhando com animais de rua."
          />
          <VoluntaryCard
            photo={manPhoto}
            name="Carlos Santos"
            profile="Coordenador de Resgates"
            description="Ex-bombeiro, Carlos coordena todas as operações de resgate, especialmente em situações de emergência e difícil acesso."
          />
          <VoluntaryCard
            photo={null}
            name="Mariana Costa"
            profile="Veterinária Chefe"
            description="Especialista em medicina de animais resgatados, Mariana supervisiona todos os cuidados médicos e tratamentos dos nossos animais."
          />
          <VoluntaryCard
            photo={null}
            name="Pedro Almeida"
            profile="Coordenador de Adoções"
            description="Com formação em psicologia, Pedro avalia potenciais adotantes e faz o acompanhamento pós-adoção para garantir o bem-estar dos animais."
          />
          <VoluntaryCard
            photo={null}
            name="Juliana Ferreira"
            profile="Coordenadora de Voluntários"
            description="Juliana organiza nossa rede de mais de 100 voluntários, coordenando escalas, treinamentos e atividades."
          />
          <VoluntaryCard
            photo={null}
            name="Roberto Mendes"
            profile="Diretor Financeiro"
            description="Contador com experiência em ONGs, Roberto gerencia os recursos financeiros e garante a transparência nas prestações de contas."
          />
        </div>
      </div>
    </section>
  );
}
