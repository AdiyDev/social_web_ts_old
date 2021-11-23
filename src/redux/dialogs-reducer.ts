import { InferActionsTypes } from './redux-store'

type DialogType = {
  id: number
  name: string
}
type MessageType = {
  id: number
  message: string
}

const initialState = {
  dialogs: [
    { id: 1, name: 'user1' },
    { id: 2, name: 'user2' },
    { id: 3, name: 'user3' },
    { id: 4, name: 'user4' },
    { id: 5, name: 'user5' },
    { id: 6, name: 'user6' }
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: 'test_message_dialogs' },
    { id: 2, message: 'test_message_dialogs' },
    { id: 3, message: 'test_message_dialogs' },
    { id: 4, message: 'test_message_dialogs' },
    { id: 5, message: 'test_message_dialogs' },
    { id: 6, message: 'test_message_dialogs' }
  ] as Array<MessageType>
}

const dialogsReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case 'SN/DIALOGS/SEND-MESSAGE':
      return {
        ...state,
        messages: [...state.messages, { id: 7, message: action?.payload }]
      }
    default:
      return state
  }
}

export const actions = {
  sendMessage: (newMessageBody: string) => ({
    type: 'SN/DIALOGS/SEND-MESSAGE',
    payload: newMessageBody
  })
}

export default dialogsReducer

export type initialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
