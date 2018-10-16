import React, { Component } from "react";

class Album extends Component {
    render(){
        return (
            <div style={{display: "inline-block", width:"25%"}}>
                <img />
                <h3>Album Name</h3>
                <ul>
                    <li>Song 1</li>
                    <li>Song 2</li>
                    <li>Song 3</li>
                </ul>
            </div>
        );
    }
}

export default Album;