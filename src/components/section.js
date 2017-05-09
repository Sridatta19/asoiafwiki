
import React, { Component } from 'react';

export default class Section extends Component {
  render() {
    const ipad = require('../../images/acf.jpg')
    const imgStyle = {
      paddingLeft: '75px',
      maxHeight: '100%'
    }
    return (
      <section className="padding-top-70 padding-bottom-50">
            <div className="container">
                <div className="row equal-height-row">
                    <div className="col-md-7">
                      <div className="valign-wrapper equal-height-column" style={{ height: '412px' }}>
                        <div className="hero-intro valign-cell">
                            <h2 className="font-40 line-height-50 mb-40">A cold wind was blowing from the north, and it made the trees rustle like living things.</h2>
                            <p className="no-margin">A day will come when you think yourself safe and happy, and suddenly your joy will turn to
                              <a style={{ marginLeft: '4px' }} href="#">ashes</a> in your mouth, and you'll know the debt is paid.
                            </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 hero-thumb equal-height-column" style={{ height: '412px' }}>
                        <img src={ipad} className="img-responsive " alt="Responsive"  style={imgStyle} />
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
