import React, { Component } from 'react';
import './style.css';
import './stars.css';

// import react-router
import { Route, HashRouter } from 'react-router-dom'

import Menu from './components/destinations/menu';
import About from './components/about-us/about';
import Destinations from './components/destinations/destinations';

import Rockets from './components/destinations/vehicles/rockets';
import Capsules from './components/destinations/vehicles/capsules';

import Departures from './components/destinations/vehicles/departures/departures';

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

        

        <HashRouter>
          <div>

            <Route path="/" render={() => (
              <Menu />
            )} />

            <Route exact path="/" render={() => (
              <Destinations setCapsules={this.setCapsules} capsules={this.state.capsules} destination={this.state.destination} onClickDestination={this.selectDestination} launchpads={this.state.capsules} />
            )} />

            <Route path="/select-capsules" render={() => (
              <Capsules setCapsules = {this.setCapsules} setCapsule={this.setCapsule} capsules = {this.state.capsules }  launchpads={this.state.capsules} setLaunchpads={this.setLaunchpads} />
            )} />

            <Route path="/select-rockets" render={() => (
              <Rockets setRockets={this.setRockets} setRocket={this.setRocket} rockets={this.state.rockets} launchpads={this.state.capsules} setLaunchpads={this.setLaunchpads} />
            )} />

            <Route path="/about-us" render={() => (
              <About />
            )} />

            <Route path="/departures" render={() => (
              <Departures rocketID = {this.state.rocketId} capsuleID = {this.state.capsuleID}/>
            )} />    

          </div>
        </HashRouter>

      </div>
    );
  }
}

export default RocketApp;
