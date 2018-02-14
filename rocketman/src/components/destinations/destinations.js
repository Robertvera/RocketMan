import React, { Component } from 'react';
import './destinations.css';

import Capsules from './vehicles/capsules';
import Rockets from './vehicles/rockets';

class Destinations extends Component {


    render() {
        return (

              <Rockets setRockets = {this.props.setRockets} rockets ={this.props.rockets}  />
        
        )
    }
}

export default Destinations;