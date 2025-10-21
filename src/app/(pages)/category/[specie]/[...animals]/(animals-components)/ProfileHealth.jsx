import styles from "./ProfileHealth.module.css";

import CircleCheckBigIcon from "@/components/icons/CircleCheckBigIcon";
import AlertCircleIcon from "@/components/icons/AlertCircleIcon";

export default function ProfileHealth({ health }) {
  const healthItems = [
    { key: "vaccinated", label: "Vacinado" },
    { key: "neutered", label: "Castrado" },
    { key: "microchipped", label: "Microchipado" },
    { key: "healthy", label: "Saudável" },
  ];

  return (
    <section className={styles.profileHealth}>
      <h2>Status de Saúde</h2>
      <div className={styles.profile__info__container}>
        {healthItems.map(({ key, label }) => {
          const ok = health[key];
          const Icon = ok ? CircleCheckBigIcon : AlertCircleIcon;

          return (
            <div key={key} className={styles.profile__info__item}>
              <Icon color={ok ? "#22c55e" : "#ef4444"} />
              <p>{label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
