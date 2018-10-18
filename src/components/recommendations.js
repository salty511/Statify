import React, { Component } from "react";
import Album from "./albums";

class Recommendations extends Component {
    render(){
        return (
            <div className="row">
                <div className="col">
                    <Album />
                </div>
                <div className="col">
                    <Album />
                </div>
                <div className="col">
                    <Album />
                </div>
                <div className="col">
                    <Album />
                </div>
            </div>
        )
    }
}

export default Recommendations;