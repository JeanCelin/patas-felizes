import Card from "@/componentes/ui/cards/PetCard";
import styles from "./Friends.module.css";
import tag from "@/styles/Tag.module.css";
import description from "@/styles/Description.module.css";
import HeartIcon from "@/componentes/icons/HearthIcon";
import ButtonSecondary from "@/componentes/ui/button/ButtonSecondary";

export default function Friends() {
  return (
    <section className={styles.friends}>
      <div className={styles.friends__container}>
        <div className={tag.tag}>
          <HeartIcon />
          <h1>Encontre um Amigo</h1>
        </div>
        <h2 className={`${description.title} ${styles.friends__text_center}`}>
          Conheça Nossos Pets para Adoção
        </h2>
        <p className={`${description.text} ${styles.friends__text_center}`}>
          Estes animais amorosos estão esperando por seus lares definitivos.
          Você poderia ser a combinação perfeita?
        </p>
      </div>
      <div className={styles.friends__cards}>
        <Card
          name="Max"
          breed="Gold Retriever"
          age="3"
          sex="Macho"
          children="Amigável e brincalhão, Max adora longas caminhadas e brincar de buscar."
 
          alt ="Foto do Max, um golden retriever"
        />
        <Card
          name="Luna"
          breed="Labrador"
          age="2"
          sex="Fêmea"
          children="Luna é uma companheira leal e muito carinhosa. Ama nadar e brincar com outros cães."
  
          alt="Foto da Luna, um labrador dourado"
        />

        <Card
          name="Thor"
          breed="Husky Siberiano"
          age="4"
          sex="Macho"
          children="Thor é cheio de energia e adora correr. Seu olhar marcante conquista todos à sua volta."
        
          alt="Foto do Thor, um husky siberiano"
        />

        <Card
          name="Mel"
          breed="Shih Tzu"
          age="1"
          sex="Fêmea"
          children="Pequena, esperta e cheia de charme, Mel gosta de colo e é ótima com crianças."
          alt="Foto da Mel, uma shih tzu"
        />

        <Card
          name="Bob"
          breed="Vira-lata"
          age="5"
          sex="Macho"
          children="Bob é um verdadeiro guerreiro, resgatado das ruas e agora só quer dar amor."
          alt="Foto do Bob, um cão vira-lata"
        />

        <Card
          name="Nina"
          breed="Poodle"
          age="6"
          sex="Fêmea"
          children="Inteligente e muito obediente, Nina é ideal para quem busca uma companheira tranquila."
          alt="Foto da Nina, uma poodle branca"
        />
      </div>
      <div className={styles.friends__buttonMore}>
        <ButtonSecondary children="Ver Todos os Pets Disponíveis" />
      </div>
    </section>
  );
}
