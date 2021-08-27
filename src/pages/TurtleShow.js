import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Button} from 'reactstrap';
import { Redirect } from 'react-router-dom'

class TurtleShow extends Component {

    constructor(props){
        super(props)
        this.state = {
          success: false
        }
      }

    handleSubmit = () => {
        this.props.deleteTurtle(this.props.turtle.id)
        this.setState({ success: true })
    }

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
                <NavLink to="/turtleindex">
                    <Button onClick={ this.handleSubmit }>
                        Delete Cat Profile
                    </Button>
                </NavLink>
                { this.state.success && <Redirect to="/turtleindex" />}
            </div>
        );
    }
}

export default TurtleShow;
