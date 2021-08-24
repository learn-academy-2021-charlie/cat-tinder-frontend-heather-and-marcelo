// import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import Home from './pages/Home';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import TurtleIndex from './pages/TurtleIndex'; 

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component. 
Enzyme.configure({ adapter: new Adapter() })

describe('when the app renders', ()=>{
  it('displays a header and a footer', ()=>{
    // arrange
    const renderedApp = shallow(<App/>)
    // act
    const renderedHeader = renderedApp.find("Header") 
    const renderedFooter = renderedApp.find("Footer")
    // assert
    expect(renderedHeader.length).toEqual(1)
    expect(renderedFooter.length).toEqual(1)
  })
  it('provides a route"/" to the home component', ()=>{
    const renderedApp = shallow(<App />)
    const renderedHomeRoute = renderedApp.find('[path="/"]')
    //  console.log("rendered home route debug", renderedHomeRoute.debug())
    //  console.log("rendered home route props", renderedHomeRoute.props())
    expect(renderedHomeRoute.props().component).toEqual(Home)
  })
})


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

