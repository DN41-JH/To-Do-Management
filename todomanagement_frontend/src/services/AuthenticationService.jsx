import axios from "../axios";

export const AuthenticationService = {
    setupAxiosInterceptors(username, password) {
        const basicAuthHeader = "Basic " + window.btoa(username + ':' + password);

        axios.interceptors.request.use((config) => {
                if (this.isLoggedIn()) config.headers.authorization = basicAuthHeader;
                console.log(basicAuthHeader);
                return config;
            }
        );
    },

    executeAuthorization: function(username, password) {
        const basicAuthHeader = "Basic " + window.btoa(username + ':' + password);
        const request = {
            headers: {
                authorization: basicAuthHeader,
            }
        };

        return axios.get("/basic_auth", request);
    },

    isLoggedIn: function() {
        return window.sessionStorage.getItem("Username") ? true : false;
    },

    getUsername: function() {
        return window.sessionStorage.getItem("Username");
    },

    logout: function() {
        window.sessionStorage.removeItem("Username");
    },
}