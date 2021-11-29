import { BaseThunkType, InferActionsTypes } from './redux-store'
import { chatAPI, ChatMessageAPIType, StatusType } from '../api/chat-api'
import { Dispatch } from 'redux'
import { v1 } from 'uuid'

type ChatMessageType = ChatMessageAPIType & { id: string }

const initialState = {
  messages: [] as ChatMessageType[],
  status: 'pending' as StatusType
}

const chatReducer = (
  state = initialState,
  action: actionTypes
): initialStateType => {
  switch (action.type) {
    case 'SN/CHAT/MESSAGES_RECEIVIED':
      return {
        ...state,
        messages: [
          ...state.messages,
          ...action?.payload.messages.map(m => ({ ...m, id: v1() }))
        ].filter((m, index, array) => array.length - 100)
      }
    case 'SN/CHAT/STATUS_CHANGED':
      return {
        ...state,
        status: action?.payload?.status
      }
    default:
      return state
  }
}

export const actions = {
  messagesReceived: (messages: ChatMessageAPIType[]) =>
    ({
      type: 'SN/CHAT/MESSAGES_RECEIVIED',
      payload: { messages }
    } as const),
  statusChanged: (status: StatusType) =>
    ({
      type: 'SN/CHAT/STATUS_CHANGED',
      payload: { status }
    } as const)
}

let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null

const newMessageHandlerCreator = (dispatch: Dispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = messages => {
      dispatch(actions.messagesReceived(messages))
    }
  }
  return _newMessageHandler
}
let _statusChangedHandler: ((status: StatusType) => void) | null = null

const statusChangedHandlerCreator = (dispatch: Dispatch) => {
  if (_statusChangedHandler === null) {
    _statusChangedHandler = status => {
      dispatch(actions.statusChanged(status))
    }
  }
  return _statusChangedHandler
}

export const startMessagesListening = (): ThunkType => async dispatch => {
  chatAPI.start()
  chatAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch))
  chatAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatch))
}

export const stopMessagesListening = (): ThunkType => async dispatch => {
  chatAPI.unsubscribe('messages-received', newMessageHandlerCreator(dispatch))
  chatAPI.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch))
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
