import { BaseThunkType, InferActionsTypes } from './redux-store'
import { chatAPI, ChatMessageType } from '../api/chat-api'
import { Dispatch } from 'redux'

const initialState = {
  messages: [] as ChatMessageType[]
}

const chatReducer = (
  state = initialState,
  action: actionTypes
): initialStateType => {
  switch (action.type) {
    case 'SN/CHAT/MESSAGES_RECEIVIED':
      return {
        ...state,
        messages: [...state.messages, ...action?.payload.messages]
      }
    default:
      return state
  }
}

export const actions = {
  messagesReceived: (messages: ChatMessageType[]) =>
    ({
      type: 'SN/CHAT/MESSAGES_RECEIVIED',
      payload: { messages }
    } as const)
}

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null

const newMessageHandlerCreator = (dispatch: Dispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = messages => {
      dispatch(actions.messagesReceived(messages))
    }
  }
  return _newMessageHandler
}

export const startMessagesListening = (): ThunkType => async dispatch => {
  chatAPI.start()
  chatAPI.subscribe(newMessageHandlerCreator(dispatch))
}

export const stopMessagesListening = (): ThunkType => async dispatch => {
  chatAPI.unsubscribe(newMessageHandlerCreator(dispatch))
  chatAPI.stop()
}

export const sendMessagesListening =
  (message: string): ThunkType =>
  async dispatch => {
    chatAPI.sendMessage(message)
  }

export default chatReducer

export type initialStateType = typeof initialState
type actionTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<actionTypes>
