import axios from "../axios";

export const UserService = {
    getToDos: function(username) {
        // (Must follow the EndPoint URL as specified in the backend url pattern)
        return axios.get(`/users/${username}/todos`);
    },

    getToDo: function(username, id) {
        // (Must follow the EndPoint URL as specified in the backend url pattern)
        return axios.get(`/users/${username}/todos/${id}`);
    },

    deleteToDo: function(username, id) {
        // (Must follow the EndPoint URL as specified in the backend url pattern)
        return axios.delete(`/users/${username}/todos/${id}`);
    }
}