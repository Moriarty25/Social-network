import style from "./Navigation.module.css"

export const Navigation = () => {
    return (
        <nav className={style.navigation}>
        <ul>
          <li className={style.item}>Profile</li>
          <li className={style.item}>Messages</li>
          <li className={style.item}>News</li>
          <li className={style.item}>Friends</li>
          <li className={style.item}>Music</li>
          <li className={style.item}>Games</li>
          <li className={style.item}>Setting</li>
        </ul>
      </nav>
    );
}
