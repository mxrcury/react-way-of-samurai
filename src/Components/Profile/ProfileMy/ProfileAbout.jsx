import styles from "./ProfileAbout.module.css";

const ProfileAbout = (props) => {
  return (
    <div className={styles.profileAbout}>
      <div className={styles.banner}>
        <img src={ props.photos.large === null ? `https://i.pinimg.com/564x/a4/4a/82/a44a828346ba07a326f16335d96256db.jpg` : props.photos.large} alt='Profile'/>
      </div>
      <div className={styles.info}>
        <div className={styles.profilePic}>
          <img src={ props.photos.small === null ? `https://i.pinimg.com/564x/a4/4a/82/a44a828346ba07a326f16335d96256db.jpg` : props.photos.small} alt='Profile' />
        </div>
        <div>
          <p className={styles.item}>Name: {props.fullName}</p>
          <p className={styles.item}>About: {props.about}</p>
          <p className={styles.item}>Looking for a job: {props.lookingForAJob ? `Yes` : `No`}</p>
          <p className={`${styles.item}`} style={props.lookingForAJob ? ({display:'block'}) : ({display:'none'})}>Looking for a job: {props.lookingForAJob ? props.lookingForAJobDescription : 'No'}</p>
        </div>
      </div>
    </div>
  );
};
export default ProfileAbout;
