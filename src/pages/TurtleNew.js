import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class TurtleNew extends Component {

    constructor(props){
        super(props)
        this.state = {
          form:{
            name: "",
            age: "",
            enjoys: ""
          }
        }
    }

    handleChange = (e) => {
        // destructuring form out of state
        let { form } = this.state
        form[e.target.name] = e.target.value
        // setting state to the updated form
        this.setState({ form: form })
    }

    handleSubmit = () => {
        this.props.createTurtle(this.state.form)
    }


    render() {
        return (
            <div>
                <h3> New Page! </h3>
                <Form>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input 
                            type="text" 
                            name="name" 
                            placeholder="with a placeholder"
                            onChange={ this.handleChange } 
                            value={ this.state.form.name }/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="age">Age</Label>
                        <Input 
                            type="text" 
                            name="age" 
                            placeholder="with a placeholder"
                            onChange={ this.handleChange } 
                            value={ this.state.form.age }/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="enjoys">Enjoys</Label>
                        <Input 
                            type="text" 
                            name="enjoys" 
                            placeholder="with a placeholder"
                            onChange={ this.handleChange } 
                            value={ this.state.form.enjoys }/>
                    </FormGroup>
                    <Button 
                        name="submit" 
                        onClick={this.handleSubmit}>
                        Add new turtle
                    </Button>
                </Form>
            </div>
            
        );
    }
}

export default TurtleNew;
