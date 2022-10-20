import styles from "./FriendsWidget.module.css";
import { Icon24Users } from "@vkontakte/icons";
import { FriendsWidgetItem } from "./FriendsWidgetItem/FriendsWidgetItem";

export const FriendsWidget = ({friendItems}) => {


  let FriendsWidgetItemElement = friendItems.map((item)=><FriendsWidgetItem avatarUrl={item.avatarUrl}/>);

  return (
    <div className={styles.friends__wrapper}>
      <div className={styles.title}>
        {" "}
        <Icon24Users className={styles.title__logo} /> <p>Friends</p>
      </div>
      <div className={styles.content}>
      {FriendsWidgetItemElement}
      </div>
    </div>
  );
};
