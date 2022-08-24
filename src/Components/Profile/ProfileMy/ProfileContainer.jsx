import * as axios from 'axios';
import React from 'react'
import { connect } from 'react-redux'
import MyPostContainer from "./Posts/MyPostContainer";
// import styles from "./Profile.module.css";
import ProfileAbout from "./ProfileAbout";
import {showProfile, setProfileId} from '../../../Redux/Reducers/profileReducer'

class ProfileContainer extends React.Component {
  componentDidMount(){
    if(this.props.currentId != 1){
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.currentId}`)
    .then(response => this.props.showProfile(response.data,response.data.userId))
    }
  }
  
  render(){
    return (
      <div>
        <ProfileAbout
        fullName={this.props.currentUser.fullName}
        about={this.props.currentUser.aboutMe}
        lookingForAJob={this.props.currentUser.lookingForAJob}
        lookingForAJobDescription={this.props.currentUser.lookingForAJobDescription}
        photos={this.props.currentUser.photos}
        contacts={this.props.currentUser.contacts}
        setProfileId={this.props.setProfileId}
        />
        <MyPostContainer />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  currentUser:state.profilePage.currentUser,
  currentId:state.profilePage.currentId
})

export default connect(mapStateToProps, {showProfile:showProfile,setProfileId})(ProfileContainer)

