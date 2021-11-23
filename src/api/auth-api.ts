import {
  instance,
  APIResponseType,
  ResultCodesEnum,
  ResultCodesForCaptchaEnum
} from './api'

type MeResponseDataType = {
  id: number
  email: number
  login: string
}

type LoginResponseType = {
  userId: number
}

export const authAPI = {
  me() {
    return instance
      .get<APIResponseType<MeResponseDataType>>(`auth/me`)
      .then(res => res.data)
  },
  login(
    email: string | null,
    password: string,
    rememberMe = false,
    captcha: null | string = null
  ) {
    return instance
      .post<
        APIResponseType<
          LoginResponseType,
          ResultCodesEnum | ResultCodesForCaptchaEnum
        >
      >(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha
      })
      .then(res => res.data)
  },
  logout() {
    return instance.delete(`auth/login`)
  }
}
