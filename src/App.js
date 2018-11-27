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

    if(accessToken) {
      //Get UserInfo data
      if(!this.state.user) {
        console.log("Making user api call")
        fetch("https://api.spotify.com/v1/me", {
          headers: {"Authorization": "Bearer " + accessToken}
        }).then((response) => {
          return(response.json())
        }).then((data) => {
          console.log("User call complete")
          this.setState({
            user: {
              userName: data.display_name,
              profileImage: data.images[0] ? data.images[0].url : "https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image",
              followers: data.followers.total
            }
          })
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
          console.log("topTracks call complete")
          this.setState({topTracks: data.items.map((trackObject) => {
            return({
              albumName: trackObject.album.name, 
              trackName: trackObject.name, 
              artistName: trackObject.artists[0].name, 
              image: trackObject.album.images[1].url,
              trackId: trackObject.id
            })
          })})
        }).then(() => { // Get audioFeatures data
          console.log("Making audio features call")
          return(
            fetch("https://api.spotify.com/v1/audio-features/?ids=" +
              //track id query params
              this.state.topTracks.map((trackObject) => {
                return(trackObject.trackId)
              }).join(), {
                headers: {"Authorization": "Bearer " + accessToken}
              } //headers in the api call (auth token)
            ).then((response) => { //function ran when fetch() promise resolves
              console.log("Audio features call complete")
              return(response.json()) 
            }).then((data) => { //console log json data when json() promise resolves
              console.log(data)
              this.setState({audioFeatures: data.audio_features.map((audioFeatureObject) => {
                return({
                  danceability: audioFeatureObject.danceability,
                  energy: audioFeatureObject.energy,
                  speechiness: audioFeatureObject.speechiness,
                  instrumentalness: audioFeatureObject.instrumentalness
                })
              })})
            })
          )
        })
      }

      // Get topArtists data
      if(!this.state.topArists) {
        console.log("Making topArtists call")
        fetch("https://api.spotify.com/v1/me/top/artists", {
          headers: {"Authorization": "Bearer " + accessToken}
        }).then((response) => {
          console.log("topArtists call complete")
          return(response.json())
        }).then((data) => {
          this.setState({topArtists: (data.items.map((artistObject) => {
            return({
              artistName: artistObject.name,
              genres: artistObject.genres
            })
          }))})
        })
      }
    }
  }

  render() { 
    console.log(this.state)
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/main" render={(props) => {
            return(
              <MainPage {...props} 
              user={this.state.user && this.state.user}
              topTracks={this.state.topTracks && this.state.topTracks}
              audioFeatures={this.state.audioFeatures}
              topArtists={this.state.topArtists} />
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
