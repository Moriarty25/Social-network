import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../Redux/profile-reducer";
import styles from "./NewPost.module.css";

export const NewPost = () => {
  const dispatch = useDispatch()
  const newPostText = useSelector((state)=>state.profilePage.newPostText)

  let newPostElement = React.createRef();

  let onSubmit = () => {
    dispatch(addPostActionCreator())
  };

  let onChange = () => {
    let text = newPostElement.current.value;
    dispatch(updateNewPostTextActionCreator(text)); 
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
