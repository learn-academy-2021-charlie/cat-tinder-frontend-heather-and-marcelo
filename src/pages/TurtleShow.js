import React, { Component } from 'react';

class TurtleShow extends Component {
    render() {
        return (
            <div>
                <h3> Show Page! </h3>
                <p>{this.props.turtle.name}</p>
                <p>{this.props.turtle.age}</p>
                <p>{this.props.turtle.enjoys}</p>

            </div>
        );
    }
}

export default TurtleShow;
