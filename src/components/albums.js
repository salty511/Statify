import React, { Component } from "react"
import "./albums-style.css"

class Album extends Component {
  render() {
    return (
      <div style={{ paddingBottom: "10px" }}>
        <div className="card">
          <div className="img-preview-button">
            <img className="card-img-top" src={this.props.trackInfo.image} alt="Card cap" />
            <div className="preview-button">
              <span
                className="btn-success albumButton"
                style={{ padding: "10px" }}
                onClick={() => {
                  this.props.onClickHandler(this.props.trackInfo.previewURL)
                }}
              >
                Preview
              </span>
              <p style={{ padding: "10px" }}></p>
              <span
                className="btn-success albumButton"
                style={{ padding: "10px" }}
                onClick={() => {
                  this.props.onClickOpenInSpotify(this.props.trackInfo.trackId)
                }}
              >
                Open Spotify
              </span>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{this.props.trackInfo.albumName}</h5>
            <h6 className="card-subtitle">
              {this.props.trackInfo.artistName} - {this.props.trackInfo.trackName}
            </h6>
          </div>
        </div>
      </div>
    )
  }
}

export default Album
