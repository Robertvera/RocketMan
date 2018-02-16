import React, { Component } from 'react';
import './departures.css';

import Userdata from './userdata/userdata';
import rocketApi from '../../../../api/rocket-api-1.0.0';
import ReactMapboxGl, { Layer, Feature, Marker, Popup } from "react-mapbox-gl";
import { NavLink } from 'react-router-dom'



class Coordinates {
    constructor(fullname, lat, long, details, location, region) {
        this.fullname = fullname,
            this.lat = lat,
            this.long = long,
            this.details = details,
            this.location = location,
            this.region = region
    }
}

class capsuleLaunchpads {
    constructor(id, fullname, status, location, vehicles_launched, details) {
        this.id = id,
            this.full_name = fullname,
            this.status = status,
            this.location = location,
            this.vehicles_launched = vehicles_launched,
            this.details = details
    }
}

class Departures extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showMap: true,
            showLaunchpad: false,
            launchpadName: '',
            locationName: '',
            locationRegion: '',
            launchpadDetails: '',
            launchpads: []
        }
    }

    componentDidMount = () => {
        this.retrieveLaunchpads();
    }

    retrieveLaunchpads = () => {
        rocketApi.searchLaunchpads()
            .then((listOfLaunchpads) => {
                this.setState({ launchpads: listOfLaunchpads })

            })
    }

    retrieveCapsuleLaunchpads = () => {
        let cLaunchpads = [new capsuleLaunchpads('caps', 'El Bolson Space Launch Complex', 'active', { name: 'El Bolson', region: 'Argentina', latitude: -41.983384, longitude: -71.5728385 }, ['Dragon 1', 'Dragon 2', 'Crew Dragon'], 'Argentina Space Department historic launch pad that launched most of the Saturn V and Space Shuttle missions. Initially for Falcon Heavy launches, it is now launching all of SpaceX east coast missions due to the damage from the AMOS-6 anomaly. After SLC-40 repairs are complete, it will be upgraded to support Falcon Heavy, a process which will take about two months. In the future it will launch commercial crew missions and the Interplanetary Transport System.')]
        return cLaunchpads
    }

    matchRocket = (rocket, launchpadsList) => {
        let launchpadsRocket = []
        for (let i = 0; i < launchpadsList.length; i++) {
            for (let j = 0; j < launchpadsList[i].vehicles_launched.length; j++) {
                if (rocket == launchpadsList[i].vehicles_launched[j]) {
                    launchpadsRocket.push(new Coordinates(launchpadsList[i].full_name, launchpadsList[i].location.latitude, launchpadsList[i].location.longitude, launchpadsList[i].details, launchpadsList[i].location.name, launchpadsList[i].location.region))
                }
            }

        }
        return launchpadsRocket
    }

    matchCapsule = (capsule, launchpadsList) => {
        let launchpadsCapsule = []
        for (let i = 0; i < launchpadsList.length; i++) {
            for (let j = 0; j < launchpadsList[i].vehicles_launched.length; j++) {
                if (capsule == launchpadsList[i].vehicles_launched[j]) {
                    launchpadsCapsule.push(new Coordinates(launchpadsList[i].full_name, launchpadsList[i].location.latitude, launchpadsList[i].location.longitude, launchpadsList[i].details, launchpadsList[i].location.name, launchpadsList[i].location.region))
                }
            }
        }

        return launchpadsCapsule
    }

    setCenter = (coords) => {
        return [coords[0].long, coords[0].lat]
    }

    setDeparture = (marker) => {
        this.setState({
            launchpadName: marker.fullname,
            locationName: marker.location,
            locationRegion: marker.region,
            launchpadDetails: marker.details,
            showLaunchpad: true
        })

        var element = document.getElementById("launchpad-info");
        element.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});

    }


    // sendlaunchpadName = () => {
    //     let launchpadName = this.state.launchpadName
    //     this.props.setlaunchpadName(launchpadName)
    // }
    
        onToggleHover=(cursor, { map }) => {
        map.getCanvas().style.cursor = cursor;
      }

    sendlaunchpadName = () => {
        let launchpadName = this.state.launchpadName
        this.props.setlaunchpadName(launchpadName)
    }

    sendlocationRegion = () => {
        let locationRegion = this.state.locationRegion
        this.props.setlocationRegion(locationRegion)
    }

    sendlocationName = () => {
        let locationName = this.state.locationName
        this.props.setlocationName(locationName)
    }

    render() {

        if (!this.state.launchpads.length) return ''

        const Map = ReactMapboxGl({
            accessToken: "pk.eyJ1Ijoicm9iZXJ0dmVyYSIsImEiOiJjamRrZDNpYmYwdWF4MzNwMmhwdWVwOWkyIn0.d5enXKznUZ7RdQnbkxFJTg",
        });

        let mapCenter;
        let markers;
        let launchpads2 = this.retrieveCapsuleLaunchpads()

        if (this.props.destination == 'Jupiter' || this.props.destination == 'Uranus') {
            mapCenter = this.setCenter(this.matchRocket(this.props.vehicleID, this.state.launchpads))
            markers = this.matchRocket(this.props.vehicleID, this.state.launchpads)
        } else {
            mapCenter = this.setCenter(this.matchCapsule(this.props.vehicleID, launchpads2))
            markers = this.matchCapsule(this.props.vehicleID, launchpads2)
        }

        return (
            <div>

                <section className="container section-select section-departures mt-5">
                    <h1 className="text-white">Departures information</h1>
                    <div className="card mt-4">
                        <div className="card-body">
                            <div className="container">
                                <div className="row">
                                    <div className="no-padding col-sm-12 col-md-12 col-lg-12" id="map">
                                        {(this.state.launchpads.length) ?
                                            <Map
                                                style="mapbox://styles/mapbox/streets-v9"
                                                containerStyle={{
                                                    height: "60vh",
                                                    width: "100%"
                                                }}
                                                center={mapCenter}
                                                zoom={[3]}
                                            >
                                                <Layer
                                                    type="symbol"
                                                    id="marker"
                                                    layout={{ "icon-image": "rocket-15" }}
                                                >
                                                    {markers.map(marker =>
                                                        <Feature
                                                            key={marker.id}                                                            
                                                            coordinates={[marker.long, marker.lat]}
                                                            onClick={() => {
                                                                this.setDeparture(marker)
                                                                this.sendlaunchpadName()
                                                                this.sendlocationRegion()
                                                                this.sendlocationName()
                                                            }}
                                                            onMouseEnter={this.onToggleHover.bind(this, 'pointer')}
                                                            onMouseLeave={this.onToggleHover.bind(this, '')}
                                                        />
                                                    )}
                                                </Layer>
                                            </Map>
                                            :
                                            undefined
                                        }
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                    {(this.state.showLaunchpad) ?
                        <div className="card mt-4 card-departure-info">
                            <div className="card-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="no-padding col-sm-12 col-md12 col-lg-12" id="launchpad-info">
                                            <h1>{this.state.launchpadName}</h1>
                                            <h5>{this.state.locationName}, {this.state.locationRegion}</h5>
                                            <h4>Description:</h4>
                                            <p>{this.state.launchpadDetails}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div>

                            </div>
                        </div>
                        :
                        undefined
                    }


                </section>
                {(this.state.showLaunchpad) ?
                <div className="section-button container-full">
                                    <NavLink className="btn btn-primary btn-lg btn-block" to="/userdata">Continue</NavLink>
                                    <div className="shine" />
                                </div>:undefined}


            </div>


        )


    }

}

export default Departures;