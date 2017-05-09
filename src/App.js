
import React, { Component } from 'react';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './pages/header';
import Login from './pages/login';
import Footer from './pages/footer';
import About from './pages/about';
import NotFound from './pages/NotFound';

import ScrollToTop from './components/scrollToTop';
import Breadcrumbs from './components/breadcrumbs';
import Section from './components/section';
import HouseCreate from './components/houseCreate';
import AllCharacters from './components/allCharacters';
import HouseDetail from './components/houseDetail';
import Grid from './components/grid';

import '../css/material-icons.css'
import '../css/materialize.min.css'
import '../css/font-awesome.min.css'
import '../css/bootstrap.min.css'

import '../css/header.css'
import '../css/blog.css'
import '../css/style.css'
import './App.css';

const client = new ApolloClient({
  dataIdFromObject: o => o.id
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <ScrollToTop>
            <Header />
            <Breadcrumbs />
            <Switch>
              <Route exact path="/" component={Section}/>
              <Route exact path="/houses" component={Grid}/>
              <Route path="/houses/create" component={HouseCreate}/>
              <Route path="/characters" component={AllCharacters}/>
              <Route path="/character/:houseId" component={HouseDetail}/>
              <Route path="/login" component={Login}/>
              <Route path="/about" component={About}/>
              <Route component={NotFound}/>
            </Switch>
            <Footer/>
          </ScrollToTop>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
