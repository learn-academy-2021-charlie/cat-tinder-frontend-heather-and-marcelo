import React, {Component} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

// need to conver these to class based components!!!
// Done 8/26

class Footer extends Component{
  render(){
  return (
    <div className="footer">
      {/* <p>This is our Footer</p>*/}
      <Nav>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="http://www.turtle-foundation.org/en/volunteering-and-jobs-cv-en/volunteering-cv/?gclid=CjwKCAjwmqKJBhAWEiwAMvGt6Pl25KIAHh0pV3ATsBzwvXTFA4otC20yNBOt-H5PnN19J30tWcSx4BoCNgUQAvD_BwE" target='blank'>Save the Turtles!</NavLink>
        </NavItem>
        {/*<NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>
      </Nav>
      <hr />
      {/* <p>Link Based</p>
      <Nav>
        <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink> */}
      </Nav>
    </div>
    );
  }
}
export default Footer;
