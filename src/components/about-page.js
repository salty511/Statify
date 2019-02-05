import React, { Component } from "react"

class AboutPage extends Component {
    render() {
        return(
            <div className="container" style={{textAlign: "left"}}>
                <h3 style={{paddingTop: "20px"}}>About</h3>
                <p>This app pulls data about your music from the Spotify API. It was built in ReactJS</p>
                <p>Github: <a href="https://github.com/salty511/Statify">https://github.com/salty511/Statify</a></p>
                <h5>Main Page</h5>
                <p>The main page uses data from the top tracks/artists endpoints of the Spotify API.</p> 
                <p> 
                    It displays some profile information. A genre chart which displays the top 5 genres across
                    your top artists. An audio features chart showing the average values of each audio feature across your top tracks. 
                </p>
                <p>
                    It also displays your top 20 tracks with a 30 second preview feature on hovering over the album cover
                    (On mobile just tap the album cover for button to appear).
                    You can click the time frame buttons at the top of the page to switch
                    between short term (approximately last 4 weeks), medium term (approximately last 6 months), and long term 
                    (calculated from several years of data and including all new data as it becomes available)
                </p>
            </div>
        )
    }
}

export default AboutPage