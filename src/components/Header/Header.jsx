import style from "./Header.module.css"
import { Icon56GhostOutline } from '@vkontakte/icons';
export const Header = () => {
    return (
        <header className={style.header}>
        <img
          src="https://img2.freepng.ru/20190726/xze/kisspng-pop-art-retro-vintage-5d3bb991706cd8.3455755115641952174605.jpg"
          alt=""
        />
        <Icon56GhostOutline  width={100} height={100} className={style.kasper}/>
      
      </header>
    );
}
