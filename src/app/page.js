import HeroSection from "@/componentes/comp-pages/home/hero/HeroSection";
import AboutSection from "@/componentes/comp-pages/home/about/AboutSection";
import Friends from "@/componentes/comp-pages/home/friends/Friends";
import styles from "./page.module.css";
import ToHelp from "@/componentes/comp-pages/home/tohelp/ToHelp";
import Feedback from "@/componentes/comp-pages/home/feedback/Feedback";
import Donation from "@/componentes/comp-pages/home/donation/Donation";


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
