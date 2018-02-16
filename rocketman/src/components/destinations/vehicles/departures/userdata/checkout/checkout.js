import React, { Component } from 'react';
import './checkout.css';

import Purchaseok from './purchaseok/purchaseok';
import { NavLink } from 'react-router-dom'

class Checkout extends Component {

    render() {

        return (
            <div>
            <section className="section-summary container mt-5">
                <h1 className="text-white">Checkout Information</h1>
                <section className="section-summary-info mt-4">
                    <div className="section-summary-box">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <span>Destiny</span>
                                <h3>{this.props.destination}</h3>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <span>Vehicle name</span>
                                <h3>{this.props.vehicleID}</h3>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <span>Date</span>
                                <h3>27/08/2020</h3>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <span>type:</span>
                                <h3>{this.props.type}</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <h1 className="text-white mt-4">User Information</h1>
                <section className="section-summary-info mt-4">
                    <div className="section-summary-box">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <span>Name</span>
                                <h3>{this.props.userInfo.name}</h3>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <span>Surname</span>
                                <h3>{this.props.userInfo.lastname}</h3>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <span>Gender</span>
                                <h3>{this.props.userInfo.gender}</h3>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <span>City</span>
                                <h3>{this.props.userInfo.address}</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <h1 className="text-white mt-4">Flight Information</h1>
                <section className="section-summary-info mt-4">
                    <div className="section-summary-box">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <span>Launchpad</span>
                                <h3>{this.props.launchpadName}</h3>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <span>Region</span>
                                <h3>{this.props.locationRegion}</h3>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <span>Location</span>
                                <h3>{this.props.locationName}</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="mt-4 container mb-4 section-price">
                <h1 className="text-center p-4">Price: <span>120.000€</span></h1>
            </section>


            <div className="section-button section-summary-button container-full">
                <NavLink onClick={this.sendInfo} className="btn btn-primary btn-lg btn-block" to="/purchaseok">Buy & Flight!</NavLink>
                <div className="shine" />
            </div>
            </div>

        )
    }

}

export default Checkout;