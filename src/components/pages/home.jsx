import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";
import logo from '../../logo.svg';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
    }
  }
  
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              You are on the home page
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
                to="/blank"
              >
                Blank
              </Link>
            </p>
          </header>
        </div>
    );
  }
}

export default Home;
