import React, { Component } from "react";

class Album extends Component {
    render(){
        return (
            <div style={{paddingBottom: "10px"}}>
                <div className="card">
                    <img className="card-img-top" src={this.props.trackInfo.image} alt="Card cap" /> 
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