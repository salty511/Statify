import React, { Component } from "react"

class AudioFeaturesPage extends Component {
    getHighAndLowValues() {
        
    }

    calculateMeanValues(timeFrame) {
        let MeanValues = {}
        // Loop over each dataset in array, then over each property in dataset
        for(let dataSet of timeFrame) {
            for(let [label, value] of Object.entries(dataSet)) {
                // If we dont already have an entry for audiofeature create one
                if (!MeanValues.hasOwnProperty(label)) MeanValues[label] = 0
                // Add value / number of datasets to entry
                MeanValues[label] += (value / this.props.shortTerm.audioFeatures.length)
            }
        }
        return(MeanValues)
    }

    render() {
        let shortTermMeans = this.props.shortTerm && this.calculateMeanValues(this.props.shortTerm.audioFeatures)
        let mediumTermMeans = this.props.mediumTerm && this.calculateMeanValues(this.props.mediumTerm.audioFeatures)
        let longTermMeans = this.props.longTerm && this.calculateMeanValues(this.props.longTerm.audioFeatures)
        return(
            <div className="container" style={{textAlign: "left"}}>
                <h3 style={{paddingTop: "20px"}}>Audio Features</h3>
                <p>Here, you can see all the audio features Spotify provides in raw form, all this data is collated over your top 50 tracks</p>
                {this.props.shortTerm &&
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-info">Valence</h5>
                                    <p>Valence represents the overall mood of a track (happy/sad) as a value from 0.0 to 1.0, 0 being sad and 1 being happy</p>
                                    <h7 className="card-subtitle text-success">Short Term</h7>
                                    <ul>
                                        <li>Mean: {shortTermMeans.valence.toFixed(2)}</li>
                                        <li>Saddest track: </li>
                                        <li>Happiest track: </li>
                                    </ul>
                                    <h7 className="card-subtitle text-success">Medium Term</h7>
                                    <ul>
                                        <li>Mean: {mediumTermMeans.valence.toFixed(2)}</li>
                                        <li>Saddest track: </li>
                                        <li>Happiest track: </li>
                                    </ul>
                                    <h7 className="card-subtitle text-success">Long Term</h7>
                                    <ul>
                                        <li>Mean: {longTermMeans.valence.toFixed(2)}</li>
                                        <li>Saddest track: </li>
                                        <li>Happiest track: </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}

export default AudioFeaturesPage