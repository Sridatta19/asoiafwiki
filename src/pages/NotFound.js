
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'

class NotFound extends Component {
  render() {
    return (
      <div>
        <section className="error-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-5">
                        <i className="fa fa-dropbox"></i>
                    </div>
                    <div className="col-sm-7">
                        <div className="error-info">
                            <h1 className="mb-30">404</h1>
                            <span className="error-sub">OOPS! PAGE NOT FOUND</span>
                            <p>Sorry, but we can’t seem to find the page you are looking for.</p>
                            <Link className="btn btn-lg waves-effect waves-light" to="/">Take Me Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    )
  }
}

export default withRouter(NotFound)
