import React from 'react';
  
export default class ToDoList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [
                {id:1, description:"Learn", done:false, targetDate:'2021-12-27'},
                {id:2, description:"Dance", done:false, targetDate:'2021-12-25'},
                {id:3, description:"Eat", done:false, targetDate:'2021-12-26'},
            ],
        }
    }

    render() {
        return (
            <div>
                <h1>List of Todos</h1>
                <table>
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
                            this.state.todos.map((todo) => 
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
        );        
    }

};