import { FriendsWidget } from "./FriendsWidget/FriendsWidget";
import styles from "./ProfileInfo.module.css";
import { Icon16Linked } from '@vkontakte/icons';
import { Icon16Place } from '@vkontakte/icons';
import { Icon16WorkOutline } from '@vkontakte/icons';

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
      <div className={styles.link}>
        <Icon16WorkOutline className={styles.link__logo}/>
        <a href="/profile">Twitter HR</a>
      </div>
      <div className={styles.link}>
        <Icon16Place className={styles.link__logo}/>
        <a href="/profile">Raleigh, North Carolina</a>
      </div>
      <div className={styles.link}> 
        <Icon16Linked className={styles.link__logo}/>
        <a href="/">mattpatrenzio.com</a>
      </div>
      <FriendsWidget friendItems={friendItems}/>
    </div>
  );
};
