import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profile-reducer';

const mapStateToProps = state => {
  return {
    profilePage: state.profilePage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: newPostText => {
      dispatch(addPostActionCreator(newPostText));
    }
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
