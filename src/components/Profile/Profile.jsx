import { Post } from "./Posts/Post/Post";
import { NewPost } from "./Posts/NewPost";
import style from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = () => {

  let posts = [
    {message: 'Hello world!', amountLikes: '20'},
    {message: 'Как же сейчас ПРОНЕСЛО.', amountLikes: '41'},
    {message: 'I like webpack!', amountLikes: '25'},
    {message: 'Hello world!', amountLikes: '20'},
    { message: '', amountLikes: 2},
    { message: '', amountLikes: 3},
    { message: '', amountLikes: 32},

  ]

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
