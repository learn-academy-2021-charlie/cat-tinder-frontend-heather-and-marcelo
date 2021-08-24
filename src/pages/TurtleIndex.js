import React, { Component } from 'react';

class TurtleIndex extends Component {
    render() {
      // console.log(this.props.turtles)
        return (
            <div>
                <h3>Index Page!</h3>
                {this.props.turtles && this.props.turtles.map(turtle => {
                  return <p key={turtle.id}>{turtle.name}</p>
                })}
            </div>
        );
    }
}

export default TurtleIndex;
