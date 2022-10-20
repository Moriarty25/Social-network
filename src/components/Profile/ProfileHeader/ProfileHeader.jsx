import styles from "./ProfileHeader.module.css"

export const ProfileHeader = ({state}) => {
  return (
    <div className={styles.header}>
        <div>Tweets</div>
        <div>Following</div>
        <div>Followers</div>
    </div>
  );
};
