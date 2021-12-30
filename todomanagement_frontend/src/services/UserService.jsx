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

    updateTodo: function(username, id, todo) {
        // (Must follow the EndPoint URL as specified in the backend url pattern)
        // The updated "todo" goes to the body of the request
        return axios.put(`/users/${username}/todos/${id}`, todo);
    },

    deleteToDo: function(username, id) {
        // (Must follow the EndPoint URL as specified in the backend url pattern)
        return axios.delete(`/users/${username}/todos/${id}`);
    }
}