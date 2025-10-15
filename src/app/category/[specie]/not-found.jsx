// app/animals/[specie]/not-found.js
import Link from "next/link";
import Image from "next/image";
import ButtonSecondary from "@/componentes/ui/button/ButtonSecondary";
import styles from "./page.module.css";

export default function NotFound() {
  return (
    <section
      className={`${styles.specie__container} flex flex-col items-center justify-center text-center py-16`}
    >
      <Image
        src="/placeholder.svg"
        alt="Animal não encontrado"
        width={120}
        height={120}
        className="opacity-60 mb-6"
      />
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Ah, esse animal não existe 🐾
      </h2>
      <p className="text-gray-500 max-w-md mb-8">
        Não encontramos nenhum registro para essa espécie.  
        Tente voltar e escolher outra categoria de animais.
      </p>

      <Link href="/category" style={{ textDecoration: "none" }}>
        <ButtonSecondary width="100%" maxWidth="220px">
          Voltar para categorias
        </ButtonSecondary>
      </Link>
    </section>
  );
}
