
import React, { Component } from 'react';

export default class Login extends Component {

  state = {
    displayLogin: true,
  }

  toggleList = (event) => {
      event.stopPropagation()
      this.setState({ displayLogin: !this.state.displayLogin })
    };

  render() {
    const loginClassName = this.state.displayLogin ? 'login-wrapper' : 'login-wrapper active'
    return (
      <section className="section-padding banner-wrapper login-alt banner-6 fullscreen-banner" style={{ height: '926px' }}>
            <div className="container">
                <div className={loginClassName}>
                  <div className="card-wrapper"></div>
                  <div className="card-wrapper">
                    <h1 className="title">Login</h1>
                    <form>
                      <div className="input-container">
                        <input type="text" id="username" required="required"/>
                        <label htmlFor="username">Username</label>
                        <div className="bar"></div>
                      </div>
                      <div className="input-container">
                        <input type="password" id="password" required="required"/>
                        <label htmlFor="password">Password</label>
                        <div className="bar"></div>
                      </div>
                      <div className="button-container">
                        <a href="#." className="btn btn-lg btn-block waves-effect waves-light">Login</a>
                      </div>
                      <div className="footer"><a href="#">Forgot your password?</a></div>
                    </form>
                  </div>
                  <div className="card-wrapper alt">
                    <div className="toggle" onClick={this.toggleList}></div>
                    <h1 className="title">Register
                      <div className="close" onClick={this.toggleList}></div>
                    </h1>
                    <form>
                      <div className="input-container">
                        <input type="text" id="newusername" required="required"/>
                        <label htmlFor="newusername">Username</label>
                        <div className="bar"></div>
                      </div>
                      <div className="input-container">
                        <input type="password" id="newpassword" required="required"/>
                        <label htmlFor="newpassword">Password</label>
                        <div className="bar"></div>
                      </div>
                      <div className="input-container">
                        <input type="password" id="repeat-password" required="required"/>
                        <label htmlFor="repeat-password">Repeat Password</label>
                        <div className="bar"></div>
                      </div>
                      <div className="button-container">
                        <a href="#." className="btn btn-lg btn-block white waves-effect waves-red">Register</a>
                      </div>
                    </form>
                  </div>
                </div>

            </div>
        </section>
    );
  }
}
