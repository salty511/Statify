import React, { Component } from "react";
import { Pie } from 'react-chartjs-2';

class GenreChart extends Component {
    render() {
        const data = {
            labels: [
                'Hip-Hop',
                'Jazz',
                'Reggae'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }]
        };

        return (
            <div style={{display: "inline-block"}}>
                <Pie data={data} height={250} width={300}/>
            </div>
        );
    }
}

export default GenreChart;