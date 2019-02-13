import React, { Component } from "react"

class AudioFeatureCard extends Component {
    render() {
        return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-info">{this.props.title}</h5>
                    <p>{this.props.desc}</p>
                    <h7 className="card-subtitle text-success">Short Term</h7>
                    <ul>
                        <li>Mean: {this.props.shortTerm}</li>
                    </ul>
                    <h7 className="card-subtitle text-success">Medium Term</h7>
                    <ul>
                        <li>Mean: {this.props.mediumTerm}</li>
                    </ul>
                    <h7 className="card-subtitle text-success">Long Term</h7>
                    <ul>
                        <li>Mean: {this.props.longTerm}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default AudioFeatureCard