import { getInitialData } from '../utils/api'
import getUsers from "./users";
import getTweets from "./tweets";
import {AUTH_ID, getAuthUser} from "./authUser";
import {hideLoading, showLoading} from "react-redux-loading";


export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({users, tweets}) =>
            {
                dispatch(getTweets(tweets));
                dispatch(getUsers(users));
                dispatch(getAuthUser({id: AUTH_ID}));
                dispatch(hideLoading())
            }
        )

    }
}


