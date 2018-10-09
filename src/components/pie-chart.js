import React, { Component } from "react";
import { Pie } from 'react-chartjs-2';

class GenreChart extends Component {
    render() {
        const data = {
            labels: [
                'Rock',
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
            <div>
                <Pie data={data} />
            </div>
        );
    }
}

export default GenreChart;