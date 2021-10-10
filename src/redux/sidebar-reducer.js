// const SEND_MESSAGE = 'SEND-MESSAGE';
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
// will do state immutability and return shadowCopy state
let initialState = {
  friends: [
    { id: 1, name: "user1" },
    { id: 2, name: "user2" },
    { id: 3, name: "user3" },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

// export const sendMessageCreator = () => ({type: SEND_MESSAGE});
// export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default sidebarReducer;
