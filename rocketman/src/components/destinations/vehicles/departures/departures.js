import React, { Component } from 'react';
import './departures.css';

import Userdata from './userdata/userdata';
import rocketApi from '../../../../api/rocket-api-1.0.0';
import ReactMapboxGl, { Layer, Feature, Marker, Popup } from "react-mapbox-gl";



class Coordinates {
    constructor(id, lat, long) {
        this.id = id,
            this.lat = lat,
            this.long = long
    }
}

class capsuleLaunchpads {
    constructor (id, fullname, status, location, vehicles_launched, details) {
        this.id = id,
        this.fullname = fullname,
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
            visible: false
        }
    }

    componentDidMount = () => {
        this.retrieveLaunchpads();        

    }

    retrieveLaunchpads = () => {
        rocketApi.searchLaunchpads()
            .then((listOfLaunchpads) => {
                this.props.setLaunchpads(listOfLaunchpads)

            })
    }

    retrieveCapsuleLaunchpads = () => {
        const capsuleLaunchpads = new capsuleLaunchpads('caps','El Bolson Space Launch Complex','active',{name:'El Bolson',region:'Argentina',latitude:-41.983384,longitude:-71.5728385},['Dragon 1','Dragon 2','Crew Dragon'],'Argentina Space Department historic launch pad that launched most of the Saturn V and Space Shuttle missions. Initially for Falcon Heavy launches, it is now launching all of SpaceX east coast missions due to the damage from the AMOS-6 anomaly. After SLC-40 repairs are complete, it will be upgraded to support Falcon Heavy, a process which will take about two months. In the future it will launch commercial crew missions and the Interplanetary Transport System.')
        return capsuleLaunchpads
    }

    matchRocket = (vehicle, launchpadsList) => {
        let launchpadsRocket = []
        for (let i = 0; i < launchpadsList.length; i++) {
            for (let j = 0; j < launchpadsList[i].vehicles_launched.length; j++) {
                if (vehicle == launchpadsList[i].vehicles_launched[j]) {
                    launchpadsRocket.push(new Coordinates(launchpadsList[i].id, launchpadsList[i].location.latitude, launchpadsList[i].location.longitude))
                }
            }

        }
        return launchpadsRocket
    }

    setCenter(coords) {
        return [coords[0].long, coords[0].lat]
    }



    render() {

        const Map = ReactMapboxGl({
            accessToken: "pk.eyJ1Ijoicm9iZXJ0dmVyYSIsImEiOiJjamRrZDNpYmYwdWF4MzNwMmhwdWVwOWkyIn0.d5enXKznUZ7RdQnbkxFJTg",
        });

        const show = () => {
            this.setState({ visible: true })
        }

        const cLaunchpads = this.retrieveCapsuleLaunchpads()

        if (this.props.capsuleId) {
            let markers = [cLaunchpads.location.longitude,cLaunchpads.location.latitude]
        } else {
            let markers = this.matchRocket(this.props.rocketId, this.props.launchpads)
        }
        

        return (

            <section className="container section-select mt-5">
                <h1 className="text-white">Departures information</h1>
                <div className="card mt-4">
                    <div className="card-body">
                        <div className="container">
                            <div className="row">
                                <div className="no-padding col-sm-12 col-md-12 col-lg-12" id="map">
                                    {(this.props.launchpads.length) ?
                                        <Map
                                            style="mapbox://styles/mapbox/streets-v9"
                                            containerStyle={{
                                                height: "60vh",
                                                width: "100%"
                                            }}
                                            center={this.setCenter(this.matchRocket('Falcon 9', this.props.launchpads))}
                                            zoom={[3]}
                                        >
                                            {markers.map(marker =>
                                                <Marker
                                                    coordinates={[marker.long, marker.lat]}
                                                    anchor="bottom"
                                                    onClick={e => {
                                                        e.preventDefault()
                                                        show()
                                                    }}
                                                >
                                                    <img src='http://www.worldofbuzz.com/wp-content/uploads/2016/11/rocket-2.png' />
                                                </Marker>
                                            )}

                                            {/* {this.state.visible?
                                            <Popup
                                                coordinates={}
                                            >
                                                <h1>Popup</h1>
                                            </Popup>
                                            :null} */}
                                        </Map>
                                        :
                                        undefined
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Userdata />
            </section>


        )


    }

}

export default Departures;