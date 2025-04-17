import HeroSection from "@/componentes/sections/hero/HeroSection";
import AboutSection from "@/componentes/sections/about/AboutSection";
import Friends from "@/componentes/sections/friends/Friends";
import styles from "./page.module.css";
import ToHelp from "@/componentes/sections/tohelp/ToHelp";

export default function Home() {
  return (
    <main className={styles.home}>
        <HeroSection />
        <AboutSection />
        <Friends />
        <ToHelp />

    </main>
  );
}
