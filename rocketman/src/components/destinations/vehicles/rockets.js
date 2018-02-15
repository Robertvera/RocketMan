import React, { Component } from 'react';
import './vehicles.css';
import rocketApi from '../../../api/rocket-api-1.0.0'

import { NavLink } from 'react-router-dom'



class Rockets extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visibleContinue:false,
        }
    }


    componentDidMount = () => {
        this.retrieveRockets();
    }

    retrieveRockets = () => {
        rocketApi.searchRockets().then(rockets => {


            rockets = rockets.map((rocket) => {
                if (rocket.images = 'undefined') {
                    switch (rocket.id) {
                        case "falcon1":
                            rocket.images = {
                                url: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Falcon_1_Flight_4_liftoff.jpg"
                            }
                            break;
                        case "falcon9":
                            rocket.images = {
                                url: "https://spaceflightnow.com/falcon9/001/100603prelaunch/falcon9dragon.jpg"
                            }
                            break;
                        case "falconheavy":
                            rocket.images = {
                                url: "http://spacenews.com/wp-content/uploads/2018/01/fh-onpad.jpg"
                            }
                            break;
                        default:
                            rocket.images = {
                                url: "https://pbs.twimg.com/profile_images/950702140359630849/h84XsE4p_400x400.jpg"
                            }
                    }
                }
                return rocket
            })

            this.props.setRockets(rockets)

        })
    }

    retrieveRocket = (e,type) => {
        var rocketName = e.target.getAttribute('data-rocket')
        this.props.setRocket(rocketName)
        
        this.setState({ visibleContinue: true })

        this.props.setType(type)

    }


    render() {


        return (
            <div>
                <section className="container section-select mt-5">
                    <h1 className="text-white">
                        Select your Rocket
            </h1>
                    {
                        this.props.rockets.map((rocket) =>
                            <div key={rocket.id} className="card mt-4">
                                <div className="card-body">

                                    <label className="radio-button">
                                        <input onClick={(e)=>{this.retrieveRocket(e,'rocket')}} type="radio" data-rocket={rocket.name} className="option-input radio" name="example" />
                                    </label>

                                    <h4 className="card-title">{rocket.name}</h4>
                                    <div className="container">
                                        <div className="row">
                                            <div className="no-padding col-sm-12 col-md-3 col-lg-3">
                                                <img className="img-fluid" src={rocket.images.url} alt="rocket/capsule" />
                                            </div>
                                            <div className="info col-sm-12 col-md-9 col-lg-9">
                                                <div className="container">
                                                    <div className="row">
                                                        <p className="card-text col-12">{rocket.description}</p>
                                                        <div className="container col-12 mb-3">
                                                            <div className="row">
                                                                <div className="col-6 col-sm-6 col-md-4 col-lg-4">
                                                                    <i className="icon ion-android-arrow-dropup-circle" />
                                                                    <span>Height:</span>
                                                                    <br />
                                                                    <span className="main-info-card">{rocket.height.meters} m</span>
                                                                </div>
                                                                <div className="col-6 col-sm-6 col-md-4 col-lg-4">
                                                                    <i className="icon ion-ios-ionic-outline" />
                                                                    <span>Diameter:</span>
                                                                    <br />
                                                                    <span className="main-info-card">{rocket.diameter.meters} m</span>
                                                                </div>
                                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                                                    <i className="icon ion-bag" />
                                                                    <span>Weight:</span>
                                                                    <br />
                                                                    <span className="main-info-card">{rocket.mass.kg} kg</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="container">
                                                            <div className="row">
                                                                <label className="col-12">
                                                                    Success rate:
                                                            </label>
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar progress-bar-striped bg-success" style={{ width: rocket.success_rate_pct + "%" }} role="progressbar" aria-valuemax={100}>
                                                                    {rocket.success_rate_pct}%
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                </section>

                {this.state.visibleContinue ? 
                <div className="section-button container-full">
                    <NavLink className="btn btn-primary btn-lg btn-block" to="/departures">Continue</NavLink>
                    <div className="shine" />
                </div>
                : null}


            </div>
        )
    }
}

export default Rockets;


