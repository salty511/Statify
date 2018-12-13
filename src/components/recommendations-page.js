import React, { Component } from "react";

const nodes = [
    {
        "text": "python",
        "url": "http://www.wikiwand.com/en/Python_(programming_language)",
        "fx": -13.916222252976013,
        "fy": -659.1641376795345,
        "category": "wiki",
        "note": ""
    }
]

const connections = [
    {
        "source": "python",
        "target": "basics",
        "curve": {
          "x": -43.5535,
          "y": 299.545
        }
    }
]

class RecommendationsPage extends Component {
    render() {
        return(
            <div className="container" style={{paddingTop: "20px"}}>
                <h1>Recommendations</h1>
            </div>
        )
    }
}

export default RecommendationsPage