import React from 'react';
  
export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            isLoginFailed: false,
            showSuccessMessage: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    renderLoginMessage() {
        if (this.state.showSuccessMessage) {
            return <div> Successful Login </div>
        } else if (this.state.isLoginFailed) {
            return <div> Invalid Credential </div>
        } else {
            return null
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleLogin() {
        if (true) {
            window.location.href=`/welcome/${this.state.username}`;
        } else {
            this.setState({
                isLoginFailed: true,
                showSuccessMessage: false,
            });
        }
    }

    render() {
        return (
            <div>
                {this.renderLoginMessage()}
                User Name: <input type='text' name='username' onChange={this.handleChange}/>
                Password: <input type='password' name='password' onChange={this.handleChange}/>
                <button onClick={this.handleLogin}> Login </button>
            </div>
        );        
    }

};