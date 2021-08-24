import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TurtleShow from '../TurtleShow.js'

Enzyme.configure({ adapter: new Adapter() })

describe("When turtle show renders", () =>{
  it("displays a show heading", () =>{
    const turtleShow = shallow(<TurtleShow />)
    const showHeading = turtleShow.find("h3")
    expect(showHeading.text()).toEqual("Show Page!")
  })
})
