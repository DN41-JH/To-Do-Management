import React from 'react';
import { Link } from 'react-router-dom';

export default class NewTodo extends React.Component {
    render() {
        return (
            <div>
                Todo Component {this.props.match.params.id}
            </div>
        );        
    }

};