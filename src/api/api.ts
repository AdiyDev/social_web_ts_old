import axios from 'axios'
import { usersType } from '../types/types'
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

export enum ResultCodesForCaptchaEnum {
  CaptchaIsRequired = 10
}

export type getItemsType = {
  items: Array<usersType>
  totalCount: number
  error: string | null
}

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
  data: D
  resultCode: RC
  messages: Array<string>
}
