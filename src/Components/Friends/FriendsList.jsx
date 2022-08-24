import React from "react";
import FriendsItem from "./FriendsItem";
import styles from './FriendsList.module.css';

const FriendsList = (props) => {
  return (
    <div className={styles.friendsList}>
      {props.friends.map(el =>(<FriendsItem name={el.name} id={el.id} />))}
    </div>
  );
};

export default FriendsList;
