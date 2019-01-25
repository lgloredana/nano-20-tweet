import { combineReducers } from "redux";
import tweets from "./tweets";
import users from "./users";
import authUser from "./authUser";
import {loadingBarReducer} from "react-redux-loading";

export default combineReducers({
    tweets ,
    users,
    authUser,
    loadingBar: loadingBarReducer
})