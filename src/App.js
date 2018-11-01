import React, { Component } from "react";
import "./App.css";
import UserInfo from "./components/user-info";
import TimeFrameButtons from './components/time-frame-buttons';
import GenreChart from './components/pie-chart';
import AudioFeaturesChart from './components/radar-chart';
import Recommendations from "./components/recommendations";
import { defaults } from 'react-chartjs-2';

defaults.global.legend.labels.fontColor = "#EBEBEB";
let fakeServerData = {
  user: {
    userName: 'Isaac'
  },
}

class App extends Component {
  constructor(){
    super()
    this.state = {serverData: {}}
  }

  componentDidMount(){
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
              <UserInfo userName={this.state.serverData.user &&
              this.state.serverData.user.userName}/>
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
          <h2>Recommendations</h2>
          <p />
          <Recommendations />
        </div>
      </div>
    );
  }
}

export default App;
