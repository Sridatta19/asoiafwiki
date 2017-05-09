
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    const logo = require('../../images/Dayne.jpg')
    return (
      <header id="header" className="tt-nav nav-border-bottom">
            <div className="header-sticky light-header ">
                <div className="container">
                    <div id="materialize-menu" className="menuzord">
                        <a href="index.html" className="logo-brand">
                            <img className="retina" src={logo} alt=""/>
                        </a>
                        <ul className="menuzord-menu pull-right">
                            <li className="active"><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                            <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
                            <li><NavLink activeClassName="active" to="/houses">Houses</NavLink></li>
                            <li><NavLink activeClassName="active" to="/characters">Characters</NavLink></li>
                            <li><NavLink activeClassName="active" to="/login">Login/Register</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
  }
}
