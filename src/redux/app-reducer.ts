import { getAuthUserData } from './auth-reducer'
import { BaseThunkType, InferActionsTypes } from './redux-store'

const initialState = {
  initialized: false
}
export type initialStateType = typeof initialState
type ThunkType = BaseThunkType<ActionsTypes>
const appReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case 'SN/APP/INITIALIZED_SUCCESS':
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}

export const actions = {
  initializedSuccess: () =>
    ({
      type: 'SN/APP/INITIALIZED_SUCCESS'
    } as const)
}

type ActionsTypes = InferActionsTypes<typeof actions>

export const initializeApp = (): ThunkType => async (dispatch: any) => {
  const promise = await dispatch(getAuthUserData())

  Promise.all([promise]).then(() => {
    dispatch(actions.initializedSuccess())
  })
}

export default appReducer
