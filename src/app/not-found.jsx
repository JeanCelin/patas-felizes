import Link from "next/link";
import styles from "./not-found.module.css";
import ButtonPrimary from "@/componentes/ui/button/ButtonPrimary";

export default function NotFound() {
  return (
    <main className={styles.container}>
      <section className={styles.card}>
        <h1 className={styles.title}>Página não encontrada</h1>
        <p className={styles.message}>
          Infelizmente não conseguimos localizar essa página.
        </p>

        <Link href="/">
          <ButtonPrimary children="Voltar para a página principal" />
        </Link>

        <span className={styles.hint}>
          Se você digitou a URL manualmente, verifique se não há erros.
        </span>
      </section>
    </main>
  );
}
