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
import Userdata from './components/destinations/vehicles/departures/userdata/userdata';
import Checkout from './components/destinations/vehicles/departures/userdata/checkout/checkout';
import Purchaseok from './components/destinations/vehicles/departures/userdata/checkout/purchaseok/purchaseok';


class RocketApp extends Component {
  constructor() {
    super()

    this.state = {
      destination: '',
      rockets: [],
      vehicleID: '',
      capsules: [],
      type:'',      
      // launchpads: [],
      userInfo: {
        name: '',
        lastname: '',
        address: '',
        gender: ''
      },
      launchpadName: '',
      locationRegion:'',
      locationName: ''

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

  setRocket = (rocketID) => this.setState({ vehicleID: rocketID })

  setCapsule = (capsuleID) => this.setState({ vehicleID: capsuleID })

  setType = (type) => this.setState({type: type})

  setInfo = (userInfo) =>{
     this.setState({ userInfo })
  }

  setlaunchpadName= (launchpadName) =>{
    this.setState({ launchpadName })
 }

 setlocationRegion= (locationRegion) =>{
  this.setState({ locationRegion })
}

setlocationName= (locationName) =>{
  this.setState({ locationName })
}

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
              <Capsules setCapsules = {this.setCapsules} setCapsule={this.setCapsule} setType={this.setType} vehicleID ={this.state.vehicleID} capsules = {this.state.capsules }  setLaunchpads={this.setLaunchpads} />
            )} />

            <Route path="/select-rockets" render={() => (
              <Rockets setRockets={this.setRockets} setRocket={this.setRocket} setType={this.setType} vehicleID ={this.state.vehicleID} rockets={this.state.rockets} setLaunchpads={this.setLaunchpads} />
            )} />

            <Route path="/departures" render={() => (
             <Departures setlaunchpadName ={this.setlaunchpadName} setlocationRegion ={this.setlocationRegion} setlocationName ={this.setlocationName} vehicleID = {this.state.vehicleID}  destination={this.state.destination}/>
           )} />

            <Route path="/about-us" render={() => (
              <About />
            )} />

            <Route path="/userdata" render={() => (
              <Userdata setInfo={this.setInfo} />
            )} />

            <Route path="/checkout" render={() => (
              <Checkout setInfo={this.setInfo} launchpadName={this.state.launchpadName} locationRegion={this.state.locationRegion} locationName ={this.state.locationName} destination={this.state.destination} type={this.state.type} vehicleID={this.state.vehicleID} userInfo={this.state.userInfo}/>
            )} />

            <Route path="/purchaseok" render={() => (
              <Purchaseok />
            )} />


          </div>
        </HashRouter>
      </div>
    );
  }
}

export default RocketApp;
