import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

export default class NavBar extends Component {
  render() {
    return (
      <Link to="/">
        <div className="navbar">
            <img className="img-navbar" src={require('../../assets/navbar.png')} alt='' />
        </div>
      </Link>
    );
  }
}