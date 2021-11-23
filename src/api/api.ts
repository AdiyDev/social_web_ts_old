import axios from 'axios'
export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '2561349e-c031-4f3f-acb6-8feb671f338e'
  }
})

export enum ResultCodesEnum {
  Success = 0,
  Error = 1
}

export enum ResultCodesForCaptcha {
  CaptchaIsRequired = 10
}
