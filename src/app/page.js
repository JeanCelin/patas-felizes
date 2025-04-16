import HeroSection from "@/componentes/sections/hero/HeroSection";
import AboutSection from "@/componentes/sections/about/AboutSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
  
        <HeroSection />


        <AboutSection />

    </main>
  );
}
