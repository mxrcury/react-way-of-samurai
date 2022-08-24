import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "./../../Redux/Reducers/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.router.params.id}`)
      .then((response) => this.props.setUserProfile(response.data));
  }
  componentDidUpdate(prevProps){
    if(!prevProps.router.params.id){
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => this.props.setUserProfile(response.data));
    }
  }
  render() {
    return (
      <div>
        <Profile profile={this.props.profile} />
      </div>
    );
  }
}
// withRouter container to use HOC pattern but in react-router-dom v6 by hooks
const WithRouterContainer = (props) => {
    const params = useParams();
    const location = useLocation()
    const navigate = useNavigate()

    return <ProfileContainer {...props} router={{ location, navigate, params }} />;
};
// </>

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(
  WithRouterContainer
);
