import React from 'react';
  
export default class ToDoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1> List of Todos </h1>

                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th> Id </th>
                                <th> Description </th>
                                <th> Target Date </th>
                                <th> Is Completed </th>
                                
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
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );        
    }

};