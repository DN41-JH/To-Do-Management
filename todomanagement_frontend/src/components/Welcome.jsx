import React from 'react';

export default class Welcome extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Welcome {this.props.match.params.name}
            </div>
        );        
    }

};