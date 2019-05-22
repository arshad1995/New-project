import React from "react";
import "./CARD_2.css";

const CARD_2 = props => {
  return (
    <div className="container">
      <img
        src={
          "https://smedia2.intoday.in/btmt/images/stories/apple_660_071816125132_080316050918.jpg"
        }
      />

      <div className="content">
        <p className="heading">{props.Heading}</p>
        <p className="brief">{props.Brief}</p>
        <p className="detail">{props.Details}</p>
      </div>
    </div>
  );
};

export default CARD_2;
