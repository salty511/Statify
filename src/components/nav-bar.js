import React, { Component } from "react"
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render(){
        return(
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Statify</a>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/">
                                    <a className="nav-link" href="#">Login</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/main">
                                    <a className="nav-link" href="#">Main</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about">
                                    <a className="nav-link" href="#">About</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar