"use client";
import ButtonSecondary from "@/componentes/ui/button/ButtonSecondary";
import styles from "./Donation.module.css";
import description from "@/styles/Description.module.css";
import PrimaryInput from "@/componentes/ui/inputs/PrimaryInput";
import { useState } from "react";

export default function Donation() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const inputValue = event.target.value.replace(/\D/g, ""); // Remove non-digit characters
    setValue(inputValue); // Update the state with the cleaned value
  };

  return (
    <section className={styles.donation}>
      <div className={styles.donation__container}>
        <div className={styles.donation__text_container}>
          <h1 className={description.secondary_title}>Faça a Diferença Hoje</h1>
          <p className={styles.donation__text}>
            Sua doação nos ajuda a resgatar mais animais e fornecer os cuidados
            que eles precisam.
          </p>
        </div>
        <div className={styles.donation__button_container}>
          <ButtonSecondary children={"R$ 25"} />
          <ButtonSecondary children={"R$ 50"} />
          <ButtonSecondary children={"R$ 100"} />
          <PrimaryInput
            placeholder={"Outro Valor"}
            type="number"
            value={value}
            onChange={handleChange}
            prefix="R$"
          />
        </div>
        <div style={{ width: "100%" }}>
          <ButtonSecondary
            children={"Doar Agora"}
            className={styles.donation__button}
          />
          <p className={styles.donation__note}>
            Sua doação é dedutível de impostos. Patas Carentes é uma organização
            sem fins lucrativos registrada.
          </p>
        </div>
      </div>
    </section>
  );
}
