import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { getAuthUser } from "../../Redux/auth-reducer";
import { Header } from "./Header";


export class HeaderContainerAPI extends React.Component {
  componentDidMount() {
    this.props.getAuthUser()
  }

  render() {
    return <Header {...this.props}  />;
  }
}


const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  userId: state.auth.userId,
  profile: state.auth.profile
});

export const HeaderContainer = connect(mapStateToProps, { getAuthUser })(
  HeaderContainerAPI
);
