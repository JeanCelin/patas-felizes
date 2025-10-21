import styles from "./page.module.css";
import HeroSection from "@/app/(pages)/(main)/(main-components)/HeroSection";
import AboutSection from "@/app/(pages)/(main)/(main-components)/AboutSection";
import ToHelp from "@/app/(pages)/(main)/(main-components)/ToHelp";
import Feedback from "@/app/(pages)/(main)/(main-components)/Feedback";
import Donation from "@/components/donation/Donation";
import Friends from "@/components/friends/Friends";

export const metadata = {
  title: "Adoção de Animais",
  description:
    "A Patas Felizes é uma ONG de resgate e adoção de animais localizada em Castelo, Espírito Santo. Encontre um novo amigo, nossos cachorros e gatos  então à espera de um lar, faça uma doação ou torne-se voluntário e mude uma vida.",
  keywords: [
    "adoção",
    "ONG",
    "animais",
    "cães",
    "cachorros",
    "gatos",
    "doação",
    "voluntário",
  ],
};

export default function Home() {
  return (
    <main className={styles.home}>
      <HeroSection />
      <AboutSection />
      <Friends />
      <ToHelp />
      <Feedback />
      <Donation />
    </main>
  );
}
