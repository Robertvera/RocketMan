import React, { Component } from 'react';
import './departures.css';

import Userdata from './userdata/userdata';
import rocketApi from '../../../../../src/api/rocket-api-1.0.0';

class Coordinates {
    constructor(id, lat, long) {
        this.id = id,
        this.lat = lat,
        this.long = long
    }
}

class Departures extends Component {

    componentDidMount = () => {
        this.retrieveLaunchpads();
    }

    retrieveLaunchpads = () => {
        rocketApi.searchLaunchpads()
            .then((listOfLaunchpads) => {
                this.props.setLaunchpads(listOfLaunchpads)

            })
    }

    matchRocket(rocket, launchpadsList) {
        let launchpadsRocket = []
        for (let i = 0; i < launchpadsList.length; i++) {    
            for (let j = 0; j < launchpadsList[i].vehicles_launched.length; j++) {
                if (rocket.name == launchpadsList[i].vehicles_launched[j]) {              
                    launchpadsRocket.push(new Coordinates(launchpadsList[i].id, launchpadsList[i].location.latitude, launchpadsList[i].location.longitude))
                }
            }
      
        }
        return launchpadsRocket
    }



    render() {

        return (
            <section className="container section-select mt-5">
                <h1 className="text-white">Departures information</h1>
                <div className="card mt-4">
                    <div className="card-body">
                        <div className="container">
                            <div className="row">
                                <div className="no-padding col-sm-12 col-md-3 col-lg-3">
                                    <img className="img-fluid" src="images/map.png" alt="map location" />
                                </div>
                                <div className="info col-sm-12 col-md-9 col-lg-9">
                                    <div className="container">
                                        <div className="row">
                                            <div className="subsection-departures-information">
                                                <h4>Departure localization</h4>
                                                <p>Kenedy Space</p>
                                                <h4>Region</h4>
                                                <p>Florida</p>
                                                <h4>Description</h4>
                                                <p>NASA historic launch pad that launched most of the Saturn. NASA historic launch pad that launched most of the Saturn.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }

}

export default Departures;