import React, { Component } from 'react';
import './vehicles.css';

import Departures from './departures/departures'

class Rockets extends Component {

    render() {
        return (
            <Departures setLaunchpads={this.props.setLaunchpads} launchpads = {this.props.launchpads}/>
        )
    }

}

export default Rockets;


