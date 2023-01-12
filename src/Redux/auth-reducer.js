import { headerAPI, profileAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_DATA_PROFILE = "SET_USER_DATA_PROFILE";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  profile: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data, isAuth: true };
    case SET_USER_DATA_PROFILE:
      console.log(action);
      return {...state, profile: action.profile };
    default:
      return state;
  }

};


export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: { userId, email, login },
});

export const setAuthUserDataProfile = (profile) => ({
  type: SET_USER_DATA_PROFILE,
  profile: {profile},
});


export const getAuthUser = () => {
  return (dispatch) => {
    headerAPI.getAuthUser()
      .then((data) => {

        if (data.resultCode === 0) {
          const { id, email, login } = data.data;
          dispatch(setAuthUserData(id, email, login));

          return id;
        }
      })
      .then((id) => {
       profileAPI.getProfile(id)
          .then((data) => {
            dispatch(setAuthUserDataProfile(data));
          });
      });
  };
};

