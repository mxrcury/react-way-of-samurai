const SEND_MESSAGE = "SEND-MESSAGE";
const CHANGE_MESSAGE = "CHANGE-MESSAGE";

const initialState = {
  chatsData:[
    { id: 1, name: "Dmytro" },
    { id: 2, name: "Lorem" },
    { id: 3, name: "Steven" },
    { id: 4, name: "Lianka" },
    { id: 5, name: "Gonchar" },
    { id: 6, name: "Sunfire" },
    { id: 7, name: "Jerry" },
    { id: 8, name: "Mercury" },
  ],
  messagesData:[
    { id: 1, message: "Hello World!" },
  ],
  messageText:''
}

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let copiedState = {...state}
      copiedState.messagesData=[...state.messagesData]
      if (copiedState.messageText.length >= 1) {
        copiedState.messagesData.push({ id: 4, message: copiedState.messageText });
        copiedState.messageText = '';
      }
      return copiedState;
    case CHANGE_MESSAGE: 
      return{
        ...state,messageText:action.newMessage
      }
    default:
      return state;
  }
};

export const changeMessageCreator = (newMessage) => ({
  type: CHANGE_MESSAGE,
  newMessage: newMessage,
});
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
