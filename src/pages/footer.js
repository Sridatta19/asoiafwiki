
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Footer extends Component {

  scrollToTop () {
    window.scrollTo(0, 0)
  }

  render() {
    const logoWhite = require('../../images/Dayne.jpg')
    return (
      <footer className="footer footer-four">
            <div className="primary-footer brand-bg text-center">
                <div className="container">
                  <a onClick={this.scrollToTop} className="page-scroll btn-floating btn-large pink back-top waves-effect waves-light tt-animate btt" data-section="#top">
                    <i className="material-icons"></i>
                  </a>
                  <ul className="social-link tt-animate ltr mt-20">
                    <li><a target="_blank" href="https://www.facebook.com/GameOfThronesASOIAF/"><i className="fa fa-facebook"></i></a></li>
                    <li><a target="_blank" href="https://twitter.com/serasoiaf"><i className="fa fa-twitter"></i></a></li>
                  </ul>
                  <hr className="mt-15"/>
                  <div className="row">
                    <div className="col-md-12">
                          <div className="footer-logo">
                            <img src={logoWhite} alt="" />
                          </div>
                          <span className="copy-text">Copyright © 2016 <a href="#">Materialize</a> &nbsp; | &nbsp;  All Rights Reserved &nbsp;</span>
                          <div className="footer-intro">
                            <p>Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post. I am the sword in the darkness. I am the watcher on the walls. I am the fire that burns against cold, the light that brings the dawn, the horn that wakes the sleepers, the shield that guards the realms of men. I pledge my life and honor to the Night's Watch, for this night and all the nights to come.</p>
                          </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="secondary-footer brand-bg darken-2 text-center">
                <div className="container">
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
  }
}
