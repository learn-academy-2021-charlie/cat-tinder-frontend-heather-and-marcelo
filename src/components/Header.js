import React, { Component } from 'react';
import Logo from '../assets/turtle_header.jpeg'
class Header extends Component {
    render() {
        return (
            <div className="header">
                <img className="logo" src={Logo} alt="picture of a turtle" />
                <h3> Our Header! </h3>
                <ul>
                  <li><a href="#">Test Link</a></li>
                  <li><a href="#">Test Link</a></li>
                  <li><a href="#">Test Link</a></li>
                </ul>
            </div>
        );
    }
}

export default Header;
