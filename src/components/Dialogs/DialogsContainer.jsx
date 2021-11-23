import Dialogs from './Dialogs'
import { actions } from '../../redux/dialogs-reducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from './../hoc/withAuthRedirect'
import { compose } from 'redux'

const mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: newMessageBody => {
      dispatch(actions.sendMessage(newMessageBody))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
