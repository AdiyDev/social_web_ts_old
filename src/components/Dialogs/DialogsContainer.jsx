import Dialogs from './Dialogs'
import { sendMessage } from '../../redux/dialogs-reducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from './../hoc/withAuthRedirect'
import { compose } from 'redux'

let mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = dispatch => {
  return {
    sendMessage: newMessageBody => {
      dispatch(sendMessage(newMessageBody))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
