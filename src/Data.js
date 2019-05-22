import React, { Component } from "react";

import CARD_1 from "./components/CARD_1";
import CARD_2 from "./components/CARD_2";
import CARD_3 from "./components/CARD_3";

class Data extends Component {
  render() {
    return (
      <div>
        <div>
          <CARD_1
            src={
              "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            }
            Domestic={"Domestic"}
            location={"Banerghatta Road,  Hulimavu, Bengaluru, Karnataka,"}
          />
          <CARD_2
            Heading={" Duty on imported apples can't be more than 50%"}
            Brief={
              "Government has said there is no scope for India to increase the import duty on apples without further negotiations under the WTO regime"
            }
            Details={"KNOW MORE"}
          />
          <CARD_3
            src={"https://avatars1.githubusercontent.com/u/21080254?s=460&v=4"}
            name={"SALMAN KHAN"}
            company={"Xelpmoc"}
          />
        </div>
      </div>
    );
  }
}

export default Data;
