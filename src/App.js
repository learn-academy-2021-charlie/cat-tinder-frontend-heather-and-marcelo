import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import TurtleEdit from './pages/TurtleEdit';
import TurtleIndex from './pages/TurtleIndex';
import TurtleNew from './pages/TurtleNew';
import TurtleShow from './pages/TurtleShow';
import NotFound from './pages/NotFound';
import turtles from './mockTurtle.js'
import './App.css'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      turtles: turtles
    }
  }
  render(){
    // console.log(this.state.turtles)
    return (
      <Router>
        <Header />

        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/turtleedit" component={TurtleEdit} />
          <Route path="/turtleindex" render={(props) => <TurtleIndex turtles={this.state.turtles}/>} />
          <Route path="/turtlenew" component={TurtleNew} />
          <Route path="/turtleshow/:id" render={(props) =>{
            let id = props.match.params.id
            let turtle = this.state.turtles.find(turtle =>turtle.id === +id)
            return <TurtleShow turtle={turtle} />
          }}/>
          <Route component={NotFound} />

        </Switch>

        <Footer />

      </Router>
    );
  }
}

export default App;
