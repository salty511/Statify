import React, { Component } from "react";
import "./App.css";
import UserInfo from "./components/user-info";
import TimeFrameButtons from './components/time-frame-buttons';
import GenreChart from './components/pie-chart';
import AudioFeaturesChart from './components/radar-chart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p />
        <h1>Statify</h1>
        <div className="container" style={{width:"20%", float: "left"}}>
          <UserInfo />
        </div>
      </div>
    );
  }
}

export default App;
