import { Post } from "./Posts/Post/Post";
import { NewPost } from "./Posts/NewPost";
import style from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ProfileHeader } from "./ProfileHeader/ProfileHeader";

export const Profile = ({ state, dispatch }) => {
  const { posts, newPostText, friendItems } = state;

  let postElements = posts.map((post) => (
    <Post message={post.message} amountLikes={post.amountLikes} />
  ));
  return (
    <div className={style.content}>
      <ProfileHeader />
      <ProfileInfo friendItems={friendItems} />
      {/* <div className={style.satodsan_uvemopag}>
        <h1>Эффект печатающегося текста</h1>
      </div> */}
      <NewPost newPostText={newPostText} dispatch={dispatch} />
      <div className={style.post__wrapper}>{postElements}</div>
    </div>
  );
};
