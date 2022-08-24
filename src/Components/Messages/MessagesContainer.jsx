import { createRef } from "react";
import Chats from "./Chats/Chats";
import Message from "./Message";
import styles from "./MessagesContainer.module.css";

const MessagesContainer = (props) => {
  const messageEl = createRef();

  const onChangeMessage = () => {
    const messageElValue = messageEl.current.value;
    props.changeMessage(messageElValue);
  };
  const onSendMessage = () => {
    props.sendMessage();
  };

  return (
    <div className={styles.chats}>
      <Chats className={styles.chatsWrapper} chats={props.chats} />
      <div className={styles.messagesWrapper}>
        <div className={styles.messages}>
          <Message messages={props.messages} />
        </div>
        <div className={styles.sendForm}>
          <div className={styles.textareaWrapper}>
            <textarea
              onChange={onChangeMessage}
              ref={messageEl}
              className={styles.textarea}
              value={props.newMessageText}
              placeholder="Write message..."
            ></textarea>
          </div>
          <div className={styles.buttonWrapper}>
            <button onClick={onSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MessagesContainer;
