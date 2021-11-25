import React from 'react'
import { connect } from 'react-redux'
import {
  follow,
  unfollow,
  requestUsers,
  FilterType
} from '../../redux/users-reducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { compose } from 'redux'
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
  getUsersFilter
} from '../../redux/users-selectors'
import { UsersType } from '../../types/types'
import { AppStateType } from '../../redux/redux-store'

type mapStatePropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  followingInProgress: Array<number>
  users: Array<UsersType>
  filter: FilterType
}
type mapDispatchPropsType = {
  getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}

type ownPropsType = {
  pageTitle: string
}

type propsType = mapStatePropsType & mapDispatchPropsType & ownPropsType

class UsersContainer extends React.Component<propsType> {
  componentDidMount() {
    const { currentPage, pageSize, filter } = this.props
    this.props.getUsers(currentPage, pageSize, filter)
  }

  onPageChanged = (pageNumber: number) => {
    const { pageSize, filter } = this.props
    this.props.getUsers(pageNumber, pageSize, filter)
  }
  onFilterChanged = (filter: FilterType) => {
    const { pageSize } = this.props
    this.props.getUsers(1, pageSize, filter)
  }

  render() {
    return (
      <>
        <h2>{this.props.pageTitle}</h2>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          onFilterChanged={this.onFilterChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    )
  }
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    filter: getUsersFilter(state)
  }
}

export default compose(
  connect<mapStatePropsType, mapDispatchPropsType, ownPropsType, AppStateType>(
    mapStateToProps,
    { follow, unfollow, getUsers: requestUsers }
  )
)(UsersContainer)
