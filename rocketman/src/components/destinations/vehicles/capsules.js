import React, { Component } from 'react';
import './vehicles.css';
import rocketApi from '../../../api/rocket-api-1.0.0'
import { NavLink } from 'react-router-dom'

class Capsules extends Component {

    constructor(props) {
        super(props)

        this.state = {
            visibleContinue: false,
        }
    }


    componentDidMount = () => {
        this.retrieveCapsules();
    }
    retrieveCapsules = () => {
        rocketApi.searchCapsules().then(capsules => {

            capsules = capsules.map((capsule) => {
                if (capsule.images = 'undefined') {
                    switch (capsule.id) {
                        case "dragon1":
                            capsule.images = {
                                url: "https://cnet4.cbsistatic.com/hub/i/r/2014/05/30/9c0cebf4-af4b-4f49-a507-2733d1bdd0cb/resize/1170xauto/e1195ce32b691ece82b4a530d6f2a04a/dragon-1-of-12.jpg"
                            }
                            break;
                        case "dragon2":
                            capsule.images = {
                                url: "http://www.tobiasbuckell.com/wordpress/images//2014/06/NewImage.png"
                            }
                            break;
                        case "crewdragon":
                            capsule.images = {
                                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/SpaceX_Dragon_v2_Pad_Abort_Vehicle_%2816661791299%29.jpg/1200px-SpaceX_Dragon_v2_Pad_Abort_Vehicle_%2816661791299%29.jpg"
                            }
                            break;
                        default:
                            capsule.images = {
                                url: "https://vignette.wikia.nocookie.net/dragonball/images/d/da/D0.0.1.2_dragon_ball_items_capsule_nave.jpg/revision/latest?cb=20130731005342&path-prefix=es"
                            }
                    }
                }
                return capsule
            })

            this.props.setCapsules(capsules)

        })
    }

    retrieveCapsule = (e,type) => {
        var capsuleName = e.target.getAttribute('data-capsule')
        this.props.setCapsule(capsuleName)

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
                {this.props.capsules.map((capsule) =>
                    <div key={capsule.id} className="card mt-4">
                        <div className="card-body">

                            <label className="radio-button">
                                <input onClick={(e)=>{this.retrieveCapsule(e,'capsule')}} data-capsule={capsule.name} type="radio" className="option-input radio" name="example" />
                            </label>


                            <h4 className="card-title">{capsule.name}</h4>
                            <div className="container">
                                <div className="row">
                                    <div className="no-padding col-sm-12 col-md-3 col-lg-3">
                                        <img className="img-fluid" src={capsule.images.url} alt="rocket/capsule" />
                                    </div>
                                    <div className="info col-sm-12 col-md-9 col-lg-9">
                                        <div className="container">
                                            <div className="row">
                                                <p className="card-text col-12">Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle, and SpaceX is developing a crewed version called the Dragon V2 (formerly DragonRider).</p>
                                                <div className="container col-12 mb-3">
                                                    <div className="row">
                                                        <div className="col-6 col-sm-6 col-md-4 col-lg-4">
                                                            <i className="icon ion-android-arrow-dropup-circle" />
                                                            <span>Height:</span>
                                                            <br />
                                                            <span className="main-info-card">{capsule.height_w_trunk.meters} m</span>
                                                        </div>
                                                        <div className="col-6 col-sm-6 col-md-4 col-lg-4">
                                                            <i className="icon ion-ios-ionic-outline" />
                                                            <span>Diameter:</span>
                                                            <br />
                                                            <span className="main-info-card">{capsule.diameter.meters} m</span>
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                                            <i className="icon ion-bag" />
                                                            <span>Weight:</span>
                                                            <br />
                                                            <span className="main-info-card">{capsule.launch_payload_mass.kg} kg</span>
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
                                                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '100%' }} aria-valuemax={100}>
                                                            100%
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

export default Capsules;


