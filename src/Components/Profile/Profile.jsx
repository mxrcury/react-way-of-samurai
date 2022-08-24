import MyPostContainer from "./Posts/MyPostContainer";
// import styles from "./Profile.module.css";
import ProfileAbout from "./ProfileAbout";

const Profile = (props) => {
  // const profileData=[
  //   {id:1,name:'Dmytro', surname:'Goncharus',age:17,familyStatus:'Not married',hobbies:'Programming, Cooking, Sports',sex:'Male'},
  //   {id:2,name:'Steven', surname:'Jobs',age:38,familyStatus:'Married',hobbies:'Designing',sex:'Female'},
  // ]
  return (
    <div>
      <ProfileAbout profile={props.profile}/>
      <MyPostContainer />
    </div>
  );
};
export default Profile;
