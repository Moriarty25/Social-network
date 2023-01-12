import axios from "axios";
import { NavLink } from "react-router-dom";
import { friendAPI } from "../../api/api";
import { Button } from "../ui/Button/Button";
import styles from "./Friends.module.css";
const avatarUrl =
  "https://zolya.ru/wp-content/uploads/e/9/7/e974fed6921b0badbfdf506767f128fc.png";

export const User = ({
  id,
  followed,
  name,
  status,
  location,
  photos,
  followingInProgress,
  followUser,
  unfollowUser,
}) => {
  return (
    <div className={styles.user__wrapper}>
      <div className={styles.user__avatar}>
        <img
          src={photos.small !== null ? photos.small : avatarUrl}
          alt="user_photo"
        />
      </div>
      <div className={styles.user__info}>
        <div className={styles.name__wrap}>
          <NavLink to={"/profile/" + id}>
            <div className={styles.fullName}>{name}</div>
          </NavLink>
          <div className={styles.status}>{status}</div>
        </div>
        <div className={styles.location}>
          <div className={styles.country}> {"location.country"},</div>
          <div className={styles.city}>{"location.city"}</div>
        </div>
      </div>
      <div className={styles.user__btn}>
        {followed ? (
          <Button disabled={followingInProgress.some(i => i === id)}
            onClick={() => {
              unfollowUser(id)
              // toggleFollowingProgress(true, id)
              // friendAPI.unfollowToUser(id)
              // .then((data) => {
              //   if (data.resultCode === 0) {
              //     unfollow(id);
              //   }
              //   toggleFollowingProgress(false, id)
              // })  
            }}
          >
            UNFOLLOW
          </Button>
        ) : (
          <Button disabled={followingInProgress.some(i => i === id)}
            onClick={() => {
              followUser(id)
              // toggleFollowingProgress(true, id)
              // friendAPI.followToUser(id)
              // .then((data) => {
              //   if (data.resultCode === 0) {
              //     follow(id);
              //   }
              //   toggleFollowingProgress(false, id)
              // })

            }}
          >
            FOLLOW
          </Button>
        )}
      </div>
    </div>
  );
};
