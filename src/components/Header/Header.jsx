import styles from "./Header.module.css";
import { Icon56GhostOutline } from "@vkontakte/icons";
import { NavLink } from "react-router-dom";


export const Header = ({login, isAuth, profile}) => {
let photoUrl = 0
if (profile) {photoUrl = profile.profile.photos.small ; console.log(photoUrl)}
  return (
    <header className={styles.header}>
      <Icon56GhostOutline width={20} height={20} className={styles.kasper} />
      <NavLink to={'/login'}>
      <div className={styles.login}>
          <div className={styles.login__name}>{isAuth ? login : <a>{`Авторизироваться`}</a>}</div>
          <div className={styles.login__profile}>
            <div className={styles.profile__avatar}></div>
          </div>
      </div>
      </NavLink>
    </header>
  );
};
