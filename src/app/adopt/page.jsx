import FindFriend from '@/componentes/comp-pages/adopt/FindFriend';
import styles from './page.module.css';
import tag from '@/styles/Tag.module.css'

export default function doar() {
  return (
    <section className={styles.adopt}>
      <FindFriend />
    </section>
  )
}
