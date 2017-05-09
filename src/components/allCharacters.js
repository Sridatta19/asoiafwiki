
import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import fetchCharacters from '../queries/fetchCharacters'
import CharacterBox from './charactersBox'

class AllCharacters extends Component {

  render() {
    const { loading, characters } = this.props.data
    if(loading) return <div className="load-more-button text-center box-padding">
      <a className="waves-effect waves-light btn red">
          <i className="fa fa-spinner left"></i> Loading
      </a>
      </div>
    return (
      <div>
        <CharacterBox characters={characters} />
      </div>
    );
  }
}

export default graphql(fetchCharacters)(AllCharacters);
