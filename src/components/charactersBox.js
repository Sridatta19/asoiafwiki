
import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

class CharacterBox extends Component {

  onLike = (id, likes) => {
    this.props.mutate({
      variables: {id},
      optimisticResponse: {
        __typename: 'Mutation',
        likeCharacter: {
          id,
          __typename: 'Character',
          likes: likes + 1
        }
      }
    });
  }

  render() {
    return (
      <section className="section-padding">
        {this.props.characters.map(c => <CharacterTile onLike={this.onLike} key={c.id} character={c} />)}
      </section>
    );
  }
}

const CharacterTile = ({ onLike, character: { id, name, quote, likes } }) => {
  const likeCharacter  = () => onLike(id, likes)
  return (
    <div className="promo-box white-bg border-box">
          <div className="promo-info">
              <i className="fa fa-users promo-icon circle"></i>
              <h2 className="text-extrabold text-uppercase">{name}</h2>
              <p>{quote}</p>
          </div>
          <div className="promo-btn" onClick={likeCharacter} >
              <a className="btn btn-lg waves-effect waves-light font-25">
                  {likes} <i className="fa fa-thumbs-o-up promo-icon circle" style={{ fontSize: '1em' }}></i>
              </a>
          </div>
      </div>
  )
}

const mutation = gql`
  mutation addLike($id: ID){
    likeCharacter(id: $id){
      id
      likes
      name
      quote
    }
  }
`;

export default graphql(mutation)(CharacterBox);
