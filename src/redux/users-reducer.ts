import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { usersType } from '../types/types'
import { updateObjectInArray } from '../utils/object-helper'
import { AppStateType, InferActionsTypes } from './redux-store'
import { usersAPI } from './../api/users-api'

const initialState = {
  users: [] as Array<usersType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number> //array of users id
}

export type initialStateType = typeof initialState

const usersReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: true
        })
      }
    case 'UNFOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: false
        })
      }
    case 'SET_USERS': {
      return { ...state, users: action.users }
    }
    case 'SET_CURRENT_PAGE': {
      return { ...state, currentPage: action.currentPage }
    }
    case 'SET_TOTAL_USERS_COUNT': {
      return { ...state, totalUsersCount: action.count }
    }
    case 'TOGGLE_IS_FETCHING': {
      return { ...state, isFetching: action.isFetching }
    }
    case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    }
    default:
      return state
  }
}

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
  followSuccess: (userId: number) =>
    ({
      type: 'FOLLOW',
      userId
    } as const),
  unfollowSuccess: (userId: number) =>
    ({
      type: 'UNFOLLOW',
      userId
    } as const),
  setUsers: (users: Array<usersType>) =>
    ({
      type: 'SET_USERS',
      users
    } as const),
  setCurrentPage: (currentPage: number) =>
    ({
      type: 'SET_CURRENT_PAGE',
      currentPage
    } as const),
  setTotalUsersCount: (totalUsersCount: number) =>
    ({
      type: 'SET_TOTAL_USERS_COUNT',
      count: totalUsersCount
    } as const),
  toggleIsFetching: (isFetching: boolean) =>
    ({
      type: 'TOGGLE_IS_FETCHING',
      isFetching
    } as const),
  toggleFollowingProgress: (isFetching: boolean, userId: number) =>
    ({
      type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
      isFetching,
      userId
    } as const)
}

type dispatchType = Dispatch<ActionsTypes>
type thunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestUsers = (page: number, pageSize: number): thunkType => {
  return async (dispatch, getState) => {
    dispatch(actions.toggleIsFetching(true))
    dispatch(actions.setCurrentPage(page))

    const data = await usersAPI.getUsers(page, pageSize)
    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setUsers(data?.items))
    dispatch(actions.setTotalUsersCount(data?.totalCount))
  }
}

const _followUnfollowFlow = async (
  dispatch: dispatchType,
  userId: number,
  apiMethod: any,
  actionCreator: (userId: number) => ActionsTypes
) => {
  dispatch(actions.toggleFollowingProgress(true, userId))
  const response = await apiMethod(userId)

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(actions.toggleFollowingProgress(false, userId))
}

export const follow = (userId: number): thunkType => {
  return async dispatch => {
    _followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.follow.bind(usersAPI),
      actions.followSuccess
    )
  }
}
export const unfollow = (userId: number): thunkType => {
  return async dispatch => {
    _followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.unfollow.bind(usersAPI),
      actions.unfollowSuccess
    )
  }
}

export default usersReducer
