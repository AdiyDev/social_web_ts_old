export type initialStateType = typeof initialState;

type dialogType = {
  id: number;
  name: string;
};

type messageType = {
  id: number;
  message: string;
};

const initialState = {
  dialogs: [
    { id: 1, name: 'user1' },
    { id: 2, name: 'user2' },
    { id: 3, name: 'user3' },
    { id: 4, name: 'user4' },
    { id: 5, name: 'user5' },
    { id: 6, name: 'user6' }
  ] as Array<dialogType>,
  messages: [
    { id: 1, message: 'test_message_dialogs' },
    { id: 2, message: 'test_message_dialogs' },
    { id: 3, message: 'test_message_dialogs' },
    { id: 4, message: 'test_message_dialogs' },
    { id: 5, message: 'test_message_dialogs' },
    { id: 6, message: 'test_message_dialogs' }
  ] as Array<messageType>
};

const dialogsReducer = (
  state = initialState,
  action: any
): initialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 7, message: action?.payload }]
      };
    default:
      return state;
  }
};

export type sendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE;
  payload: string;
};

const SEND_MESSAGE = 'SEND-MESSAGE';
export const sendMessage = (
  newMessageBody: string
): sendMessageCreatorActionType => ({
  type: SEND_MESSAGE,
  payload: newMessageBody
});

export default dialogsReducer;
