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

class Departures extends Component {

    constructor(props) {
        super(props)

        this.state = {
            visible: false,
            launchpadID: ''
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

    matchRocket = (rocket, launchpadsList) => {
        let launchpadsRocket = []
        for (let i = 0; i < launchpadsList.length; i++) {
            for (let j = 0; j < launchpadsList[i].vehicles_launched.length; j++) {
                if (rocket == launchpadsList[i].vehicles_launched[j]) {
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

        // const show = () => {
        //     this.setState({ visible: true })
        // }

        // function throwPopup(long, lat) {

        // }


        let markers = this.matchRocket('Falcon 9', this.props.launchpads)

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
                                            <Layer
                                                type="symbol"
                                                id="marker"
                                                layout={{ "icon-image": "rocket-15" }}
                                            >
                                                {markers.map(marker =>
                                                    <Feature
                                                        key={marker.id}
                                                        coordinates={[marker.long, marker.lat]}
                                                        onClick={() => { this.setState({ launchpadID: marker.id }) }}
                                                        onMouseEnter={() => {
                                                            return (<Popup
                                                                coordinates={[marker.long, marker.lat]}
                                                                anchor='top'
                                                            >
                                                                <h1>Popup</h1>
                                                            </Popup>)
                                                        }
                                                        }
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
                <Userdata />
            </section>


        )


    }

}

export default Departures;