import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts.js';
import logo from '../../logo.svg';

class Blank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
    }
  }

  componentWillUnmount() {
    $("head").find('script').remove(); 
  }
  
  render() {
    return (
        <Fragment>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                You are on the blank page
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              <p>
                <Link
                  className="App-link"
                  to="/"
                >
                  Home
                </Link>
              </p>
            </header>
          </div>
          <Scripts />
        </Fragment>
    );
  }
}

export default Blank;