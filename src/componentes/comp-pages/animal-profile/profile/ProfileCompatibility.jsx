import styles from './ProfileCompatibility.module.css'
import CircleCheckBigIcon from '@/componentes/icons/CircleCheckBigIcon';
import AlertCircleIcon from '@/componentes/icons/AlertCircleIcon';


export default function ProfileCompatibility({compatibility}) {

  const compatibilityItems = [
  { key: "children", label: "Bom com crianças" },
  { key: "otherDogs", label: "Bom com outros cães" },
  { key: "cats", label: "Bom com gatos" },
];

  return (
    <section className={styles.profileCompatibility}>
      <h2 className={styles.profileCompatibility__title}>Compatibilidade</h2>
      <div className={styles.profileCompatibility__container}>
                {compatibilityItems.map(({ key, label }) => {
                  const ok = compatibility[key]; // true / false
                  const Icon = ok ? CircleCheckBigIcon : AlertCircleIcon;
        
                  return (
                    <div key={key} className={styles.profileCompatibility__item}>
                      <Icon color={ok ? "#22c55e" : "#ef4444"} />
                      <p>{label}</p>
                    </div>
                  );
                })} </div>
    </section>
  );
}
