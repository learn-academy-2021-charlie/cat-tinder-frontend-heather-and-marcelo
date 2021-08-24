import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../Home'

Enzyme.configure({ adapter: new Adapter() })

describe('when the page renders, Home Page!', ()=>{
    it('displays a msg Home Page!', ()=>{
      // arrange
      const home = shallow(<Home />)
      // act
      const renderedHomeMsg = home.find("h3")
      // assert
      console.log("home msg debug", renderedHomeMsg.debug())
      console.log("home props,", renderedHomeMsg.props())
      expect(renderedHomeMsg.text()).toEqual('Home Page!')
    })
})