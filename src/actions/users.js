


export const GET_USERS = 'GET-USERS';

export default function getUsers(users){
    return {
        type: GET_USERS,
        users
    }
};