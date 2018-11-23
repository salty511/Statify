import React, { Component } from "react"
import MainPage from "./components/main-page.js"
import { defaults } from 'react-chartjs-2'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from "./components/nav-bar"
import LoginPage from "./components/login-page";
import queryString from "query-string"

defaults.global.legend.labels.fontColor = "#EBEBEB";

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search)
    let accessToken = parsed.access_token
    this.setState({accessToken: accessToken})

    //Get UserInfo data
    if(accessToken) {
      if(!this.state.user) {
        console.log("Making user api call")
        fetch("https://api.spotify.com/v1/me", {
          headers: {"Authorization": "Bearer " + accessToken}
        }).then((response) => {
          return(response.json())
        }).then((data) => {
          return(
            this.setState({
              user: {
                userName: data.display_name,
                profileImage: data.images[0] ? data.images[0].url : "https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image",
                followers: data.followers.total
              }
            })
          )
        })
      }

      //Get TopTracks data
      if(!this.state.topTracks) {
        console.log("Making topTracks api call")
        fetch("https://api.spotify.com/v1/me/top/tracks", {
          headers: {"Authorization": "Bearer " + accessToken}
        }).then((response) => {
          return(response.json())
        }).then((data) => {
          return(
            this.setState({topTracks: data.items.map((trackObject) => {
              return({
                albumName: trackObject.album.name, 
                trackName: trackObject.name, 
                artistName: trackObject.artists[0].name, 
                image: trackObject.album.images[1].url,
                trackId: trackObject.id
              })
            })})
          )
        }).then(() => {
          return(
            // fetch("https://api.spotify.com/v1/audio-features/?ids=" +
              console.log(this.state.topTracks.map((trackObject) => {
                return(trackObject.trackId)
              }).join()
            )
          )
        })
      }
    }
  }

  render() { 
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/main" render={(props) => {
            return(
              <MainPage {...props} 
              user={this.state.user && this.state.user}
              topTracks={this.state.topTracks && this.state.topTracks} />
            )
          }}/>
          <Route exact path="/" render={(props) => {
            return(
              <LoginPage {...props}
              accessToken={this.state.accessToken && this.state.accessToken} />
            )
          }}/>
        </div>
      </Router>
    );
  }
}

export default App;
