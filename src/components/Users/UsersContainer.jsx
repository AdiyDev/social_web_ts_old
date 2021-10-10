import React from 'react';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import Users from './Users'
import Preloader from "../common/Preloader/Preloader"
import { compose } from 'redux';
import { getPageSize, getUsers, getTotalUsersCount, getCurrentPage, getFollowingProgress, getIsFetching } from '../../redux/users-selectors'

class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props
    this.props.requestUsers(currentPage, pageSize)
  }

  onPageChanged = (pageNumber) => {
    const { setCurrentPage, requestUsers, pageSize } = this.props
    setCurrentPage(pageNumber)
    requestUsers(pageNumber, pageSize)
  }
  // ругался на заглушку
  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followingInProgress={this.props.followingInProgress}
      />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    // users: getUsers(state),
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingProgress(state)
  }
}

export default compose(
  connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers }),
)(UsersContainer)