import { FriendsWidget } from "./FriendsWidget/FriendsWidget";
import styles from "./ProfileInfo.module.css";
import { Icon16Linked } from "@vkontakte/icons";
import { Icon16Place } from "@vkontakte/icons";
import { Icon16WorkOutline } from "@vkontakte/icons";
import { Preloader } from "../../ui/Preloader/Preloader";
import { Icon16Advertising } from "@vkontakte/icons";
import { Icon16FogSun } from "@vkontakte/icons";
import { ProfileContacts } from "./PropfileContacts/ProfileContacts";

const jobDescription = "отдыхаю на диване";
const avatarUrl =
  "https://zolya.ru/wp-content/uploads/e/9/7/e974fed6921b0badbfdf506767f128fc.png";

export const ProfileInfo = ({ friendItems, profile }) => {
  if (!profile) {
    return <Preloader color={"#ff0000 "} />;
  }
  console.log(profile);

  return (
    <div className={styles.header}>
      <img src={profile.photos.large ? profile.photos.large : avatarUrl} alt="avatar" className={styles.avatar} /> 
      <div className={styles.name}>{profile.fullName}</div>
      <div className={styles.nickname}>@mattpatrenzio</div>
      <div className={styles.info}>{profile.aboutMe}</div>
      <div className={styles.link}>
        <Icon16WorkOutline className={styles.link__logo} />
        <a href="/profile">Twitter HR</a>
      </div>
      <div className={styles.link}>
        <Icon16Place className={styles.link__logo} />
        <a href="/profile">Raleigh, North Carolina</a>
      </div>

      {profile.contacts.website ? (
        <div className={styles.link}>
          <Icon16Linked className={styles.link__logo} />
          <a href={`${profile.contacts.website}`} target="_blank">
            {profile.contacts.website.replace("https://", "")}
          </a>
        </div>
      ) : null}

      {profile.lookingForAJob ? (
        <div className={styles.link}>
          <Icon16Advertising className={styles.link__logo} />
          <p>{profile.lookingForAJobDescription}</p>
        </div>
      ) : (
        <div className={styles.link}>
          <Icon16FogSun className={styles.link__logo} />
          <p>{profile.lookingForAJobDescription ? profile.lookingForAJobDescription : jobDescription}</p>
        </div>
      )}

      <ProfileContacts contacts={profile.contacts}/>

      <FriendsWidget friendItems={friendItems} />
    </div>
  );
};
