import React, { Component } from "react";
import "./App.css";
import UserInfo from "./components/user-info";
import TimeFrameButtons from './components/time-frame-buttons';
import GenreChart from './components/pie-chart';
import AudioFeaturesChart from './components/radar-chart';
import Album from "./components/albums";
import { defaults } from 'react-chartjs-2';

defaults.global.legend.labels.fontColor = "#EBEBEB";
let fakeServerData = {
  user: {
    userName: "Isaac",
    profileImage: "https://profile-images.scdn.co/images/userprofile/default/e2494c401e80df70de5ced15808aedd3347a8d19"
  },
  topArtists: [
    {artistName: "", genre: ""},
    {artistName: "", genre: ""}
  ],
  topTracks: [
    {albumName: "Crush", trackName: "Crush", artists: ["Tessa Violet"], image: "https://i.scdn.co/image/91a6e39aa1be0230f06b7d8c640e562175dfec03"},
    {albumName: "Hotel Room", trackName: "Hotel Room", artists: ["Felly"], image: "https://i.scdn.co/image/35fb63e6d40c261a874871c72ba04ace4b1e76cf"},
    {albumName: "Bobby Tarantino II", trackName: "Warm it Up", artists: ["Logic", "Young Sinatra"], image: "https://i.scdn.co/image/f0a1aec5e93f6487b19ae179d323813768c8545b"},
    {albumName: "Telefone", trackName: "Diddy Bop", artists: ["Noname"], image: "https://i.scdn.co/image/9f2bf647257bec75bc3981c4438049aac7c50dcb"},
  ],
  audioFeatures: [
    {danceability: 10, loudness: 2, instrumentalness: 4, energy: 5, acousticness: 7},
    {danceability: 6, loudness: 3, instrumentalness: 8, energy: 9, acousticness: 5},
    {danceability: 7, loudness: 5, instrumentalness: 6, energy: 2, acousticness: 5},
    {danceability: 8, loudness: 10, instrumentalness: 9, energy: 7, acousticness: 2},
  ]
}

class App extends Component {
  constructor(){
    super()
    this.state = {serverData: {}}
  }

  componentDidMount() {
    this.setState({serverData: fakeServerData})
  }
  
  render() {
    return (
      <div className="App">
        <div className="container" style={{"padding-top": "10px"}}>
          <h1 style={{"font-size": "50px"}}>Statify</h1>  
          <TimeFrameButtons />
        </div>
        <div className="container" style={{"padding-bottom": "30px", "padding-top": "30px"}}>
          <div className="row">
            <div className="col">
              {this.state.serverData.user &&
              <UserInfo userDetails={this.state.serverData.user} />}
            </div>
            <div className="col">
              <GenreChart />
            </div>
            <div className="col">
              <AudioFeaturesChart />
            </div>
          </div>
        </div>
        <div className="container" style={{"padding-bottom": "10px"}}>
          <h2>Top Tracks</h2>
          <div className="row" style={{"padding-top": "10px"}}>
            {this.state.serverData.topTracks &&
            this.state.serverData.topTracks.map(track => {
              return (<div className="col"><Album trackInfo={track}/></div>)
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
