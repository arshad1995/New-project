import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Data from "./Data";
import Feeds from "./Feeds";
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" component={Feeds} exact={true} />
          <Route path="/feeds" component={Data} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
