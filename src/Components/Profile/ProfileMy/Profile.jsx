import MyPostContainer from "./Posts/MyPostContainer";
// import styles from "./Profile.module.css";
import ProfileAbout from "./ProfileAbout";

const Profile = (props) => {
  const profileData=[
    {id:1,name:'Dmytro', surname:'Goncharus',age:17,familyStatus:'Not married',hobbies:'Programming, Cooking, Sports',sex:'Male'},
    {id:2,name:'Steven', surname:'Jobs',age:38,familyStatus:'Married',hobbies:'Designing',sex:'Female'},
  ]
  return (
    <div>
      <ProfileAbout name={profileData[0].name} surname={profileData[0].surname} age={profileData[0].age} familyStatus={profileData[0].familyStatus} hobbies={profileData[0].hobbies} sex={profileData[0].sex}/>
      <MyPostContainer />
    </div>
  );
};
export default Profile;
