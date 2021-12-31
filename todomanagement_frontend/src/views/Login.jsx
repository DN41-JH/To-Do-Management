import React from 'react';
import { AuthenticationService } from '../services/AuthenticationService';
  
export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            isLoginFailed: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleLogin() {
        AuthenticationService.executeAuthorization(this.state.username, this.state.password)
            .then((response) => {
                window.sessionStorage.setItem("Username", this.state.username);
                const basicAuthHeader = "Basic " + window.btoa(this.state.username + ':' + this.state.password);
                AuthenticationService.setupAxiosInterceptors(basicAuthHeader);
                window.location.href=`/welcome/${this.state.username}`;
            })
            .catch((error) => this.setState({
                isloginFailed: true,
            }));
    }

    render() {
        return (
            <div>
                <h1> Login </h1>
                <div className="container">
                    {this.state.isLoginFailed && <div className="warning"> Invalid Credential </div>}
                    User Name: <input type='text' name='username' onChange={this.handleChange}/>
                    Password: <input type='password' name='password' onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.handleLogin}> Login </button>
                </div>
            </div>
        );        
    }

};