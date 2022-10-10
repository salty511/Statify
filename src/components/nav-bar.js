import React, { Component } from "react"
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render(){
        return(
            <div className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <span className="navbar-brand">Statify</span>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/">
                                    <span className="nav-link">Login</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/main">
                                    <span className="nav-link">Main</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about">
                                    <span className="nav-link">About</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <button type="button" to="/" className="btn btn-outline-danger btn-sm" onClick={() => this.props.onClickLogout()}>
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar