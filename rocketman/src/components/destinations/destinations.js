import React, { Component } from 'react';
import './destinations.css';

import Capsules from './vehicles/capsules';
import Rockets from './vehicles/rockets';

class Destinations extends Component {

    sendDestination = destination => {
        this.props.onClickDestination(destination)
    }

    render() {
        return (
          <div>
          <section className="container section-destination mt-5 pt-5">
        <h1 className="text-white">Select your destination</h1>
        <div className="row">
          <div className="col-sm-6 mt-4">
            <div className="card">
              <div className="mars card-body">
                <h5 className="card-title">Mars</h5>
                <a href="#" className="btn btn-primary" onClick={e=> {e.preventDefault();this.sendDestination('mars')}}>Let's go to Mars</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mt-4">
            <div className="card">
              <div className="moon card-body">
                <h5 className="card-title">Moon</h5>
                <a href="#" className="btn btn-primary" onClick={e=> {e.preventDefault();this.sendDestination('moon')}}>Let's go to Moon</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 mt-4">
            <div className="card">
              <div className="jupiter card-body">
                <h5 className="card-title">Jupiter</h5>
                <a href="#" className="btn btn-primary" onClick={e=> {e.preventDefault();this.sendDestination('jupiter')}}>Let's go to Jupiter</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mt-4">
            <div className="card">
              <div className="uranus card-body">
                <h5 className="card-title">Uranus</h5>
                <a href="#" className="btn btn-primary" onClick={e=> {e.preventDefault();this.sendDestination('uranus')}}>Let's go to Uranus</a>
              </div>
            </div>
          </div>
        </div>        
      </section>
      <Rockets setLaunchpads={this.props.setLaunchpads} launchpads = {this.props.launchpads}/>
      </div>

        )
      
      
    }

}

export default Destinations;