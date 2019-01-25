import { combineReducers } from "redux";
import tweets from "./tweets";
import users from "./users";
import authUser from "./authUser";

export default combineReducers({
    tweets ,
    users,
    authUser
})