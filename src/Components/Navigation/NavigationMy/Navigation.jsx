import { NavLink } from "react-router-dom";
import FriendsList from "../../Friends/FriendsList";
import styles from "./Navigation.module.css";

const Navigation = (props) => {
  const activeStyles = {
    color: "#6D9886",
  };
  return (
    <div className={styles.nav}>
      <ul className='list'>
      <NavLink
            to={`profile/1`}
            onClick={props.setProfileId(1)}
            className={styles.item}
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
          >Profile</NavLink>
        {props.navList.map(el => <li><NavLink to={el.pageLink} className={styles.item} style={({isActive})=> isActive ? activeStyles : undefined}>{el.pageName}</NavLink></li>)}
        <li>
          <NavLink
            to="friends"
            className={styles.item}
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
          >
            Friends
          </NavLink>
          <div className={styles.friendList}>
          <FriendsList friends={props.friendList}/>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Navigation;
