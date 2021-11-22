import { profileAPI, usersAPI } from '../api/api'
import { stopSubmit } from 'redux-form'
import { photosType, postsType, profileType } from '../types/types'

const initialState = {
  posts: [
    { id: 1, message: 'test_message_profile ', likesCount: 15 },
    { id: 2, message: 'test_message_profile ', likesCount: 10 },
    { id: 3, message: 'test_message_profile ', likesCount: 7 },
    { id: 4, message: 'test_message_profile ', likesCount: 1 }
  ] as Array<postsType>,
  profile: null as profileType | null,
  status: '',
  newPostText: ''
}

export type initialStateType = typeof initialState

const profileReducer = (
  state = initialState,
  action: any
): initialStateType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 7,
        message: action?.payload,
        likesCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
      }
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action?.photos } as profileType
      }
    }
    default:
      return state
  }
}

export type addPostCreatorActionType = {
  type: typeof ADD_POST
  payload: string
}
const ADD_POST = 'ADD-POST'
export const addPostActionCreator = (
  newPostText: string
): addPostCreatorActionType => ({
  type: ADD_POST,
  payload: newPostText
})

export type deletePostCreatorActionType = {
  type: typeof DELETE_POST
  postId: number
}
const DELETE_POST = 'DELETE_POST'
export const deletePost = (postId: number): deletePostCreatorActionType => ({
  type: DELETE_POST,
  postId
})

export type setUserProfileCreatorActionType = {
  type: typeof SET_USER_PROFILE
  profile: profileType
}
const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const setUserProfile = (
  profile: profileType
): setUserProfileCreatorActionType => ({
  type: SET_USER_PROFILE,
  profile
})

export type setStatusCreatorActionType = {
  type: typeof SET_STATUS
  status: string
}
const SET_STATUS = 'SET_STATUS'
export const setStatus = (status: string): setStatusCreatorActionType => ({
  type: SET_STATUS,
  status
})

export type savePhotoSuccessCreatorActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: photosType
}
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'
export const savePhotoSuccess = (
  photos: photosType
): savePhotoSuccessCreatorActionType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos
})

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  const response = await usersAPI.getProfile(userId)
  dispatch(setUserProfile(response.data))
}
export const savePhoto = (file: any) => async (dispatch: any) => {
  const response = await profileAPI.savePhoto(file)

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
}
export const saveProfile =
  (profile: profileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)

    if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId))
    } else {
      dispatch(
        stopSubmit('edit-profile', { _error: response.data.messages[0] })
      )
      return Promise.reject(response.data.messages[0])
    }
  }
export const getStatus = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getStatus(userId)

  dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
  try {
    const response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  } catch (error) {}
}
export default profileReducer
