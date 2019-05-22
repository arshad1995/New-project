import React, { Component } from "react";
import Card from "./components/Card";

class Feeds extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/feeds")
      .then(data => data.json())
      .then(data => this.setState({ data: data.data }))
      .catch(e => e);
  }
  render() {
    console.log(this.state.data);
    return (
      <div>
        {this.state.data.map(a => (
          <Card feedCreator={a.feedCreator} feedName={a.name} />
        ))}
      </div>
    );
  }
}

export default Feeds;
