import React, { Component } from "react";

class TimeFrameButtons extends Component {
    render() {
       return(
        <div>
            <button className="btn btn-outline-info" style={{margin: "10px"}}>Short Term</button>
            <button className="btn btn-outline-info" style={{margin: "10px"}}>Medium Term</button>
            <button className="btn btn-outline-info" style={{margin: "10px"}}>Long Term</button>
        </div>
       );
    }
}

export default TimeFrameButtons;