"use client";
import { useState } from "react";

import styles from "./Donation.module.css";

import ButtonSecondary from "@/components/ui/button/ButtonSecondary";
import PrimaryInput from "@/components/ui/inputs/PrimaryInput";

export default function Donation() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const inputValue = event.target.value.replace(/\D/g, "");
    setValue(inputValue);
  };

  return (
    <section id="donation" className={styles.donation}>
      <div className={styles.donation__wrapper}>
        <div className={styles.donation__container}>
          <header className={styles.donation__text_container}>
            <h2 className={styles.donation__title}>Faça a Diferença Hoje</h2>
            <p className={styles.donation__text}>
              Sua doação nos ajuda a resgatar mais animais e fornecer os
              cuidados que eles precisam.
            </p>
          </header>
          <div className={styles.donation__button__container}>
            <ButtonSecondary children={"R$ 25"} />
            <ButtonSecondary children={"R$ 50"} />
            <ButtonSecondary children={"R$ 100"} />
            <div className={styles.donation__input}>
              <PrimaryInput
                placeholder={"Outro Valor"}
                type="number"
                value={value}
                onChange={handleChange}
                prefix="R$"
              />
            </div>
            <div className={styles.donation__button}>
              <ButtonSecondary children={"Doar Agora"} />
            </div>

            <p className={styles.donation__note}>
              Sua doação é dedutível de impostos. Patas Felizes é uma
              organização sem fins lucrativos registrada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
