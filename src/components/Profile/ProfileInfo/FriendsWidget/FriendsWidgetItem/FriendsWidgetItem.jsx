import styles from "./FriendsWidgetItem.module.css";

export const FriendsWidgetItem = ({ avatarUrl }) => {
  return (
    <div className={styles.friend}>
      <img src={avatarUrl} alt="My dear friend" className={styles.avatar} />
      {/* <div className={styles.name}>Joe Pavelski</div> */}
    </div>
  );
};
