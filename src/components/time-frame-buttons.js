import React, { Component } from "react";

class TimeFrameButtons extends Component {
    render() {
       return(
        <div>
            <button className="btn btn-light">Short Term</button>
            <button className="btn btn-light">Medium Term</button>
            <button className="btn btn-light">Long Term</button>
        </div>
       );
    }
}

export default TimeFrameButtons;