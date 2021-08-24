import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFound from '../NotFound'
import { children } from 'cheerio/lib/api/traversing';

Enzyme.configure({ adapter: new Adapter() })

describe('when the page renders, notfound msg!', ()=>{
    it('displays a not found msg', ()=>{
      // arrange
      const notFound = shallow(<NotFound />)
      // act
      const renderedNotFoundMsg = notFound.find("h3")
      // assert
      console.log("not found msg debug", renderedNotFoundMsg.debug())
      console.log("not found props,", renderedNotFoundMsg.props())
      expect(renderedNotFoundMsg.props().className).toEqual('notFoundTitle')
    })
})