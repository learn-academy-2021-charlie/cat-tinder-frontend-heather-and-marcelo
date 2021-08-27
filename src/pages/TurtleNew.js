import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Redirect } from 'react-router-dom'

class TurtleNew extends Component {

    constructor(props){
        super(props)
        this.state = {
          form:{
            name: "",
            age: "",
            enjoys: ""
          },
          success: false
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
        this.setState({ success: true })
    }


    render() {
        return (
            <div>
                <h3> New Page! </h3>
                <Form>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input
                            className='inputs'
                            type="text"
                            name="name"
                            placeholder="with a placeholder"
                            onChange={ this.handleChange }
                            value={ this.state.form.name }/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="age">Age</Label>
                        <Input
                            className='inputs'
                            type="text"
                            name="age"
                            placeholder="with a placeholder"
                            onChange={ this.handleChange }
                            value={ this.state.form.age }/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="enjoys">Enjoys</Label>
                        <Input
                            className='inputs'
                            type="text"
                            name="enjoys"
                            placeholder="with a placeholder"
                            onChange={ this.handleChange }
                            value={ this.state.form.enjoys }/>
                    </FormGroup>
                    <div className="button">
                    <Button
                        name="submit"
                        onClick={this.handleSubmit}>
                        Add new turtle
                    </Button>
                    </div>
                </Form>
                { this.state.success && <Redirect to="/turtleindex" />}
            </div>

        );
    }
}

export default TurtleNew;
