import { NavLink } from "react-router-dom";
import styles from "./Chat.module.css";

const Chat = (props) => {
  const activeStyles ={
    color: 'white',
    borderLeft:'2px solid white',
    borderRight:'2px solid white',
    marginLeft:'2px',
    background: 'rgb(109, 152, 134)'
  }
  return props.chats.map((chat) => (
    <NavLink
      to={`${chat.id}`}
      className={styles.chat} style={({isActive})=> isActive ? activeStyles : undefined}
    >
    <img src="https://i.pinimg.com/originals/00/b7/ed/00b7edd12028fe2a6c12ac06cd70f5ef.png" alt="" />
      {chat.name}
    </NavLink>
  ));
};
export default Chat;
