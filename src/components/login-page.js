import React, { Component } from "react"

class LoginPage extends Component {
    render(){
        let loginURL = process.env.loginPageUrl
        return(
            <div className="container" style={{paddingTop: "30px", textAlign: "left"}}>
                <h1 className="display-3">Welcome to Statify</h1>
                <p className="lead">This website provides interesting statistics specific to your Spotify account</p>
                <hr className="my-4" />
                <p>It uses the Spotify API to access account data such as your Top Tracks & Artists, You can login to Spotify here</p>
                <p className="lead">
                    {!this.props.accessToken ?
                        <a className="btn btn-success btn-lg" href="https://statify-salt-auth.herokuapp.com/login">Login</a>
                    : <p>Already Logged in</p>}
                </p>
            </div>
        )
    }
}

export default LoginPage