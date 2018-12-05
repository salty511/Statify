import React, { Component } from "react";
import UserInfo from "./user-info";
import GenreChart from './pie-chart';
import AudioFeaturesChart from './radar-chart';
import Album from "./albums";
import "../App.css"

class MainPage extends Component {
    constructor(){
      super()
      this.state = {
        currentDataSet: "mediumTerm"
      }
      this.onClickHandler = this.onClickHandler.bind(this)
    }

    renderAlbums(dataSet) {
      let albumsToRender = dataSet.topTracks
      return(
        <div className="container">
          <div className="row">
            {albumsToRender.slice(0, 12).map((track) => {
              return (<div className="col-3 sm-2"><Album trackInfo={track}/></div>)
            })}
          </div>
          <div className="row">
            {albumsToRender.slice(12, 20).map((track) => {
              return (<div className="col-3 sm-2"><Album trackInfo={track}/></div>)
            })}
          </div>
        </div>
      )
    }

    renderInfoAndGraphs(dataSet) {
      return(
        <div className="container" style={{paddingBottom: "30px", paddingTop: "30px"}}>
          <div className="row">
            <div className="col">
              <UserInfo userDetails={dataSet.user} />
            </div>
            <div className="col">
              <GenreChart genreData={dataSet.topArtists}/>
            </div>
            <div className="col">
              <AudioFeaturesChart audioFeaturesData={dataSet.audioFeatures}/>
            </div>
          </div>
        </div>
      )
    }

    setCurrentDataSet() {
      switch(this.state.currentDataSet) {
        case "mediumTerm": 
          return(this.props.mediumTerm)
        case "shortTerm": 
          return(this.props.shortTerm)
        case "longTerm": 
          return(this.props.longTerm)
        default: break
      }
    }

    onClickHandler(timeFrame) {
      this.setState({currentDataSet: timeFrame})
    }
    
    render() {
      console.log(this.state)
      let dataSetToRender = this.setCurrentDataSet()
      return (
        <div className="App">
          <h3 style={{paddingTop: "15px"}}>Main Stats</h3>
          <div className="container" style={{paddingTop: "5px"}}>
            <div>
              <button className="btn btn-outline-info" onClick={() => this.onClickHandler("shortTerm")} style={{margin: "10px"}}>Short Term</button>
              <button className="btn btn-outline-info" onClick={() => this.onClickHandler("mediumTerm")} style={{margin: "10px"}}>Medium Term</button>
              <button className="btn btn-outline-info" onClick={() => this.onClickHandler("longTerm")} style={{margin: "10px"}}>Long Term</button>
            </div>
          </div>
          {!this.props.accessToken ? <p>Error: can't get server data, you may not be logged in or auth token has expired, try loggin in again</p> :
            <div>
              {dataSetToRender ?
                <div>
                  {this.renderInfoAndGraphs(dataSetToRender)}
                  <h3>Your Top 20 Tracks</h3>
                  <div>{this.renderAlbums(dataSetToRender)}</div>
                </div> : <p>Loading</p>}
            </div>}
        </div>
      );
    }
  }
  
  export default MainPage;