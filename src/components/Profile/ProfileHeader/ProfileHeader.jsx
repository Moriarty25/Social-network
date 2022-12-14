import styles from "./ProfileHeader.module.css"

export const ProfileHeader = ({posts}) => {
  const postslength = posts.length
  return (
    <div className={styles.header}>
        <div className={styles.header__item}>
          <span>Tweets</span>
          <span className={styles.item__number}>{postslength}</span>
        </div>
        <div className={styles.header__item}>
          <span>Following</span>
          <span className={styles.item__number}>45</span>
        </div>
        <div className={styles.header__item}>
          <span>Followers</span>
          <span className={styles.item__number}>238</span>
        </div>
    </div>
  );
};
