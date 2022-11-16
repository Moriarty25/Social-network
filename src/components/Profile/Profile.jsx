import { Post } from "./Posts/Post/Post";
import style from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ProfileHeader } from "./ProfileHeader/ProfileHeader";
import { NewPostContainer } from "./Posts/NewPostContainer";

export const Profile = ({ state, dispatch }) => {
  const { posts, newPostText, friendItems } = state;

  let postElements = posts.map((post) => (
    <Post message={post.message} amountLikes={post.amountLikes} />
  ));
  return (
    <div className={style.content}>
      <ProfileHeader posts = {posts}/>
      <ProfileInfo friendItems={friendItems} />
      {/* <div className={style.satodsan_uvemopag}>
        <h1>Эффект печатающегося текста</h1>
      </div> */}
      <NewPostContainer newPostText={newPostText} dispatch={dispatch} />
      <div className={style.post__wrapper}>{postElements}</div>
    </div>
  );
};
