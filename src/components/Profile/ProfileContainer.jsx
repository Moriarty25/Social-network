import { Profile } from "./Profile";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,

  }
}

export let ProfileContainer = connect(mapStateToProps)(Profile)