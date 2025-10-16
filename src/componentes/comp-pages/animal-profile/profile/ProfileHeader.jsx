import HeartIcon from "@/componentes/icons/HeartIcon";
import styles from "./ProfileHeader.module.css";
import CalendarIcon from "@/componentes/icons/CalendarIcon";
import RulerIcon from "@/componentes/icons/RulerIcon";
import WeightIcon from "@/componentes/icons/WeightIcon";
import MapPinIcon from "@/componentes/icons/MapPinIcon";

export default function ProfileHeader({
  name,
  breed,
  status,
  age,
  size,
  weight,
  location,
}) {
  const checkAge = (age) => {
    if (age > 1) return <p>{`${age} anos`}</p>;
    if (age == 1) return <p>{`${age} ano`}</p>;
    if (age < 1) return <p>{`${age * 10} meses`}</p>;
  };

  return (
    <section className={styles.profileHeader}>
      <div className={styles.profileHeader__info}>
        <div className={styles.profileHeader__name__container}>
          <h1 className={styles.profileHeader__name}>{name}</h1>
          <span className={styles.status}>
            {status === true ? "Disponível" : "Indisponível"}
          </span>
        </div>
        <p className={styles.profileHeader__breed}>{breed}</p>
      </div>

      <div className={styles.profile__info__container}>
        <div className={styles.profile__info__item}>
          <CalendarIcon color={"var(--color1)"} />
          {checkAge(age)}
        </div>
        <div className={styles.profile__info__item}>
          <RulerIcon color={"var(--color1)"} />
          <p>{`Porte ${size}`}</p>
        </div>
        <div className={styles.profile__info__item}>
          <WeightIcon color={"var(--color1)"} />
          <p>{` ${weight} kg`}</p>
        </div>
        <div className={styles.profile__info__item}>
          <MapPinIcon color={"var(--color1)"} />
          <p>{` ${location}`}</p>
        </div>
      </div>
    </section>
  );
}
