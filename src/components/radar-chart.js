import React, { Component } from "react";
import { Radar } from 'react-chartjs-2';

class AudioFeaturesChart extends Component {
    calculateMeanValues() {
        let meanValues = {}
        // Loop over each dataset in array, then over each property in dataset
        for(let dataSet of this.props.audioFeaturesData) {
            let x=0
            for(let [label, value] of Object.entries(dataSet)) {
                x = x+1
                if(x===6) {
                    break
                }
                // If we dont already have an entry for audiofeature create one
                if (!meanValues.hasOwnProperty(label)) meanValues[label] = 0
                // Add value / number of datasets to entry
                meanValues[label] += (value / this.props.audioFeaturesData.length)
            }
        }
        return(meanValues)
    }

    render() {
        // Get mean values & setup data arrays
        let meanAudioFeatureValues = this.calculateMeanValues()
        let audioFeatureLabels = []
        let audioFeatureValues = []
        // Mangle data into arrays
        for (let [label, value] of Object.entries(meanAudioFeatureValues)) {
            let rounded = (value*10).toFixed(2)
            audioFeatureLabels.push(label)
            audioFeatureValues.push(rounded)
        }
        const options = {
            scale: {
                ticks: {
                    backdropColor: '#2B3E50',
                },
                pointLabels: {
                    fontColor: "#EBEBEB",
                    fontSize: "6px"
                }
            }
        }
        const data = {
            labels: audioFeatureLabels,
            datasets: [
              {
                label: 'Average Audio Feature Values',
                backgroundColor: 'rgba(33, 33, 33, 0.3)',
                borderColor: 'rgb(35, 73, 178)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: audioFeatureValues
              },
            ]
          };
        return (
            <div style={{display: "inline-block"}}>
                <Radar data={data} height={250} width={300} options={options}/>
            </div>
        );
    }
}

export default AudioFeaturesChart;