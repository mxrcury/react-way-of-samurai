import NewPost from "./NewPost";
import PostList from "./PostList";

const MyPost = (props) => {
        return (
          <div>
            <NewPost
              addPost={props.addPost}
              delPost={props.delPost}
              changePostText={props.changePostText}
              newPostText={props.newPostText}
              newPostTitle={props.newPostTitle}
            />
            <PostList posts={props.postsData} />
          </div>
        );
};

export default MyPost;