import styles from "./FriendsWidget.module.css";
import { Icon24Users } from "@vkontakte/icons";
import { FriendsWidgetItem } from "./FriendsWidgetItem/FriendsWidgetItem";

export const FriendsWidget = ({friendItems}) => {


  const friendsWidgetItemElement = friendItems.map((item)=><FriendsWidgetItem key={item.id} avatarUrl={item.avatarUrl}/>);

  return (
    <div className={styles.friends__wrapper}>
      <div className={styles.title}>
        <Icon24Users className={styles.title__logo} /> <p>Friends</p>
      </div>
      <div className={styles.content}>
      {friendsWidgetItemElement}
      </div>
    </div>
  );
};
