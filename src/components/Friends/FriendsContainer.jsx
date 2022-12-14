import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC } from "../../Redux/friends-reducer";
import { Friends } from "./Friends";
import axios from "axios";
import React from "react";

export class UsersAPI extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
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
      <Friends
        totalUserCount={this.props.totalUserCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}


let mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.friendsPage.users,
    pageSize: state.friendsPage.pageSize,
    totalUserCount: state.friendsPage.totalUserCount,
    currentPage: state.friendsPage.currentPage
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    }, 
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount))
    },
  };
};

export let FriendsContainer = connect( mapStateToProps,mapDispatchToProps)(UsersAPI);
