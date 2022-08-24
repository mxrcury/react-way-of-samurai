import { connect } from "react-redux";
import {
  addPostCreator,
  changePostCreator,
  delPostCreator,
} from "../../../../Redux/Reducers/profileReducer";
import MyPost from "./MyPost";

const mapStateToProps = (state) => ({
  newPostText: state.profilePage.newPostText,
  newPostTitle: state.profilePage.newPostTitle,
  postsData:state.profilePage.postsData,
  userPhoto:state.profilePage.currentUser.photos.small
});
const mapDispatchToProps = (dispatch) => {
  return{
  addPost: () => dispatch(addPostCreator()),
  delPost: () => dispatch(delPostCreator()),
  changePostText: (title,text) => dispatch(changePostCreator(title, text))
}}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);
export default MyPostContainer;
