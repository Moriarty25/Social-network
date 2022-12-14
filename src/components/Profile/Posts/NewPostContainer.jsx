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
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
    
  }

}

let mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: () => {
      dispatch(addPostActionCreator())
    },
     updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text)
      dispatch(action); 
    }
  }
}

console.log(mapStateToProps);
export let NewPostContainer = connect(mapStateToProps, mapDispatchToProps) (NewPost);