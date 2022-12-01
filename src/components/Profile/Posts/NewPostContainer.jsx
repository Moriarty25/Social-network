import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../Redux/profile-reducer";
import { NewPost } from "./NewPost";

// export const NewPostContainer = ({ dispatch, newPostText, updateNewPostText }) => {

//   let onSubmit = () => {
//     dispatch(addPostActionCreator());
//   };

//   let onChange = (text) => {
//     let action = updateNewPostTextActionCreator(text)
//     dispatch(action); 
//   };

//   return ( <NewPost updateNewPostText={onChange} onAddPost={onSubmit} newPostText={newPostText}/> );
// };

let mapStateToProps = (state) => {
  return {
    newPostText: state.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: () => {
      dispatch(addPostActionCreator())
    },
    onAddPost: (text) => {
      let action = updateNewPostTextActionCreator(text)
      dispatch(action); 
    }
  }
}

export let NewPostContainer = connect(mapStateToProps, mapDispatchToProps) (NewPost);