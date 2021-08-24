import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class TurtleIndex extends Component {
    render() {
      // console.log(this.props.turtles)
        return (
            <div>
                <h3>Index Page!</h3>
                {this.props.turtles && this.props.turtles.map(turtle => {
                  return(
                    <p key={turtle.id}>
                      <NavLink to={`/turtleshow/${turtle.id}`}>{turtle.name}</NavLink>
                    </p>
                  )
                })}
            </div>
        );
    }
}

export default TurtleIndex;
