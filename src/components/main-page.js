import React, { Component } from "react";
import UserInfo from "./user-info";
import TimeFrameButtons from './time-frame-buttons';
import GenreChart from './pie-chart';
import AudioFeaturesChart from './radar-chart';
import Album from "./albums";
import "../App.css"
import queryString from "query-string"

let fakeServerData = {
  user: {
    userName: "Isaac",
    profileImage: "https://profile-images.scdn.co/images/userprofile/default/e2494c401e80df70de5ced15808aedd3347a8d19"
  },
  topArtists: [
    {artistName: "Noname", genres: ["escape room", "hip hop", "indie r&b", "rap", "underground hip hop"]},
    {artistName: "Rex Orange County", genres: ["indie r&b"]},
    {artistName: "Yeek", genres: ["indie r&b", "lo-fi beats"]},
    {artistName: "Isaiah Rashad", genres: ["hip hop", "indie r&b", "pop rap", "rap", "southern hip hop", "underground hip hop"]},
    {artistName: "J.I.D", genres: ["hip hop", "rap", "underground hip hop", ]},
    {artistName: "BROCKHAMPTON", genres: ["boy band", "hip hop", "indie r&b", "rap"]},
    {artistName: "JMSN", genres: ["indie r&b"]},
    {artistName: "Kendrick Lamar", genres: ["consious hip hop", "hip hop", "pop rap", "rap", "west coast rap"]},
    {artistName: "King Krule", genres: ["art pop", "indie r&b", "indie rock", "indietronica", "neo-psychedelic"]},
    {artistName: "Ravyn Lenae", genres: ["escape room", "indie r&b", "neo soul", "r&b"]}
  ],
  topTracks: [
    {albumName: "Crush", trackName: "Crush", artists: ["Tessa Violet"], image: "https://i.scdn.co/image/91a6e39aa1be0230f06b7d8c640e562175dfec03"},
    {albumName: "Hotel Room", trackName: "Hotel Room", artists: ["Felly"], image: "https://i.scdn.co/image/35fb63e6d40c261a874871c72ba04ace4b1e76cf"},
    {albumName: "Bobby Tarantino II", trackName: "Warm it Up", artists: ["Logic", "Young Sinatra"], image: "https://i.scdn.co/image/f0a1aec5e93f6487b19ae179d323813768c8545b"},
    {albumName: "Telefone", trackName: "Diddy Bop", artists: ["Noname"], image: "https://i.scdn.co/image/9f2bf647257bec75bc3981c4438049aac7c50dcb"},
  ],
  audioFeatures: [
    {Danceability: 10, Loudness: 7, Energy: 1, Instrumentalness: 8, Acousticness: 9},
    {Danceability: 6, Loudness: 6, Energy: 4, Instrumentalness: 9, Acousticness: 2},
    {Danceability: 7, Loudness: 5, Energy: 6, Instrumentalness: 6, Acousticness: 1},
    {Danceability: 8, Loudness: 10, Energy: 3, Instrumentalness: 7, Acousticness: 2},
  ]
}


class MainPage extends Component {
    constructor(){
      super()
      this.state = {
      }
    }
  
    componentDidMount() {
      let parsed = queryString.parse(window.location.search)
      let accessToken = parsed.access_token
      
      fetch("https://api.spotify.com/v1/me", {
        headers: {"Authorization": "Bearer " + accessToken}
      }).then((response) => {
        return(response.json())
      }).then((data) => {
        return(
          this.setState({
            user: {
              userName: data.display_name,
              profileImage: data.images[0].url,
              followers: data.followers.total
            }
          })
        )
      })
    }
    
    render() {
      console.log(this.state)
      return (
        <div className="App">
          <h3 style={{paddingTop: "15px"}}>Top Tracks Data</h3>
          <div className="container" style={{paddingTop: "5px"}}>
            <TimeFrameButtons />
          </div>
          <div className="container" style={{paddingBottom: "30px", paddingTop: "30px"}}>
            <div className="row">
              <div className="col" style={{paddingRight: "20px", paddingLeft: "20px"}}>
                {/* Check for user before rendering UserInfo */}
                {this.state.user &&
                <UserInfo userDetails={this.state.user} />}
              </div>
              <div className="col">
                {this.state.topArtists &&
                <GenreChart genreData={this.state.topArtists}/>}
              </div>
              <div className="col">
                {this.state.audioFeatures &&
                <AudioFeaturesChart audioFeaturesData={this.state.audioFeatures}/>}
              </div>
            </div>
          </div>
          {this.state.topTracks &&
            <div className="container" style={{paddingBottom: "10px"}}>
              <h2>Top Tracks</h2>
              <div className="row" style={{paddingTop: "10px"}}>
                {/* Check for topTracks before rendering & create Album component for each track */}
                {this.state.topTracks.map((track) => {
                  return (<div className="col"><Album trackInfo={track}/></div>)
                })}
              </div>
            </div>
          }
        </div>
      );
    }
  }
  
  export default MainPage;