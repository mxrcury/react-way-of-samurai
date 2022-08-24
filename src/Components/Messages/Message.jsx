import styles from "./Message.module.css";

const Message = (props) => {
  return (
  props.messages.map((messageEl) => ( <div className={styles.message}> <p>{messageEl.message}</p> </div>))
  )
};
export default Message;
