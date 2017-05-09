
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import fetchCharacters from '../queries/fetchCharacters'

class CharacterCreate extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: '',
      quote: ''
    }
  }

  onSubmit(evt) {
    evt.preventDefault()
    this.props.mutate({
      variables: {
        name: this.state.name,
        quote: this.state.quote,
        id: this.props.houseId
      },
      refetchQueries: [{ query: fetchCharacters }]
    }).then(() => this.setState({ name: '', quote: '' }))
  }

  render() {
    return (
      <div className="comments-tab" style={{ padding: '40px' }}>
        <div className="panel-body">
          <h1 className="title">Add a Character</h1>
            <div className="tab-content">
              <div role="tabpanel" className="tab-pane fade in active" id="default-comment">
                <div className="comment-respond">
                  <form action="#" method="post" id="commentform" role="form">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-sm-4 comment-form-author">
                          <input className="form-control" id="author" placeholder="Your Name" name="author" type="text" value={this.state.name} onChange={evt => this.setState({ name: evt.target.value })} aria-required="true"/>
                        </div>
                      </div>
                    </div>
                    <div className="form-group comment-form-comment">
                      <textarea className="form-control" id="comment" value={this.state.quote} onChange={evt => this.setState({ quote: evt.target.value })} name="comment" placeholder="Comment" rows="8" aria-required="true"></textarea>
                    </div>
                    <div className="form-submit">
                        <button className="btn btn-lg green waves-effect waves-light" name="submit" id="submit" onClick={this.onSubmit.bind(this)}>Add</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

const mutation = gql`
  mutation addCharacter($name: String, $quote: String, $id: ID){
    addCharacterToHouse(name: $name, quote: $quote, houseId: $id){
      id
      characters {
        id
        name
        quote
        likes
      }
    }
  }
`;

export default graphql(mutation)(CharacterCreate);
