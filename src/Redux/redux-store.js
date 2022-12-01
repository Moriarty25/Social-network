import { combineReducers, legacy_createStore } from "redux";
import { messengerReducer } from "./messenger-reducer";
import { profileReducer } from "./profile-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messengerPage: messengerReducer
});


let store = legacy_createStore(reducers);

export default store;

