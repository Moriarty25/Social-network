import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <ul>
        <li className={style.item}><NavLink to="/profile" className={navData=>navData.isActive? style.activeLink: ''}>Profile</NavLink></li>
        <li className={style.item}><NavLink to="/messages"className={navData=>navData.isActive? style.activeLink: ''}> Messages</NavLink> </li>
        <li className={style.item}><NavLink to= "/news"className={navData=>navData.isActive? style.activeLink: ''}> News</NavLink></li>
        <li className={style.item}><NavLink to="/friends"className={navData=>navData.isActive? style.activeLink: ''}>Friends</NavLink></li>
        <li className={style.item}><NavLink to="/music"className={navData=>navData.isActive? style.activeLink: ''}>Music</NavLink></li>
        <li className={style.item}><NavLink to="/games"className={navData=>navData.isActive? style.activeLink: ''}>Games</NavLink></li>
        <li className={style.item}><NavLink to="/settings"className={navData=>navData.isActive? style.activeLink: ''}>Settings</NavLink></li>
      </ul>
    </nav>
  );
};
