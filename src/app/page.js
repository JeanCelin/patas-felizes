import HeroSection from "@/componentes/sections/hero/HeroSection";
import AboutSection from "@/componentes/sections/about/AboutSection";
import Friends from "@/componentes/sections/friends/Friends";
import styles from "./page.module.css";
import ToHelp from "@/componentes/sections/tohelp/ToHelp";
import Feedback from "@/componentes/sections/feedback/Feedback";
import Donation from "@/componentes/sections/donation/Donation";

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
