import axios from 'axios';

export default axios.create({
    // baseURL: "https://37f5601c-9df2-44f1-932c-733b4b5b9a4c.mock.pstmn.io",

    // Local data URL ---> The specified port (i.e. 8080) must match the backend server port!
    baseURL: "http://127.0.0.1:8080",
});