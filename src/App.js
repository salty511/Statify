import React, { Component } from "react";
import "./App.css";
import UserInfo from "./components/user-info";
import TimeFrameButtons from './components/time-frame-buttons';
import GenreChart from './components/pie-chart';
import AudioFeaturesChart from './components/radar-chart';
import Album from "./components/albums";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p />
        <div className="container">
          <h1 style={{"font-size": "50px"}}>Statify</h1>
          <TimeFrameButtons />
        </div>
        <div className="container" style={{height:"300px"}}>
          <UserInfo />
          <GenreChart />
          <AudioFeaturesChart />
        </div>
        <div className="container">
          <h2>Recommendations</h2>
          <Album />
          <Album />
          <Album />
          <Album />
        </div>
      </div>
    );
  }
}

export default App;
