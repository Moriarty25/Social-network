import { Profile } from "./Profile";
import { connect } from "react-redux";
import axios from "axios";
import React from "react";
import {getProfile, setUserProfile} from "../../Redux/profile-reducer"
import { useParams } from 'react-router-dom';
import { profileAPI } from "../../api/api";

const Stepa = 7446 


export function withRouter(Children){
  return(props)=>{

     const match  = {params: useParams()};
     return <Children {...props}  match = {match}/>
 }
}  


export class ProfileContainerAPI extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId || Stepa
    this.props.getProfile(userId)
  }
  render() {
    return (
    <Profile {...this.props} profile={this.props.profile}/>
    )
  }

}


const mapStateToProps = (state) => ({

    profilePage: state.profilePage,
    profile: state.profilePage.profile
    
  })

  const WithUrlDataContainerComponent = withRouter(ProfileContainerAPI)

export const ProfileContainer = connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent)