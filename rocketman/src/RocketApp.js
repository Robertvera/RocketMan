import React, { Component } from 'react';
import './style.css';
import './stars.css';

// import react-router
import { Route, HashRouter } from 'react-router-dom'

import About from './components/about-us/about';
import Destinations from './components/destinations/destinations';

import Rockets from './components/destinations/vehicles/rockets';
import Capsules from './components/destinations/vehicles/capsules';

class RocketApp extends Component {
  constructor() {
    super()

    this.state = {
      destination: '',
      rockets: [],
      rocketID: [],
      capsules: [],
      capsuleID: [],
      launchpads: [],
      launchpadID: [],
      userInfo: {
        name: '',
        lastname: '',
        address: '',
        gender: ''
      }

    }

  }

  selectDestination = selectedDestination => {
    this.setState({
      destination: selectedDestination
    })
  }

  setLaunchpads = launchpadsList => this.setState({ launchpads: launchpadsList })

  setRockets = (rockets) => this.setState({ rockets })

  setCapsules = (capsules) => this.setState({ capsules })

  setRocket = (rocketID) => this.setState({ rocketID: rocketID })

  setCapsule = (capsuleID) => this.setState({ capsuleID: capsuleID })


  render() {
    return (
      <div>
        <div id='stars'></div>
        <div id='stars2'></div>

        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="#">
            <img src="./images/rocketman_imagotipo_blue.svg" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">About us</a>
              </li>
            </ul>
          </div>
        </nav>

        <section className="section-logo text-center w-100">
          <div className="row">
            <div className="col">
              <img className="mb-4" src="./images/rocketman_logo_blue.svg" />
              <div>
                <span className="text-main-color subsection-subtitle pt-4">we make great steps for humanity</span>
              </div>
            </div>
          </div>
        </section>

        <HashRouter>
          <div>
            <Route exact path="/" render={() => (
              <Destinations setCapsules={this.setCapsules} capsules={this.state.capsules} destination={this.state.destination} onClickDestination={this.selectDestination} launchpads={this.state.capsules} />
            )} />

            <Route path="/select-capsules" render={() => (
              <Capsules setCapsules = {this.setCapsules} setCapsule={this.setCapsule} capsules = {this.state.capsules }  launchpads={this.state.capsules} setLaunchpads={this.setLaunchpads} />
            )} />

            <Route path="/select-rockets" render={() => (
              <Rockets setRockets={this.setRockets} setRocket={this.setRocket} rockets={this.state.rockets} launchpads={this.state.capsules} setLaunchpads={this.setLaunchpads} />
            )} />

          </div>
        </HashRouter>

      </div>
    );
  }
}

export default RocketApp;
