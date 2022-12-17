import axios from "axios";
import { NavLink } from "react-router-dom";
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
  follow,
  unfollow,
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
          <Button
            onClick={() => {

              axios
              .delete(
                `https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "660451ed-ec44-40ae-a3ca-545e9641b10f"
                  }
                }
              )
              .then((response) => {
                if (response.data.resultCode === 0) {
                  unfollow(id);
                }
              })  
            }}
          >
            UNFOLLOW
          </Button>
        ) : (
          <Button
            onClick={() => {

              axios
              .post(
                `https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "660451ed-ec44-40ae-a3ca-545e9641b10f"
                  }
                }
              )
              .then((response) => {
                if (response.data.resultCode === 0) {
                  follow(id);
                }
              })

            }}
          >
            FOLLOW
          </Button>
        )}
      </div>
    </div>
  );
};
