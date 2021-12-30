import React from 'react';
import moment from 'moment';
import { AuthenticationService } from '../services/AuthenticationService';
  
export default class ToDoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const username = AuthenticationService.getUsername();

        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th> Description </th>
                            <th> Target Date </th>
                            <th> Is Completed </th>
                            <th> Update </th>
                            <th> Delete </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.props.todos.map((todo) => 
                                <tr key={todo.id}>
                                    <td> {todo.description} </td>
                                    <td> {moment(todo.targetDate).format("YYYY-MM-DD")} </td>
                                    <td> {todo.done.toString()} </td>
                                    <td> <button className="btn btn-success" onClick={() => this.props.onGoUpdate(todo.id)}> Update </button>  </td>
                                    <td> <button className="btn btn-warning" onClick={() => this.props.onDelete(username, todo.id)}> Delete </button>  </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );        
    }

};