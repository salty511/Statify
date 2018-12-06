import React, { Component } from "react";
import Sound from "react-sound"

class Album extends Component {
    constructor() {
        super()
        this.state = {}
        this.onClickHandler = this.onClickHandler.bind(this)
    }

    onClickHandler() {
        console.log("hello")
        this.setState({playStatus: Sound.status.PLAYING})
    }

    render(){
        console.log("album render")
        console.log(JSON.stringify(this.state))
        return (
            <div style={{paddingBottom: "10px"}}>
                <Sound 
                url={this.props.trackInfo.previewURL} 
                playStatus={this.state.playStatus} />
                <div className="card">
                    <img className="card-img-top" src={this.props.trackInfo.image} alt="Card cap" /> 
                    <div className="card-body">
                        <h5 className="card-title">{this.props.trackInfo.albumName}</h5>
                        <h6 className="card-subtitle">{this.props.trackInfo.artistName} - {this.props.trackInfo.trackName}</h6>
                        <button onClick={this.onClickHandler}>Preview</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Album;