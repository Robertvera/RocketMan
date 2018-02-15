import React, { Component } from 'react';
import './destinations.css';

import Capsules from './vehicles/capsules';

import { NavLink } from 'react-router-dom'

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

                  <NavLink className="btn btn-primary" to="/select-capsules" onClick={(e)=>{e.preventDefault;this.sendDestination('Mars')}}>Let's go to Mars
                  </NavLink>

                </div>
              </div>
            </div>
            <div className="col-sm-6 mt-4">
              <div className="card">
                <div className="moon card-body">
                  <h5 className="card-title">Moon</h5>

                  <NavLink className="btn btn-primary" to="/select-capsules" onClick={(e)=>{e.preventDefault;this.sendDestination('Moon')}}>Let's go to Moon
                  </NavLink>

                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 mt-4">
              <div className="card">
                <div className="jupiter card-body">
                  <h5 className="card-title">Jupiter</h5>

                  <NavLink className="btn btn-primary" to="/select-rockets" onClick={(e)=>{e.preventDefault;this.sendDestination('Jupiter')}}>Let's go to Jupiter
                  </NavLink>

                </div>
              </div>
            </div>
            <div className="col-sm-6 mt-4">
              <div className="card">
                <div className="uranus card-body">
                  <h5 className="card-title">Uranus</h5>

                  <NavLink className="btn btn-primary" to="/select-rockets" onClick={(e)=>{e.preventDefault;this.sendDestination('Uranus')}}>Let's go to Uranus
                  </NavLink>

                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

    )


  }
}

export default Destinations;