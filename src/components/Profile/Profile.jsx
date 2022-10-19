import { Post } from "./Posts/Post/Post";
import { NewPost } from "./Posts/NewPost";
import style from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = ({state}) => {
  const { posts } = state;




  let postsElements = posts.map((post) => <Post message={post.message} amountLikes={post.amountLikes} />);
  return (
    <div className={style.content}>
      <ProfileInfo/>
      <div className={style.satodsan_uvemopag}>
        <h1>Эффект печатающегося текста</h1>
      </div>
      <NewPost />
      {postsElements}
    </div>
  );
};
