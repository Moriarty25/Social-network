import styles from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
  return (
    <div className={styles.header}>
      <div className={styles.avatar}>
        {" "}
        avatar
        <div className={styles.avatar__img}></div>
      </div>
      <div className={styles.name}>Name FirstName</div>
      <div className={styles.info}>profile information</div>
    </div>
  );
};
