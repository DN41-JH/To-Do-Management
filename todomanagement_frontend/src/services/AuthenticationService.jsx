import axios from "../axios";

export const AuthenticationService = {
    login: function(loginInfo) {
        const loginRequest = {
            Username: loginInfo.Username,
            Password: loginInfo.Password,
        }

        // (Must follow the EndPoint URL as specified in the backend url pattern)
        // return axios.post('/checkStatus/', checkStatusRequest);
        return true;
    },

    isLoggedIn: function() {
        return window.sessionStorage.getItem("Username") ? true : false;
    },

    getUsername: function() {
        return window.sessionStorage.getItem("Username");
    }
}