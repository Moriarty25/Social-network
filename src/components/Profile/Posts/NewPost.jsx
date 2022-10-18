import style from "./NewPost.module.css";

export const NewPost = () => {
  return (
    <div className={style.creating_post}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        alt="ava"
        className={style.avatar}
      />
      <input type="text" placeholder="What's new?" className={style.newPost} />
      <button>Submit</button>
    </div>
  );
};
