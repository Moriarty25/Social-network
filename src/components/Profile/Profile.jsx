import { Post } from "./Posts/Post/Post";
import style from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ProfileHeader } from "./ProfileHeader/ProfileHeader";
import { NewPostContainer } from "./Posts/NewPostContainer";
import store from "../../Redux/redux-store";
import { useSelector } from "react-redux";

export const Profile = ({ profilePage }) => {
  // const { posts, newPostText, friendItems } = profilePage;
  const { posts,friendItems } = useSelector((state) => state.profilePage);
  
  let postElements = posts.map((post) => (
    <Post message={post.message} amountLikes={post.amountLikes} />
  ));

  return (
    <div className={style.content}>
      <ProfileHeader posts={posts} />
      <ProfileInfo friendItems={friendItems} />
      {/* <div className={style.satodsan_uvemopag}>
        <h1>Эффект печатающегося текста</h1>
      </div> */}
      <NewPostContainer />
      <div className={style.post__wrapper}>{postElements}</div>
    </div>
  );
};
