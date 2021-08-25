import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TurtleNew from '../TurtleNew'

Enzyme.configure({ adapter: new Adapter() })

describe("When turtle new renders", () =>{
  it("check for input fields", () =>{
    const turtleNew = shallow(<TurtleNew />)

    const newInput = turtleNew.find(".inputs")
    console.log("new page msg debug", newInput.debug())
    // console.log("new props,", newInput.props(3))
    // here we will be checking for 3 input fields.
    // we added the className = input to input fields
    expect(newInput.length).toEqual(3)
  })
})