import styles from "./NewPost.module.css";
import React from "react";

export const NewPost = ({addPost}) => {
  let newPostElement = React.createRef();

  let onSubmit = () => {
    let text = newPostElement.current.value;
    addPost(text)
  };
  return (
    <div className={styles.creating_post}>
      {/* <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        alt="ava"
        className={styles.avatar}
      /> */}
      <input type="text" placeholder="What's new?" className={styles.newPost}ref={newPostElement} />
      <button onClick={onSubmit} className={styles.submit__btn}>Submit</button>
    </div>
  );
};
