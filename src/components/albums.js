import React, { Component } from "react";

class Album extends Component {
    render(){
        const image = 
            "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180";
        return (
            <div className="card">
                <img className="card-img-top" src={image} alt="Card cap" /> 
                 <div className="card-body">
                     <h5 className="card-title">Album Name</h5>
                     <p className="card-text">
                        <ul style={{"text-align": "left", "list-style": "none"}}>
                            <li>Song 1</li>
                            <li>Song 2</li>
                            <li>Song 3</li>
                        </ul>
                    </p>
                </div>
    </div>
        );
    }
}

export default Album;