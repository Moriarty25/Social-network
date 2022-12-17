import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setAuthUserData, setAuthUserDataProfile } from "../../Redux/auth-reducer";
import { setUserProfile } from "../../Redux/profile-reducer";
import { Header } from "./Header";

export class HeaderContainerAPI extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          const { id, email, login } = response.data.data;
          console.log(response);
          this.props.setAuthUserData(id, email, login);

          return id;
        }
      })
      .then((id) => {
        axios
          .get(`https://social-network.samuraijs.com/api/1.0/profile/` + id, {
            withCredentials: true,
          })
          .then((response) => {
            this.props.setAuthUserDataProfile(response.data);
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
