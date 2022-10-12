import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <ul>
        <li className={style.item}>
          <NavLink
            to="/profile"
            className={(navData) =>
              navData.isActive ? style.active : style.item
            }
          >
            Profile
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="/messages">Messages</NavLink>
        </li>
        <li className={style.item}>News</li>
        <li className={style.item}>Friends</li>
        <li className={style.item}>Music</li>
        <li className={style.item}>Games</li>
        <li className={style.item}>Setting</li>
      </ul>
    </nav>
  );
};
