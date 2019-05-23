import React, { Component } from "react";

import CARD_1 from "./components/CARD_1";
import CARD_2 from "./components/CARD_2";
import CARD_3 from "./components/CARD_3";

class Data extends Component {
  state = {
    data: null
  };
  componentDidMount() {
    fetch(`http://localhost:3000/feeds/${this.props.location.id}`)
      .then(data => data.json())
      .then(data => this.setState({ data: data.data }))
      .catch(e => e);
  }
  render() {
    console.log("this.state.data.cardData", this.state.data);
    return (
      <div>
        {this.state.data &&
          this.state.data.length &&
          this.state.data.map(item => {
            console.log("item==>", item);
            if (item.type === "TYPE_1") {
              return (
                <CARD_1
                  src={item.cardData.image}
                  Domestic={item.cardData.subtext}
                  location={item.cardData.heading}
                />
              );
            } else if (item.type === "TYPE_2") {
              return (
                <CARD_2
                  src={item.cardData.bannerImage}
                  Heading={" Duty on imported apples can't be more than 50%"}
                  Brief={
                    "Government has said there is no scope for India to increase the import duty on apples without further negotiations under the WTO regime"
                  }
                  Details={"KNOW MORE"}
                />
              );
            } else if (item.type === "TYPE_3") {
              return (
                <CARD_3
                  src={item.cardData.user.profileImage}
                  collaboratedWith={item.cardData.user.collaboratedWith}
                  company={"Xelpmoc"}
                />
              );
            }
          })}
      </div>
    );
  }
}

export default Data;
