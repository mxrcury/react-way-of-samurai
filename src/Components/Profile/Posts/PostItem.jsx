import styles from "./PostItem.module.css";

const PostItem = (props) => {

  return (
    <div className={styles.item}>
      <div className={styles.postContent}>
        <img src= {`https://i.pinimg.com/564x/a4/4a/82/a44a828346ba07a326f16335d96256db.jpg`} />
        {/* https://www.shareicon.net/data/256x256/2016/09/15/829459_man_512x512.png */}
        <div className={styles.postText}>
          <h3>{props.postTitle}</h3>
          <p>{props.textContent}</p>
        </div>
      </div>
      <div className={styles.postLikes}>
        <button>
          <span className={styles.likesQty}>{props.likesQty}</span>
          <span>likes</span>
        </button>
      </div>
    </div>
  );
};
export default PostItem;
