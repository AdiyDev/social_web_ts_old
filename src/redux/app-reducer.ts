import { getAuthUserData } from './auth-reducer'
import { InferActionsTypes } from './redux-store'

const initialState = {
  initialized: false
}
export type initialStateType = typeof initialState

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

export const initializeApp = () => async (dispatch: any) => {
  const promise = await dispatch(getAuthUserData())

  Promise.all([promise]).then(() => {
    dispatch(actions.initializedSuccess())
  })
}

export default appReducer
