import styles from "./ProfileButtons.module.css";

import ButtonPrimary from "@/components/ui/button/ButtonPrimary";
import ButtonSecondary from "@/components/ui/button/ButtonSecondary";
import HeartIcon from "@/components/icons/HeartIcon";
import ShareIcon from "@/components/icons/ShareIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";

export default function ProfileButtons({ name }) {
  return (
    <section className={styles.buttons__container}>
      <div className={styles.buttons__button__main}>
        <ButtonPrimary
          children={`Quero Adotar ${name}`}
          width="100%"
          icon={<HeartIcon />}
        />
      </div>
      <div className={styles.buttons__button}>
        <ButtonSecondary
          children={`Compartilhar`}
          width="100%"
          icon={<ShareIcon />}
        />
      </div>
      <div className={styles.buttons__button}>
        <ButtonSecondary
          children={`Ligar`}
          width="100%"
          icon={<PhoneIcon size={14} />}
        />
      </div>
    </section>
  );
}
