
import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import fetchHouse from '../queries/fetchHouse'
import CharacterBox from './charactersBox'
import CharacterCreate from './characterCreate'

class HouseDetail extends Component {

  render() {
    const { house } = this.props.data
    if(!house) return <div className="load-more-button text-center box-padding">
      <a className="waves-effect waves-light btn red">
          <i className="fa fa-spinner left"></i> Loading
      </a>
      </div>
    return (
      <div>
        <CharacterBox characters={house.characters} />
        <CharacterCreate houseId={house.id} />
      </div>
    );
  }
}

export default graphql(fetchHouse, {
  options: (props) => {
    return { variables: { id: props.match.params.houseId } }
  }
})(HouseDetail)
