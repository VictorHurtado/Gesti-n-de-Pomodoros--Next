import { Users } from "../stores/user/users.d"
function setToken(user: Users) {
    localStorage.setItem('user', JSON.stringify(user));

}
function getToken() {
    const userJson = localStorage.getItem('user');
    if (userJson) {
        return JSON.parse(userJson);
    }
    return {} as Users;
}

function deleteToken() {
    localStorage.clear();
    return {} as Users;
}
export { setToken, getToken,deleteToken}