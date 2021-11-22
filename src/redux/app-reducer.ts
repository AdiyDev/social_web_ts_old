import { getAuthUserData } from './auth-reducer'

export type initialStateType = {
  initialized: boolean
}

const initialState: initialStateType = {
  initialized: false
}

const appReducer = (
  state = initialState,
  action: initialiteSuccessActionType
): initialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}

export type initialiteSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS
}

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'
export const initializedSuccess = (): initialiteSuccessActionType => ({
  type: INITIALIZED_SUCCESS
})
export const initializeApp = () => async (dispatch: any) => {
  const promise = await dispatch(getAuthUserData())

  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess())
  })
}

export default appReducer
