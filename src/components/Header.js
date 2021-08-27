import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import turtleLogo from '../assets/turtle_logo.png'

const Header = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);


        return (
            <div>
            <img src={turtleLogo} alt="logo for Turtle Tinder" className="turtle-logo" />
              <header className="header">
                <NavItem>
                  <NavLink href="/turtleindex" className="links">Meet the Turtles!</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/turtlenew">Create a Turtle</NavLink>
                </NavItem>
              </header>
            </div>
        );
    }

export default Header;
