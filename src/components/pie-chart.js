import React, { Component } from "react";
import { Pie } from 'react-chartjs-2';

class GenreChart extends Component {
    calculateGenreTotals() {
        let genreTotals = {}
        // Loop over artists, then genres
        for(let artist of this.props.genreData) {
            for(let genre of artist.genres) {
                // if no entry already add one
                if(!genreTotals.hasOwnProperty(genre)) {
                    genreTotals[genre] = 1
                } else {
                    genreTotals[genre] += 1
                }
            }
        }
        console.log(genreTotals)
        return(genreTotals)
    }

    getTopFiveGenres(genreTotalsObject) {
        let genreTotalsArray = []
        // Transfer genres to individual objects in an array
        for(let [key, value] of Object.entries(genreTotalsObject)) {
            genreTotalsArray.push({name: key, value: value})
        }
        // Sort genre objects in array (descending order)
        genreTotalsArray.sort((a, b) => {
            return (b.value - a.value)
        })
        console.log(genreTotalsArray)
        return (genreTotalsArray.slice(0, 5))
    }

    render() {
        let genreTotalsData = this.calculateGenreTotals()
        let topFiveGenres = this.getTopFiveGenres(genreTotalsData)
        console.log(topFiveGenres)
        let genreLabels = []
        let genreValues = []
        for(let genre of topFiveGenres) {
            genreLabels.push(genre.name)
            genreValues.push(genre.value)
        }

        const data = {
            labels: genreLabels,
            datasets: [{
                data: genreValues,
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#39B838', '#A838B8'
                ],
                hoverBackgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56'
                ],
                borderColor: [
                    '#000205', '#000205', '#000205', '#000205', '#000205'
                ]
            }]
        };

        const options = {
            legend: {
                fontColor: "#666"
            }
        }

        return (
            <div style={{display: "inline-block"}}>
                <Pie data={data} height={250} width={300} options={{options}}/>
            </div>
        );
    }
}

export default GenreChart;