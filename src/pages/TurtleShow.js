import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Button} from 'reactstrap';

class TurtleShow extends Component {
    render() {
        return (
            <div>
                <h3>Show Page!</h3>
                <p>{this.props.turtle && this.props.turtle.name}</p>
                <p>{this.props.turtle && this.props.turtle.age}</p>
                <p>{this.props.turtle && this.props.turtle.enjoys}</p>

                <NavLink to={`/turtleedit/${this.props.turtle.id}`}>
                  <Button>Edit Turtle Profile</Button>
                </NavLink>

            </div>
        );
    }
}

export default TurtleShow;
