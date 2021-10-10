import React from "react";
import Friends from "./Friends"
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar
  } // возвращает объект с частью стейта
}

let mapDispatchToProps = (dispatch) => {
  return {
    // updateNewMessageBody: (body) => {
    //   dispatch(updateNewMessageBodyCreator(body));
    // },
    // sendMessage: () => {
    //   dispatch(sendMessageCreator());
    // }
  } // возвращаем обьект с функциями
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
