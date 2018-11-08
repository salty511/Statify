import React, { Component } from "react";

class UserInfo extends Component {
  render() {
    return (
    <div className="card" style={{width: "80%"}}>
      <img className="card-img-top" src={this.props.userDetails.profileImage} alt="Card cap" /> 
      <div className="card-body">
        <h5 className="card-title">{this.props.userDetails.userName}</h5>
        <p className="card-text">UserInfo</p>
      </div>
    </div>
    );
  }
}

export default UserInfo;
