import React, { Component } from 'react';
import {  Route, Link, Switch, Redirect } from "react-router-dom";
import $ from 'jquery';

import Header from './includes/header.jsx';
import Footer from './includes/footer.jsx';

import Home from './pages/home.jsx';
import Blank from './pages/blank.jsx';

function NoMatch (props) {
  return (
    <div key="content"  className="container padding-top-3x padding-bottom-3x mb-1">
      <h1 className="display-404 text-center">404</h1>
      <div className="text-center">
        <h2>Page Not Found</h2>
        <p className="text-sm">It seems we can’t find the <span className="w3-text-red">{window.location.pathname}</span> page you are looking for. <Link to="/">Go back to Homepage</Link><br/>Or try using search at the top right corner of the page.</p>
      </div>
    </div>
  )
}

class Components extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url
    }
  }

  render() {
    return [
        <Header key="header" />,
        <Switch key="switch">
            <Route exact path="/" render={(props) => 
              <Home {...props}
                base_url={this.state.base_url} 
                api_url={this.state.api_url} 
              />} 
            />
            <Route path="/blank" render={(props) => 
              <Blank {...props} 
                base_url={this.state.base_url} 
                api_url={this.state.api_url} 
              />} 
            />
            <Route render={(props) =>
              <NoMatch
                base_url={this.state.base_url} 
                api_url={this.state.api_url} 
              />}
            />
        </Switch>,
        <Footer key="footer" />
    ];
  }
}

export default Components;
