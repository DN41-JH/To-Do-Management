import React from 'react';
import './Counter.css';
  
export default class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };

        // Bind all the callback functions
    }

    render() {
        return (
            <div className="counter">
                <button onClick> +1 </button>
                <span className="count"> {this.state.count} </span>
            </div>
        );        
    }

};

Counter.defaultProps = {
    increment: 1,
};
