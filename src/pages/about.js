
import React, { Component } from 'react';

export default class About extends Component {

  state = {
    images: [
      require('../../images/about/reina.jpg'),
      require('../../images/about/3a2d.jpg'),
      require('../../images/about/400px.jpg'),
      require('../../images/about/a6be.jpg'),
      require('../../images/about/iAu01DV.jpg'),
      require('../../images/about/Rodrik.jpg')
    ]
  }

  rotatePrev = () => {
    const { images } = this.state
    images.unshift(images.pop())
    this.setState({ images  })
  }

  rotateNext = () => {
    const { images } = this.state
    images.push(images.shift())
    this.setState({ images  })
  }

  render() {
    const slideStyle = {
      width: '1200%',
      transitionDuration: '0.6s',
      transform: 'translate3d(-748px, 0px, 0px)'
    }
    const blogImage1 = require('../../images/about/3a2d.jpg')
    const blogImage2 = require('../../images/about/400px.jpg')
    const blogImage3 = require('../../images/about/a6be.jpg')
    const blogImage4 = require('../../images/about/iAu01DV.jpg')
    return (
      <section className="section-padding">
            <div className="container">
              <h2 className="font-30 text-medium mb-30">Welcome to ASOIAF</h2>
              <div className="row">
                <div className="col-md-7">
                  <p>George R. R. Martin's <strong><a>A Song of Ice and Fire</a></strong> series has become, in many ways, the gold standard for modern epic fantasy. Martin--dubbed the "American Tolkien" by Time magazine--has created a world that is as rich and vital as any piece of historical fiction, set in an age of knights and chivalry and filled with a plethora of fascinating, multidimensional characters that you love, hate to love, or love to hate as they struggle for control of a divided kingdom. </p>
                </div>
                <div className="col-md-4">
                  <div className="gallery-thumb">
                  <div className="flex-viewport" style={{ overflow: 'hidden', position: 'relative' }}>
                    <ul className="slides" style={slideStyle}>
                      {this.state.images.map((i,j) => {
                          return <li key={j} data-thumb={i} className="clone" aria-hidden="true" style={{ width: '374px', float: 'left', display: 'block' }}>
                            <img src={i} alt="about" draggable="false"/>
                          </li>
                      })}
                    </ul>
                  </div>
                  <ol className="flex-control-nav flex-control-thumbs">
                    <li><img alt="about" src={blogImage1} className="" draggable="false"/></li>
                    <li><img alt="about" src={blogImage2} draggable="false" className="flex-active"/></li>
                    <li><img alt="about" src={blogImage3} draggable="false" className=""/></li>
                    <li><img alt="about" src={blogImage4} draggable="false" className=""/></li>
                  </ol>
                  <ul className="flex-direction-nav">
                    <li className="flex-nav-prev"><a onClick={this.rotatePrev} className="flex-prev">Previous</a></li>
                    <li className="flex-nav-next"><a onClick={this.rotateNext} className="flex-next">Next</a></li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
        </section>
    );
  }
}
