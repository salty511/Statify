import React, { Component } from "react";

class TimeFrameButtons extends Component {
    render() {
       return(
        <div class="btn-group">
            <button className="btn btn-secondary">Short Term</button>
            <button className="btn btn-secondary">Medium Term</button>
            <button className="btn btn-secondary">Long Term</button>
        </div>
       );
    }
}

export default TimeFrameButtons;