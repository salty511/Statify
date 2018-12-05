import React, { Component } from "react";
import { Pie } from 'react-chartjs-2';
import stringSimilarity from 'string-similarity'

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
        return (genreTotalsArray.slice(0, 5))
    }

    filterGenres(topGenresArray) {
        console.log("running")
        let filteredGenres = []
        for(let y=0; y<topGenresArray.length; y++) {
            for(let x=0; x<topGenresArray.length; x++) {
                if(!(x === y)) {
                    let similarityValue = stringSimilarity.compareTwoStrings(topGenresArray[y].name, topGenresArray[x].name)
                    if(similarityValue < 0.5) {
                        let genreToPush = topGenresArray[y].name.length < topGenresArray[x].name.length ? 
                        topGenresArray[y] : 
                        topGenresArray[x]
                        filteredGenres.push({name: genreToPush.name, value: genreToPush.value})
                    }
                }
            }
        }
        return filteredGenres
    }

    render() {
        console.log("Genre Chart rendering")
        let genreTotalsData = this.calculateGenreTotals()
        let topFiveGenres = this.getTopFiveGenres(genreTotalsData)
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