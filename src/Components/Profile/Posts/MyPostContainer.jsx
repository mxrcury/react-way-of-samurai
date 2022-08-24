import { connect } from "react-redux";
import {
  addPost,
  changePostText,
  delPost,
} from "../../../Redux/Reducers/profileReducer";
import MyPost from "./MyPost";

const mapStateToProps = (state) => ({
  newPostText: state.profilePage.newPostText,
  newPostTitle: state.profilePage.newPostTitle,
  postsData:state.profilePage.postsData,
  
});

const MyPostContainer = connect(mapStateToProps, {addPost,delPost,changePostText})(MyPost);
export default MyPostContainer;
