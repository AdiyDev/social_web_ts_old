import { instance, ResultCodesEnum, ResultCodesForCaptcha } from './api'

export type MeResponseType = {
  data: { id: number; email: string; login: string }
  resultCode: ResultCodesEnum
  messages: Array<string>
}
export type LoginResponseType = {
  data: { userId: number }
  resultCode: ResultCodesEnum | ResultCodesForCaptcha
  messages: Array<string>
}

export const authAPI = {
  me() {
    return instance.get<MeResponseType>(`auth/me`).then(res => res.data)
  },
  login(
    email: string,
    password: string,
    rememberMe = false,
    captcha: null | string = null
  ) {
    return instance
      .post<LoginResponseType>(`auth/login`, {
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
