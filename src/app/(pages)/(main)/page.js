import styles from "./page.module.css";
import HeroSection from "@/app/(pages)/(main)/(main-components)/HeroSection";
import AboutSection from "@/app/(pages)/(main)/(main-components)/AboutSection";
import ToHelp from "@/app/(pages)/(main)/(main-components)/ToHelp";
import Feedback from "@/app/(pages)/(main)/(main-components)/Feedback";
import Donation from "@/componentes/donation/Donation";
import Friends from "@/componentes/friends/Friends";

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
