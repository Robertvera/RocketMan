import React, { Component } from 'react';
import './userdata.css';
import { NavLink } from 'react-router-dom'

class Userdata extends Component {
    constructor() {
        super()
        this.state = {
            visibleContinue: false,
            userInfo: {
                name: '',
                lastname: '',
                address: '',
                gender: ''
              }
        }
    }
    keepName = (e) => { 
        const userInfo={name: e.target.value, lastname: this.state.userInfo.lastname, address: this.state.userInfo.address, gender: this.state.userInfo.gender }
        this.setState({userInfo})
    }
    keepLastname = (e) => {
        const userInfo={name: this.state.userInfo.name, lastname: e.target.value, address: this.state.userInfo.address, gender: this.state.userInfo.gender }
        this.setState({userInfo})
    }
    keepAddress = (e) => {
        const userInfo={name: this.state.userInfo.name, lastname: this.state.userInfo.lastname, address: e.target.value, gender: this.state.userInfo.gender}
        this.setState({userInfo})
    }
    keepGender = (e) => {
        const userInfo={name: this.state.userInfo.name, lastname: this.state.userInfo.lastname, address: this.state.userInfo.address, gender: e.target.value}
        this.setState({userInfo})
    }
    
    sendInfo = () => {
        // e.preventDefault()
        let userInfo = this.state.userInfo
        this.props.setInfo(userInfo)
    }

    render() {
        return (
        <div>
        <section className="container section-select section-userdata mt-5">
            <h1 className="text-white">User Information</h1>
            <div className="card mt-4">
                <div className="card-body">
                    <div className="container">
                        <div className="row">
                            <div className="no-padding col-sm-12 col-md-3 col-lg-3">
                                <p><h5 classname="card-title">User name</h5></p>
                                <p><input type="text" placeholder="Name" id="username" onChange={this.keepName}
                                    value={this.state.query}
                                /></p>
                            </div>
                            
                            <div className="no-padding col-sm-12 col-md-3 col-lg-3">
                                <p><h5 classname="card-title">Last name</h5></p>
                                <p><input type="text" placeholder="Lastname" id="userlastname" onChange={this.keepLastname}
                                    value={this.state.query}/></p>
                            </div>
                            
                            <div className="no-padding col-sm-12 col-md-3 col-lg-3">
                                <p><h5 classname="card-title">Address</h5></p>
                                <p><input type="text" placeholder="Address" id="address" onChange={this.keepAddress}
                                    value={this.state.query} /></p>
                            </div>
                            
                            <div className="no-padding col-sm-12 col-md-3 col-lg-3">
                                <p><h5 classname="card-title">Gender</h5></p>
                                <p><input type="text" placeholder="Gender" id="gender" onChange={this.keepGender} 
                                    value={this.state.query}/></p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
            <div className="section-button container-full">
                <NavLink onClick={this.sendInfo} className="btn btn-primary btn-lg btn-block" to="/checkout">Continue</NavLink>
                <div className="shine" />
            </div>
        
        </div>
        )
    }
}
export default Userdata;


