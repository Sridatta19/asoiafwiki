
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import gql from 'graphql-tag';
import fetchHouses from '../queries/fetchHouses'
import { graphql } from 'react-apollo';

class HouseCreate extends Component {

  constructor(props){
    super(props)
    this.state = {
      title: '',
      quote: ''
    }
  }

  titleChange(evt) {
    this.setState({ title: evt.target.value })
  }

  quoteChange(evt) {
    this.setState({ quote: evt.target.value })
  }

  onSubmit(evt) {
    evt.preventDefault()
    this.props.mutate({
      variables: { title: this.state.title, quote: this.state.quote },
      refetchQueries: [{ query: fetchHouses }]
    }).then(
      () => this.props.history.push('/houses'),
      (error) => console.error(error)
    )
  }

  render() {
    const { title, quote } = this.state
    return (
      <div>
        <section className="agency-banner-3 bg-fixed parallax-bg overlay dark-7 ptb-190" data-stellar-background-ratio="0.5" style={{ backgroundPosition: '0% 0px' }}>
            <div className="container">
              <div className="career-cover text-center">
                <h2 className="white-text text-bold">Create a New House</h2>
              </div>
            </div>
        </section>
        <section className="section-padding gray-bg">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <form name="contact-form" id="contactForm">
                      <div className="input-field">
                        <input id="email" type="email" name="email" className="validate" value={title} onChange={this.titleChange.bind(this)}/>
                        <label htmlFor="email" data-error="wrong" data-success="right">Name</label>
                      </div>
                      <div className="input-field">
                        <textarea name="message" id="message" className="materialize-textarea" value={quote} onChange={this.quoteChange.bind(this)}></textarea>
                        <label htmlFor="message">Quote</label>
                      </div>
                      <div className="text-center">
                        <button onClick={this.onSubmit.bind(this)} style={{ backgroundColor: '#2ecc71', borderRadius: '50px' }} type="submit" name="submit" className="waves-effect waves-light btn btn-lg text-capitalize text-bold mt-80">Create</button>
                      </div>
                    </form>
                </div>
              </div>
            </div>
          </section>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddHouse($title: String, $quote: String){
    addHouse(title: $title, quote: $quote){
      title
      quote
    }
  }
`;

export default graphql(mutation)(withRouter(HouseCreate));
