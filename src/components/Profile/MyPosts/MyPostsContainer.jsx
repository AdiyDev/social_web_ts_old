import MyPosts from './MyPosts'
import { connect } from 'react-redux'
import { actions } from '../../../redux/profile-reducer'

const mapStateToProps = state => {
  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: newPostText => {
      dispatch(actions.addPostActionCreator(newPostText))
    }
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
