import React from 'react';
import { AuthenticationService } from '../services/AuthenticationService';
import { UserService } from '../services/UserService';
import ToDoList from '../components/ToDoList';
  
export default class Todos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            message: null,
            isError: false,
            errorMessage: null,
        };

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.renderTodoList();
    }

    handleDelete(username, id) {
        UserService.deleteToDo(username, id)
            .then((response) => {
                this.setState({
                    message: `Delete of task ${id} is successfully.`,
                    isError: false,
                    errorMessage: null,
                });
                this.renderTodoList();
            })
            .catch((error) => this.setState({
                isError: true,
                errorMessage: error.message,
            }));
    }

    renderTodoList() {
        if (AuthenticationService.isLoggedIn()) {
            const username = window.sessionStorage.getItem("Username");

            UserService.getToDos(username)
                .then((response) => this.setState({
                    todos: response.data,
                    isError: false,
                    errorMessage: null,
                }))
                .catch((error) => this.setState({
                    isError: true,
                    errorMessage: error.message,
                }));
        }  
    }

    renderTodos() {
        if (this.state.isError) {
            return <h1> Sorry, {this.state.errorMessage} </h1>
        } else {
            return (
                <div>
                    <h1> List of Todos </h1>
                    {this.state.message ? <div className="alert alert-success"> {this.state.message} </div> : null}
                    <ToDoList todos={this.state.todos} onDelete={this.handleDelete}/>
                </div>
            )
        }
    }

    render() {
        return (
            this.renderTodos()
        )
    }
};