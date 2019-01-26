import { combineReducers } from "redux";
import tweets from "./tweets";
import users from "./users";
import authedUser from "./authUser"
import {loadingBarReducer} from "react-redux-loading";

export default combineReducers({
    tweets ,
    users,
    authedUser,
    loadingBar: loadingBarReducer
})