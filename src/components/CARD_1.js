import React from "react";
import "./CARD_1.css";

const CARD_1 = props => {
  return (
    <div className="all">
      <div className="image">
        <h5 className="content2">{props.Domestic}</h5>
        <img src={props.src} />

        <div className="content1">
          <i className="fa fa-map-marker" />
          {props.location}
        </div>
      </div>
    </div>
  );
};

export default CARD_1;
