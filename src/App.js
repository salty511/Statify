import React, { Component } from "react"
import MainPage from "./components/main-page.js"
import { defaults } from 'react-chartjs-2'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from "./components/nav-bar"
import LoginPage from "./components/login-page";

defaults.global.legend.labels.fontColor = "#EBEBEB";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/main" component={MainPage} />
          <Route exact path="/" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default App;
