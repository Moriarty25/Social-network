import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { headerAPI, profileAPI } from "../../api/api";
import { setAuthUserData, setAuthUserDataProfile } from "../../Redux/auth-reducer";
import { setUserProfile } from "../../Redux/profile-reducer";
import { Header } from "./Header";

export class HeaderContainerAPI extends React.Component {
  componentDidMount() {
    headerAPI.getAuthUser()
      .then((data) => {

        if (data.resultCode === 0) {
          const { id, email, login } = data.data;
          this.props.setAuthUserData(id, email, login);

          return id;
        }
      })
      .then((id) => {
       profileAPI.getProfile(id)
          .then((data) => {
            this.props.setAuthUserDataProfile(data);
          });
      });

    
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

export const HeaderContainer = connect(mapStateToProps, { setAuthUserData, setAuthUserDataProfile })(
  HeaderContainerAPI
);
