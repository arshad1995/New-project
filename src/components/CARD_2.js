import React from "react";
import "./CARD_2.css";

const CARD_2 = props => {
  return (
    <div className="container">
      <img src={props.src} />

      <div className="content">
        <p className="heading">{props.Heading}</p>
        <p className="brief">{props.Brief}</p>
        <p className="detail">{props.Details}</p>
      </div>
    </div>
  );
};

export default CARD_2;
