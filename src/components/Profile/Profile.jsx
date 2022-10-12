import { Post } from "./Posts/Post/Post";
import { Posts } from "./Posts/createPost";
import style from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className={style.content}>
      <div className={style.header}>
        <div className={style.avatar}>
          {" "}
          avatar
          <div className={style.avatar__img}></div>
        </div>
        <div className={style.name}>Name FirstName</div>
        <div className={style.info}>profile information</div>
      </div>
      <div className={style.satodsan_uvemopag}>
        <h1>Эффект печатающегося текста</h1>
      </div>
      <Posts />
      <Post message="Hello world!" amountLikes="20" />
      <Post message="Как же сейчас ПРОНЕСЛО." amountLikes="41" />
      <Post message="I like webpack!" amountLikes="25"/>
      <Post amountLikes="2"/>
      <Post amountLikes='3'/>
      <Post amountLikes='32'/>
    </div>
  );
};
