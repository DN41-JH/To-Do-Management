import axios from "../axios";

export const UserService = {
    login: function(loginInfo) {
        const loginRequest = {
            Username: loginInfo.Username,
            Password: loginInfo.Password,
        }

        // (Must follow the EndPoint URL as specified in the backend url pattern)
        // return axios.post('/checkStatus/', checkStatusRequest);
        return true;
    },
}