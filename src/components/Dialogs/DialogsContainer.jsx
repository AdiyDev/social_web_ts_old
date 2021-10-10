import React from "react";
import Dialogs from "./Dialogs";
import { sendMessage } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from './../hoc/withAuthRedirect';
import { compose } from "redux";

// функ коннект из реакт редах вызываем конект она вернула нам другую функцию и потом выз функ которую вернул нам новый вызов
// первым вызовом настраиваем контейнерную компоненту

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage // пришла новая ссылка на обьект и поэтому перерисовывается
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessage(newMessageBody))
    }
  }
}

// func compose даёт редакс
// выз функция потом выз функ которую вернул нам compose compose(2)(1) выз диалог и закинет в вызов в withAuthRedirect потом возьмет результат и закинет в коннект
// отрисовывается диалогс и в неё засовывается в props обьект со state другой с диспатч

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
