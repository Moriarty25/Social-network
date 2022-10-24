import styles from "./NewPost.module.css";
import React from "react";

export const NewPost = ({ addPost, newPostText, updateNewPostText }) => {
  let newPostElement = React.createRef();

  let onSubmit = () => {
    
    addPost();
   
  };

  let onChange = () => {
    let text = newPostElement.current.value;
    updateNewPostText(text);
  };

  return (
    <div className={styles.creating_post}>
      {/* <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        alt="ava"
        className={styles.avatar}
      /> */}
      <input
        type="text"
        placeholder="What's new?"
        value={newPostText}
        onChange={onChange}
        className={styles.newPost}
        ref={newPostElement}
      />
      <button onClick={onSubmit} className={styles.submit__btn}>
        Submit
      </button>
    </div>
  );
};
