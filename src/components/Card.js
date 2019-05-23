import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  state = {
    show: ""
  };

  render() {
    console.log("this.props", this.props);
    return (
      <div>
        <div className="names">
          <div className="feed">{this.props.feedName}</div>
          <div className="creator">{this.props.feedCreator}</div>
        </div>
      </div>
    );
  }
}

export default Card;
