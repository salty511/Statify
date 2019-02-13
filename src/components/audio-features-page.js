import React, { Component } from "react"
import AudioFeatureCard from "./audio-feature-card"

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
                {this.props.shortTerm ?
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <AudioFeatureCard 
                                title="Valence"
                                desc="Valence represents the overall mood of a track (happy/sad) as a value from 0.0 to 1.0, 0 being sad and 1 being happy"
                                shortTerm={shortTermMeans.valence.toFixed(2)}
                                mediumTerm={mediumTermMeans.valence.toFixed(2)}
                                longTerm={longTermMeans.valence.toFixed(2)}
                            />
                        </div>
                        <div className="col-3">
                            <AudioFeatureCard 
                                title="Danceability"
                                desc="Danceability describes how suitable a track is for dancing based on tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable"
                                shortTerm={shortTermMeans.danceability.toFixed(2)}
                                mediumTerm={mediumTermMeans.danceability.toFixed(2)}
                                longTerm={longTermMeans.danceability.toFixed(2)}
                            />
                        </div>
                        <div className="col-3">
                            <AudioFeatureCard 
                                title="Energy"
                                desc="Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy."
                                shortTerm={shortTermMeans.energy.toFixed(2)}
                                mediumTerm={mediumTermMeans.energy.toFixed(2)}
                                longTerm={longTermMeans.energy.toFixed(2)}
                            />
                        </div>
                        <div className="col-3">
                            <AudioFeatureCard 
                                title="Loudness"
                                desc="The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track."
                                shortTerm={shortTermMeans.loudness.toFixed(2)}
                                mediumTerm={mediumTermMeans.loudness.toFixed(2)}
                                longTerm={longTermMeans.loudness.toFixed(2)}
                            />
                        </div>
                    </div>
                </div> : <p className="text-warning">Error: can't get server data, you may not be logged in or auth token has expired, try loggin in again</p>}
            </div>
        )
    }
}

export default AudioFeaturesPage