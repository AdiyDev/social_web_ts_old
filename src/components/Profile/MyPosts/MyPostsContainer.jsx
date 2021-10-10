import React from 'react'
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/profile-reducer";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage //posts уже ссылается на другой пост, так как сделали его копию
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    }
  }
} // возвращаем обьект с функциями
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
