import React, { Component } from "react";
import Sound from "react-sound"
import "../App.css"

class Album extends Component {
    constructor() {
        super()
        this.state = {playStatus: Sound.status.STOPPED}
        this.onClickHandler = this.onClickHandler.bind(this)
    }

    onClickHandler() {
        switch(this.state.playStatus) {
            case Sound.status.STOPPED: 
                this.setState({playStatus: Sound.status.PLAYING})
                break
            case Sound.status.PLAYING:
                this.setState({playStatus: Sound.status.STOPPED})
                break
        }
    }   

    render(){
        console.log("album render")
        console.log(JSON.stringify(this.state))
        return (
            <div style={{paddingBottom: "10px"}}>
                <Sound 
                    url={this.props.trackInfo.previewURL} 
                    playStatus={this.state.playStatus} 
                />
                <div className="card">
                    <div className="img-preview-button">
                        <img className="card-img-top" src={this.props.trackInfo.image} alt="Card cap"/> 
                        <div class="preview-button">
                            <span className="btn-success" onClick={this.onClickHandler}>Play/Pause</span>
                        </div>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.trackInfo.albumName}</h5>
                        <h6 className="card-subtitle">{this.props.trackInfo.artistName} - {this.props.trackInfo.trackName}</h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default Album;