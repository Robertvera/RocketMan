import React, { Component } from 'react';
import './purchaseok.css';

function Purchaseok() {
    return <div className="section-purchase-ok container mt-5">
        <h1 className="text-center text-white">Your purchase has been <b>successfully</b> made</h1>
        <div className="row justify-content-center mt-3 mb-3">
            <div className="col-sm-10 col-md-10 text-center">
                <i className="icon ion-planet" />
                <div className="rocket-icon"></div>
            </div>
        </div>
        <p className="text-center"> We hope you enjoy your space flight and remember ...</p>
        <p className="text-center"><i>"small step for man great step for humanity"</i></p>
        <p className="text-center text-white"><a href="#"><ins>return to home</ins></a></p>
    </div>

}


export default Purchaseok;