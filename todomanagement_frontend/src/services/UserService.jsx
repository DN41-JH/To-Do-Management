import axios from "../axios";

export const UserService = {
    getToDos: function(username) {
        // (Must follow the EndPoint URL as specified in the backend url pattern)
        return axios.get(`/users/${username}/todos`);
    },
}