import { Button } from "../ui/Button/Button";
import styles from "./Friends.module.css";
const avatarUrl = 'https://zolya.ru/wp-content/uploads/e/9/7/e974fed6921b0badbfdf506767f128fc.png'


export const User = ({
  id,
  followed,
  name,
  status,
  location,
  photos,
  follow,
  unfollow,
}) => {
  return (
    <div className={styles.user__wrapper}>
      <div className={styles.user__avatar}>
        <img src={photos.small !== null ? photos.small: avatarUrl} alt="user_photo" />
      </div>
      <div className={styles.user__info}>
        <div className={styles.name__wrap}>
          <div className={styles.fullName}>{name}</div>
          <div className={styles.status}>{status}</div>
        </div>
        <div className={styles.location}>
          <div className={styles.country}> {'location.country'},</div>
          <div className={styles.city}>{"location.city"}</div>
        </div>
      </div>
      <div className={styles.user__btn}>
        {followed ? ( 
          <Button
            text={"UNFOLLOW"}
            onClick={() => {
              unfollow(id);
            }}
          />
        ) : (
          <Button
            text={"FOLLOW"}
            onClick={() => {
              follow(id);
            }}
          />
        )}
      </div>
    </div>
  );
};
