// import App from './App';
import React from 'react';
// import Home from './pages/Home';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFound from '../NotFound'


//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component. 
Enzyme.configure({ adapter: new Adapter() })

describe('when the page renders, notfound msg!', ()=>{
    it('displays a notfound msg', ()=>{
      // arrange
      const renderedNotFound = shallow(<NotFound />)
      // act
    //   const renderedHeader = renderedNotFound.find("Header") 
    //   const renderedFooter = renderedNotFound.find("Footer")
      const renderedNotFoundMsg = renderedNotFound.find("NotFound")
      // assert
    //   expect(renderedHeader.length).toEqual(1)
    //   expect(renderedFooter.length).toEqual(1)
      expect(renderedNotFoundMsg.length).toEqual(1)
    })
})