import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setUsers,
  setTotalUsersCount,
  toggleIsFetching,
  unfollow,
} from "../../Redux/friends-reducer";
import { Friends } from "./Friends";
import axios from "axios";
import React from "react";
import { Preloader } from "../ui/Preloader/Preloader";
import { userAPI } from "../../api/api";


export class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    userAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => { 
      
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChange = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    userAPI.getUsers(pageNumber, this.props.pageSize)
      .then((data) => {
        this.props.setUsers(data.items);
      })
      .finally(() => {
        this.props.toggleIsFetching(false);
      });
  };

  // getUsers = () => {
  //   if (this.props.users.length === 0) {
  //     axios
  //       .get("https://social-network.samuraijs.com/api/1.0/users")
  //       .then((response) => {
  //         this.props.setUsers(response.data.items);
  //       });
  //   }
  // };

  // userElement() {  this.props.users.map((u) => (
  //   <User
  //     key={u.id}
  //     id={u.id}
  //     followed={u.followed}
  //     name={u.name}
  //     status={u.status}
  //     location={u.location}
  //     photos={u.photos}
  //     follow={this.props.follow}
  //     unfollow={this.props.unfollow}
  //   />
  // ));
  // }

  render() {
    return (
      <>
        <Friends
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          isFetching={this.props.isFetching}
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
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersAPI);
