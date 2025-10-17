import styles from "./AdoptReq.module.css";

import AlertCircleIcon from "@/componentes/icons/AlertCircleIcon";
import CircleCheckBigIcon from "@/componentes/icons/CircleCheckBigIcon";
export default function AdoptReq() {
  return (
    <article className={styles.adoptReq}>
      <header className={styles.adoptReq__header}>
        <h2 className={styles.adoptReq__header__title}>
          Requisitos para Adoção
        </h2>
        <p className={styles.adoptReq__text}>
          Para garantir o bem-estar dos nossos animais, temos alguns requisitos
          básicos para adoção:
        </p>
      </header>
      <ul className={styles.adoptReq__reqList}>
        <li className={styles.adoptReq__reqList__item}>
          <CircleCheckBigIcon size="20" color="var(--color1)" />
          <p className={styles.adoptReq__reqList__item__text}>Ser maior de 18 anos e apresentar documento de identidade</p>
        </li>
        <li className={styles.adoptReq__reqList__item}>
          <CircleCheckBigIcon size="20" color="var(--color1)" />
          <p className={styles.adoptReq__reqList__item__text}>Comprovante de residência recente</p>
        </li>
        <li className={styles.adoptReq__reqList__item}>
          <CircleCheckBigIcon size="20" color="var(--color1)" />
          <p className={styles.adoptReq__reqList__item__text}>Todos os moradores da casa devem estar de acordo com a adoção</p>
        </li>
        <li className={styles.adoptReq__reqList__item}>
          <CircleCheckBigIcon size="20" color="var(--color1)" />
          <p className={styles.adoptReq__reqList__item__text}>Ter condições financeiras para arcar com as despesas do animal</p>
        </li>
        <li className={styles.adoptReq__reqList__item}>
          <CircleCheckBigIcon size="20" color="var(--color1)" />
          <p className={styles.adoptReq__reqList__item__text}>Disponibilidade para entrevista e possível visita domiciliar</p>
        </li>
        <li className={styles.adoptReq__reqList__item}>
          <CircleCheckBigIcon size="20" color="var(--color1)" />
          <p className={styles.adoptReq__reqList__item__text}>
            Comprometer-se com a castração do animal (caso ainda não seja
            castrado)
          </p>
        </li>
      </ul>
      <aside className={styles.adoptReq__aside}>
          <AlertCircleIcon  color="#d97706"/>
        <div className={styles.adoptReq__aside__content}>
          <span>Importante</span>
          <p>
            A adoção é um compromisso para toda a vida do animal. Antes de
            adotar, certifique-se de que está preparado para esta
            responsabilidade.
          </p>
        </div>
      </aside>
    </article>
  );
}
