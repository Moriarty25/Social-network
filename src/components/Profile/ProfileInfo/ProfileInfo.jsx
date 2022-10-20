import { FriendsWidget } from "./FriendsWidget/FriendsWidget";
import styles from "./ProfileInfo.module.css";

export const ProfileInfo = ({friendItems}) => {
  return (
    <div className={styles.header}>
      <img
        src="https://www.film.ru/sites/default/files/people/1457396-1141734.jpg"
        alt="avatar"
        className={styles.avatar}
      />

      <div className={styles.name}>FirstName SecondName</div>
      <div className={styles.nickname}>@mattpatrenzio</div>
      <div className={styles.info}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam maxime
        ad, facere obcaecati incidunt, eum quaerat dolorum nesciunt facilis
        impedit officia sint nam, voluptatibus iure! Earum reprehenderit
        possimus fugit laudantium.{" "}
      </div>
      <div className={styles.job}>Twitter HR</div>
      <div className={styles.city}>Raleigh, North Carolina</div>
      <div className={styles.emal}>mattpatrenzio.com</div>
      <FriendsWidget friendItems={friendItems}/>
    </div>
  );
};
