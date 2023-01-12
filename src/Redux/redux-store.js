import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { authReducer } from "./auth-reducer";
import { friendsReducer } from "./friends-reducer";
import { messengerReducer } from "./messenger-reducer";
import { profileReducer } from "./profile-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messengerPage: messengerReducer,
    friendsPage: friendsReducer,
    auth: authReducer
});


let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

