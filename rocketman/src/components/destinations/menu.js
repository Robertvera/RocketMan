import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

function Menu() {
    return<div> <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">
            <img src="./images/rocketman_imagotipo_blue.svg" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about-us">About us</NavLink>
                </li>
            </ul>
        </div>
    </nav>
        <section className="section-logo text-center w-100">
            <div className="row">
                <div className="col">
                    <img className="mb-4" src="./images/rocketman_logo_blue.svg" />
                    <div>
                        <span className="text-main-color subsection-subtitle pt-4">we make great steps for humanity</span>
                    </div>
                </div>
            </div>
        </section>
        </div>

}

export default Menu;