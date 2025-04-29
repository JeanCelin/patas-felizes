import styles from './page.module.css';

import FindFriend from '@/componentes/comp-pages/adopt/find-friend/FindFriend';
import HowWork from '@/componentes/comp-pages/adopt/how-work/HowWork';

export default function doar() {
  return (
    <section className={styles.adopt}>
      <FindFriend />
      <HowWork />
    </section>
  )
}
