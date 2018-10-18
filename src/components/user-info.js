import React, { Component } from "react";

class UserInfo extends Component {
  render() {
    const image =
      "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180";
    return (
    <div className="card">
      <img className="card-img-top" src={image} alt="Card cap" /> 
      <div className="card-body">
        <h5 className="card-title">UserName</h5>
        <p className="card-text">UserInfo</p>
      </div>
    </div>
    );
  }
}

export default UserInfo;
