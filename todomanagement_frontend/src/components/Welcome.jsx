import React from 'react';
import { Link } from 'react-router-dom';

export default class Welcome extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Welcome {this.props.match.params.name}!

                <br/>

                Manage Your Todos <Link to='/todos/'> Here </Link>
            </div>
        );        
    }

};