import React, { Component } from "react";
class History extends Component {
  state = {};
  render() {
    const props = this.props;
    console.log("This is from history component: ");
    console.log(props);
    return (
      <React.Fragment>
        <h1>{this.props.history}</h1>
      </React.Fragment>
    );
  }
}

export default History;
