import React, { Component } from "react";
import { Radar } from 'react-chartjs-2';

class AudioFeaturesChart extends Component {
    render() {
        const data = {
            labels: ['Danceability', 'Acousiticness', 'Energy', 'Instrumentalness', 'Loudness'],
            datasets: [
              {
                label: 'Mean Value from your music',
                backgroundColor: 'rgba(176,58,46,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [65, 59, 90, 81, 56]
              },
            ]
          };
        return (
            <div style={{display: "inline-block"}}>
                <Radar data={data} height={250} width={300}/>
            </div>
        );
    }
}

export default AudioFeaturesChart;