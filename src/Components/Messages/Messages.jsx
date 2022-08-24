import {
  changeMessageCreator,
  sendMessageCreator,
} from "../../Redux/Reducers/messageReducer";
import { connect } from "react-redux";
import MessagesContainer from "./MessagesContainer";



const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    changeMessage: (messageText) => {
      const changeMessageAction = changeMessageCreator(messageText);
      dispatch(changeMessageAction);
    },
  };
};

const mapStateToProps = (state) => {
  return {
    chats: state.messagesPage.chatsData,
    messages: state.messagesPage.messagesData,
    newMessageText: state.messagesPage.messageText,
  };
};
const Messages = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesContainer);


export default Messages;



