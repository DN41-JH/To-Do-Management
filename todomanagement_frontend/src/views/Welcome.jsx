import React from 'react';
import { Link } from 'react-router-dom';

export default class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1> Welcome! </h1>

                <div className="container">
                    Welcome {this.props.match.params.name},
                    <br/>
                    Please Manage Your Todos <Link to='/todos/'> Here </Link>

                </div>
            </div>
        );        
    }

};