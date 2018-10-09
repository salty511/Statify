import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const defaultStyle = {
      color: "white"
    }

    return (
      <div className="App">
        <h1 style={{...defaultStyle, "font-size": "54px"}}>Statify</h1>
      </div>
    );
  }
}

export default App;
