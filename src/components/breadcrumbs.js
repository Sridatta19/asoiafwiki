import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'

class Breadcrumbs extends Component {
  render() {
    const { location: { pathname } } = this.props
    if (
      pathname === '/login' | pathname === '/houses/create' || pathname === '/'
    ) return null
    const origPath = pathname.substr(1)
    const path = origPath.indexOf('/') > 0 ? origPath.substr(0, origPath.indexOf('/')) : origPath
    return (
      <section className="page-title ptb-50">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>A Song of Ice and Fire</h2>
                        <ol className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li className="active">{path}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default withRouter(Breadcrumbs)
