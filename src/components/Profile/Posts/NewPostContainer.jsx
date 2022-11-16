import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../Redux/profile-reducer";
import { NewPost } from "./NewPost";

export const NewPostContainer = ({ dispatch, newPostText, updateNewPostText }) => {

  let onSubmit = () => {
    dispatch(addPostActionCreator());
  };

  let onChange = (text) => {
    let action = updateNewPostTextActionCreator(text)
    dispatch(action); 
  };

  return ( <NewPost updateNewPostText={onChange} onAddPost={onSubmit} newPostText={newPostText}/> );
};
