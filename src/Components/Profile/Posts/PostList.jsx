import PostItem from "./PostItem";
import styles from './PostList.module.css'

const PostList = (props) => {
  return (
    <div className={styles.postList}>
      {props.posts.map(postEl=>(<PostItem postTitle={postEl.postTitle} textContent={postEl.textContent} likesQty={postEl.likesQty} />))}
    </div>
  );
};
export default PostList;
