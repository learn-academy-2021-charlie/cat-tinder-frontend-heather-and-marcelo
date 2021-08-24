import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TurtleIndex from '../TurtleIndex.js'

Enzyme.configure({ adapter: new Adapter() })

describe("When turtle index renders", () =>{
  it("displays an index heading", () =>{
    const turtleIndex = shallow(<TurtleIndex />)
    const indexHeading = turtleIndex.find("h3")
    expect(indexHeading.text()).toEqual("Index Page!")
  })
})
