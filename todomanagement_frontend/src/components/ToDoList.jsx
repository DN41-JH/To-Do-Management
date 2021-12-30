import React from 'react';
  
export default class ToDoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const username = window.sessionStorage.getItem("Username");

        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th> Id </th>
                            <th> Description </th>
                            <th> Target Date </th>
                            <th> Is Completed </th>
                            <th> Delete </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.props.todos.map((todo) => 
                                <tr key={todo.id}>
                                    <td> {todo.id} </td>
                                    <td> {todo.description} </td>
                                    <td> {todo.targetDate} </td>
                                    <td> {todo.done.toString()} </td>
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