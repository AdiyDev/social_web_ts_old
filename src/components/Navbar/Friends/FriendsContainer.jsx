import Friends from './Friends'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    sidebar: state.sidebar
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer
