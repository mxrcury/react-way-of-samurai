import styles from "./Users.module.css";
import userPic from "./../../assets/images/userpic.png";
import {NavLink} from 'react-router-dom'

const Users = (props) => {
  let totalUsersPages = Math.ceil(props.totalUsersCount / props.pageUsersSize);
  const pageCounts = [];
  for (let i = 1; i <= totalUsersPages; i++) {
    pageCounts.push(i);
    if (i === 50) break;
  }
  return (
    <div className={styles.usersWrapper}>
      <div className={styles.title}>
        <h2>Users</h2>
      </div>
      <div className={styles.pagesCount}>
        {pageCounts.map((page) => (
          <span
            onClick={() => props.setCurrentPage(page)}
            className={props.currentPage === page ? styles.selectedPage : ""}
          >
            {page}
          </span>
        ))}
      </div>
      {props.users.map((el) => (
        <div className={styles.wrapper}>
          <NavLink to={`/profile/` + el.id} style={{color:'white'}} onClick={()=>{props.setProfileId(el.id)}}>
            <div className={styles.rowWrapper}>
              <img
                src={el.photos.small != null ? el.photos.small : userPic}
                className={styles.pic}
                alt="User pic"
              />
              <div className={styles.nameWrapper}>
                <div>
                  <div className={styles.firstName}>{el.name}</div>
                </div>
                <div className={styles.status}>{el.status}</div>
              </div>
            </div>
          </NavLink>
          <div>
            <div className={styles.location}>
              <div style={{ textAlign: "center" }} className={styles.country}>
                Ukraine
              </div>
              <div style={{ textAlign: "center" }} className={styles.city}>
                Lviv
              </div>
            </div>
          </div>
          <div className={styles.Buttons}>
            {el.followed ? (
              <button
                onClick={() => props.unfollow(el.id)}
                className={styles.followBtn}
              >
                Follow
              </button>
            ) : (
              <button
                onClick={() => props.follow(el.id)}
                className={styles.followBtn}
              >
                Unfollow
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
