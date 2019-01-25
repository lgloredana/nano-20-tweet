
export const GET_AUTH_USER = 'GET_USER';
export const AUTH_ID = 'tylermcginnis';

export function getAuthUser(authUser) {
    return {
        type: GET_AUTH_USER,
        authUser
    }
}
