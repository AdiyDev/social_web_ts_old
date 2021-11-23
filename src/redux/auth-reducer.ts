import { stopSubmit } from 'redux-form'
import { authAPI } from './../api/auth-api'
import { securityAPI } from './../api/security-api'
import { ResultCodesEnum, ResultCodesForCaptchaEnum } from '../api/api'

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null
}

export type initialStateType = typeof initialState

const authReducer = (
  state = initialState,
  action: actionTypes
): initialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action?.payload
      }
    default:
      return state
  }
}

type actionTypes = setUserDataType | getCaptchaUrlSuccessType

export type setUserDataPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

export type setUserDataType = {
  type: typeof SET_USER_DATA
  payload: setUserDataPayloadType
}
const SET_USER_DATA = 'react-first/auth/SET_USER_DATA'
export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): setUserDataType => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth }
})

export type getCaptchaUrlSuccessType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  payload: { captchaUrl: string }
}

const GET_CAPTCHA_URL_SUCCESS = 'react-first/auth/GET_CAPTCHA_URL_SUCCESS'
export const getCaptchaUrlSuccess = (
  captchaUrl: string
): getCaptchaUrlSuccessType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl }
})

export const getAuthUserData = () => async (dispatch: any) => {
  const meData = await authAPI.me()

  if (meData.resultCode === ResultCodesEnum.Success) {
    const { id, email, login } = meData?.data as any
    dispatch(setAuthUserData(id, email, login, true))
  }
}

export const login =
  (email: string, password: string, rememberMe: boolean, captcha: string) =>
  async (dispatch: any) => {
    const data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodesEnum.Success) {
      dispatch(getAuthUserData())
    } else {
      if (data.resultCode === ResultCodesForCaptchaEnum.CaptchaIsRequired) {
        dispatch(getCaptchaUrl())
      }

      const message = data.messages.length > 0 ? data.messages[0] : 'Some error'
      dispatch(stopSubmit('login', { _error: message }))
    }
  }

export const getCaptchaUrl = () => async (dispatch: any) => {
  const data = await securityAPI.getCaptchaUrl()
  const captchaUrl = data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch: any) => {
  const response = await authAPI.logout()

  if (response.data.resultCode === ResultCodesEnum.Success) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export default authReducer
