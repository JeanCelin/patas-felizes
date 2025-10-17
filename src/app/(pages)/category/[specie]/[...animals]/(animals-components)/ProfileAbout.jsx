import styles from './ProfileAbout.module.css'

export default function ProfileAbout({ about, name }) {

  const aboutItems = [
    { key: "story", label: `A História de ${name}` },
    { key: "personality", label: "Personalidade" },
    { key: "idealHome", label: "Lar Ideal" },
    { key: "specialNeeds", label: "Necessidades Especiais" },
    { key: "medicalHistory", label: "Histórico Médico" },
  ];

  return (
    <section className={styles.profileAbout__container}>
      {aboutItems.map(({ key, label }) => {
        const content = about[key];
        if (!content) return null;
        return (
          <div key={key} className={styles.profileAbout__content}>
            <h2>{label}</h2>
            <p>{content}</p>
          </div>
        );
      })}
    </section>
  );
}
