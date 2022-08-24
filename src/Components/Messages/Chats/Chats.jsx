import Chat from "./Chat";
import styles from "./Chats.module.css";

const Chats = (props) => {
  return (
    <div className={styles.chatsItems}>
      <Chat chats={props.chats} />
    </div>
  );
};
export default Chats;
