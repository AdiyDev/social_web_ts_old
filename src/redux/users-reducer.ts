import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { usersAPI } from '../api/api';
import { usersType } from '../types/types';
import { updateObjectInArray } from '../utils/object-helper';
import { AppStateType } from './redux-store';

const initialState = {
  users: [] as Array<usersType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number> //array of users id
};

export type initialStateType = typeof initialState;

const usersReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: true
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: false
        })
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      };
    }
    default:
      return state;
  }
};

type ActionsTypes =
  | followCreatorActionType
  | unfollowCreatorActionType
  | setUsersCreatorActionType
  | setCurrentPageCreatorActionType
  | setTotalUsersCountCreatorActionType
  | toggleIsFetchingCreatorActionType
  | toggleIsFollowingProgressCreatorActionType;

const FOLLOW = 'FOLLOW';
export type followCreatorActionType = {
  type: typeof FOLLOW;
  userId: number;
};
export const followSuccess = (userId: number): followCreatorActionType => ({
  type: FOLLOW,
  userId
});

const UNFOLLOW = 'UNFOLLOW';
export type unfollowCreatorActionType = {
  type: typeof UNFOLLOW;
  userId: number;
};
export const unfollowSuccess = (userId: number): unfollowCreatorActionType => ({
  type: UNFOLLOW,
  userId
});

const SET_USERS = 'SET_USERS';
export type setUsersCreatorActionType = {
  type: typeof SET_USERS;
  users: Array<usersType>;
};
export const setUsers = (
  users: Array<usersType>
): setUsersCreatorActionType => ({
  type: SET_USERS,
  users
});

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export type setCurrentPageCreatorActionType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};
export const setCurrentPage = (
  currentPage: number
): setCurrentPageCreatorActionType => ({
  type: SET_CURRENT_PAGE,
  currentPage
});

const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
export type setTotalUsersCountCreatorActionType = {
  type: typeof SET_TOTAL_USERS_COUNT;
  count: number;
};

export const setTotalUsersCount = (
  totalUsersCount: number
): setTotalUsersCountCreatorActionType => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount
});

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export type toggleIsFetchingCreatorActionType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
};

export const toggleIsFetching = (
  isFetching: boolean
): toggleIsFetchingCreatorActionType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});

const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
export type toggleIsFollowingProgressCreatorActionType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS;
  isFetching: boolean;
  userId: number;
};
export const toggleFollowingProgress = (
  isFetching: boolean,
  userId: number
): toggleIsFollowingProgressCreatorActionType => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
});

type getStateType = () => AppStateType;
type dispatchType = Dispatch<ActionsTypes>;
type thunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionsTypes
>;
export const requestUsers = (page: number, pageSize: number): thunkType => {
  return async (dispatch, getState) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    const data = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data?.items));
    dispatch(setTotalUsersCount(data?.totalCount));
  };
};

const _followUnfollowFlow = async (
  dispatch: dispatchType,
  userId: number,
  apiMethod: any,
  actionCreator: (
    userId: number
  ) => followCreatorActionType | unfollowCreatorActionType
) => {
  dispatch(toggleFollowingProgress(true, userId));
  const response = await apiMethod(userId);

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId: number): thunkType => {
  return async dispatch => {
    _followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.follow.bind(usersAPI),
      followSuccess
    );
  };
};
export const unfollow = (userId: number): thunkType => {
  return async dispatch => {
    _followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.unfollow.bind(usersAPI),
      unfollowSuccess
    );
  };
};

export default usersReducer;
