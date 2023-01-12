import { connect } from "react-redux";
import {
  follow,
  unfollow,
  toggleFollowingProgress,
  getUsers,
  onPageChange,
  followUser,
  unfollowUser,
} from "../../Redux/friends-reducer";
import { Friends } from "./Friends";
import React from "react";



export class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChange = (pageNumber) => {
    this.props.onPageChange(pageNumber, this.props.pageSize)
  };

  render() {
    return (
      <>
        <Friends
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          users={this.props.users}
          followingInProgress={this.props.followingInProgress}
          followUser={this.props.followUser}
          unfollowUser={this.props.unfollowUser}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.friendsPage.users,
    pageSize: state.friendsPage.pageSize,
    totalUserCount: state.friendsPage.totalUserCount,
    currentPage: state.friendsPage.currentPage,
    isFetching: state.friendsPage.isFetching,
    followingInProgress: state.friendsPage.followingInProgress,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setUsersTotalCountAC(totalCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     },
//   };
// };

export let FriendsContainer = connect(mapStateToProps, {
  toggleFollowingProgress,
  getUsers,
  onPageChange,
  followUser,
  unfollowUser,
})(UsersAPI);
