import { createRef } from "react";
import styles from "./NewPost.module.css";

const NewPost = (props) => {
  const newTitleEl = createRef();
  const newTextEl = createRef();
  const onAddPost = () => { 
    props.addPost()
  };
  const onDelPost = () => {
    props.delPost()
  };
  const onChangePostText = () => {
    let titleValue = newTitleEl.current.value;
    let textValue = newTextEl.current.value;
    props.changePostText(titleValue,textValue)
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.textareas}>
        <textarea
          onChange={onChangePostText}
          ref={newTitleEl}
          className={styles.title}
          placeholder="Write title..."
          value={props.newPostTitle}
        ></textarea>
        <textarea
          onChange={onChangePostText}
          ref={newTextEl}
          className={styles.text}
          placeholder="Write text..."
          value={props.newPostText}
        ></textarea>
      </div>
      <div>
        <button onClick={onAddPost}>Add post</button>
        <button onClick={onDelPost}>Remove post</button>
      </div>
    </div>
  );
};
export default NewPost;
