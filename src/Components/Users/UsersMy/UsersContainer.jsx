import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalCount,
  setUsers,
  toggleFetching,
  unfollow,
} from "../../../Redux/Reducers/usersReducer";
import {setProfileId} from '../../../Redux/Reducers/profileReducer'
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../../common/Preloader";

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.toggleFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageUsersSize}`
      )
      .then((response) => {
        this.props.toggleFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }
  setCurrentPage = (pageNum) => {
    this.props.setCurrentPage(pageNum);
    this.props.toggleFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageUsersSize}`
      )
      .then((response) => {
        this.props.toggleFetching(false);
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            totalUsersCount={this.props.totalUsersCount}
            pageUsersSize={this.props.pageUsersSize}
            setCurrentPage={this.setCurrentPage}
            setProfileId={this.props.setProfileId}
            //currentId={this.props.currentId}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.usersData,
  totalUsersCount: state.usersPage.totalUsersCount,
  pageUsersSize: state.usersPage.pageUsersSize,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  //currentId: state.profilePage.currentId
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => dispatch(followAC(userId)),
//     unfollow: (userId) => dispatch(unFollowAC(userId)),
//     setUsers: (users) => dispatch(setUsersAC(users)),
//     setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
//     setTotalCount: (totalCount) => dispatch(setTotalCountAC(totalCount)),
//     toggleFetching: (isFetching) => dispatch(toggleFetchingAC(isFetching)),
//   };
// };

export const UsersContainer = connect(
  mapStateToProps,
  {
    follow:follow,
    unfollow:unfollow,
    setUsers:setUsers,
    setCurrentPage:setCurrentPage,
    setTotalCount:setTotalCount,
    toggleFetching:toggleFetching,
    setProfileId
  }
)(UsersAPIContainer);

