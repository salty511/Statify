import React, { Component } from "react"
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render(){
        return(
            <div className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Statify</a>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/">
                                    <span className="nav-link" href="#">Login</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/main">
                                    <span className="nav-link" href="#">Main</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about">
                                    <span className="nav-link" href="#">About</span>
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