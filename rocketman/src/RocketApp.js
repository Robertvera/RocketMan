import React, { Component } from 'react';
import './style.css';
import './stars.css';

import About from './components/about-us/about';
import Destinations from './components/destinations/destinations';

class RocketApp extends Component {
  constructor() {
    super()

    this.state = {

    }
  }



  render() {
    return (
      <div>
        <div id='stars'></div>
        <div id='stars2'></div>
        < nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" >
          <a className="navbar-brand" href="#">
            <img src="./images/rocketman_imagotipo_blue.svg" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">About us
        </a>
              </li>
            </ul>
          </div>
        </nav >
      </div>

    );
  }
}

export default RocketApp;
