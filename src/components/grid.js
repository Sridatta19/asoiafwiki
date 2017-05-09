
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import gql from 'graphql-tag';
import fetchHouses from '../queries/fetchHouses'
import { graphql } from 'react-apollo';

class Grid extends Component {

  onHouseDelete(id) {
      if (false) {
        this.props.mutate({ variables: { id } })
        .then(() => this.props.data.refetch())
      }
  }

  render() {
    const { data: { loading, houses } } = this.props
    return (
      <section className="section-padding default-blog grid-blog">
            <div className="container">
              <div className="row">
                {loading ? <div className="load-more-button text-center padding-bottom-70">
                  <a className="waves-effect waves-light btn red">
                      <i className="fa fa-spinner left"></i> Loading
                  </a>
                </div> : houses.map(house => <GridComponent  key={house.id} onHouseDelete={this.onHouseDelete.bind(this)} house={house} />)}
              </div>
              {loading ? null : <div className="load-more-button text-center">
                {/*<a className="waves-effect waves-light btn btn-large pink"> <i className="fa fa-spinner left"></i> View More</a>*/}
                <Link to="/houses/create" className="ml-20 waves-effect waves-light btn btn-large green"> <i className="fa fa-plus-circle left"></i> Add More</Link>
              </div>}
            </div>
        </section>
    );
  }
}

const getSigil = (title) => {
  let logoPath
  if (title.match(/Martell/i) && title.match(/Martell/i)[0] === 'Martell') {
    logoPath = require('../../images/houses/martell.jpeg')
  } else if (title.match(/Stark/i) && title.match(/Stark/i)[0] === 'Stark') {
    logoPath = require('../../images/houses/stark.jpg')
  } else if (title.match(/Baratheon/i) && title.match(/Baratheon/i)[0] === 'Baratheon') {
    logoPath = require('../../images/houses/baratheon.png')
  } else if (title.match(/Lannister/i) && title.match(/Lannister/i)[0] === 'Lannister') {
    logoPath = require('../../images/houses/lannister.jpeg')
  } else if (title.match(/Greyjoy/i) && title.match(/Greyjoy/i)[0] === 'Greyjoy') {
    logoPath = require('../../images/houses/greyjoy.png')
  } else if (title.match(/Tully/i) && title.match(/Tully/i)[0] === 'Tully') {
    logoPath = require('../../images/houses/tully.jpg')
  } else if (title.match(/Tyrell/i) && title.match(/Tyrell/i)[0] === 'Tyrell') {
    logoPath = require('../../images/houses/tyrell.jpg')
  } else {
    logoPath = require('../../images/houses/asoiaf.jpg')
  }
  return logoPath
}

const GridComponent  = ({ house, onHouseDelete }) => {
  const { id, title, quote } = house
  const blog3 = require('../../images/blog/blog-3.jpg')
  const houseSigil = getSigil(title)
  const deleteHouse = () => onHouseDelete(id)
    return (
      <div className="col-md-4">
          <article className="post-wrapper">
            <div className="thumb-wrapper">
              <img src={blog3} className="img-responsive" alt="" />
              <div className="entry-header">
                <h2 className="entry-title"><a href="#">House {title}</a></h2>
                <span className="posted-in">
                  <Link to={`/character/${id}`}>View Characters</Link>
                </span>
              </div>
              <div className="author-thumb waves-effect waves-light">
                <a href="#"><img src={houseSigil} alt=""/></a>
              </div>
              <span className="post-comments-number" onClick={deleteHouse} style={{ cursor: 'pointer' }}>
                <i className="fa fa-trash"></i>
              </span>
            </div>
            <div className="entry-content">
              <p>{quote}</p>
            </div>
          </article>
      </div>
    )
}

const mutation = gql`
  mutation DeleteHouse($id: ID){
    deleteHouse(id: $id){
 		   id
     }
  }
`

export default graphql(mutation)(
  graphql(fetchHouses)(Grid)
);
