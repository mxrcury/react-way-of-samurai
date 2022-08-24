import Preloader from "../common/Preloader";
import styles from "./ProfileAbout.module.css";
import userPic from '../../assets/images/userpic.png'

const ProfileAbout = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={styles.profileAbout}>
      <div className={styles.banner}>
        {/* <img src="https://wallpapercave.com/wp/wp2751038.jpg" alt="Banner"/> */}
        {/* { props.profile.large ? (<img src={props.profile.photos.large} alt='Profile' />) : (<h1 style={{color:'white',textAlign:'center', padding:'60px 0',border:'2px solid white'}} >Here can be your banner</h1>)} */}
        <h1 style={{color:'white',textAlign:'center', padding:'60px 0',border:'2px solid white'}} >Here is {props.profile.fullName}'s banner</h1>
      </div>
      <div className={styles.info}>
        <div className={styles.profilePic}>
        {/* <img src="https://i.pinimg.com/564x/8c/0a/57/8c0a577cf9d68fc708ec8aafbc557d16.jpg" alt="Profile"/> */}
            {/* { !props.profile.photos.small ? <img src={userPic} alt="Profile" /> : <img src={props.profile.photos.small} alt='Profile' />} */}
            <h1 style={{color:'white',textAlign:'center'}}>{props.profile.fullName}'s pic</h1>
        </div>
        <div>
          <p className={styles.item}>Name: {props.profile.fullName}</p>

          <p className={styles.item}>About: {props.profile.aboutMe}</p>
          <p className={styles.item}>
            Looking for a job: {props.profile.lookingForAJob ? `Yes` : `No`}
          </p>
          <p
            className={styles.item}
            style={
              !props.profile.lookingForAJob
                ? { display: "none" }
                : { display: "block" }
            }
          >
            Job description:{" "}
            {!props.profile.lookingForAJobDescription
              ? `No`
              : props.profile.lookingForAJobDescription}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProfileAbout;
