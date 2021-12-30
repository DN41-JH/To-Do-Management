import React from 'react';
import { AuthenticationService } from '../services/AuthenticationService';
import { UserService } from '../services/UserService';
import ToDoList from '../components/ToDoList';
  
export default class Todos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            isError: false,
            errorMessage: "",
        };
    }

    componentDidMount() {
        if (AuthenticationService.isLoggedIn()) {
            UserService.getToDos(window.sessionStorage.getItem("Username"))
                .then((response) => this.setState({
                    todos: response.data,
                    isError: false,
                    errorMessage: "",
                }))
                .catch((error) => this.setState({
                    isError: true,
                    errorMessage: error.message,
                }));
        }  
    }

    render() {
        return (
            this.state.isError ? <h1> Sorry, {this.state.errorMessage} </h1> : <ToDoList todos={this.state.todos}/>
        )
    }
};