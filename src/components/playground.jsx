import React, { Component } from "react";
import "./playground.css";
class Playground extends Component {
  state = {
    initialData: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    users: [
      { id: 1, name: "X" },
      { id: 2, name: "0" },
    ],
    indexUserTurn: 0,
    movesCount: 0,
    historyKeeper: [],
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-4">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td onClick={() => this.move(0)}>
                    {this.state.initialData[0]}
                  </td>
                  <td onClick={() => this.move(1)}>
                    {this.state.initialData[1]}
                  </td>
                  <td onClick={() => this.move(2)}>
                    {this.state.initialData[2]}
                  </td>
                </tr>
                <tr>
                  <td onClick={() => this.move(3)}>
                    {this.state.initialData[3]}
                  </td>
                  <td onClick={() => this.move(4)}>
                    {this.state.initialData[4]}
                  </td>
                  <td onClick={() => this.move(5)}>
                    {this.state.initialData[5]}
                  </td>
                </tr>
                <tr>
                  <td onClick={() => this.move(6)}>
                    {this.state.initialData[6]}
                  </td>
                  <td onClick={() => this.move(7)}>
                    {this.state.initialData[7]}
                  </td>
                  <td onClick={() => this.move(8)}>
                    {this.state.initialData[8]}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }

  move(index) {
    console.log(this.state.users[this.state.indexUserTurn]);
    this.state.initialData[index] =
      this.state.users[this.state.indexUserTurn].name;
    const update = this.state.initialData;
    this.setState({
      initialData: update,
    });
    this.updateUserTurn();
  }

  updateUserTurn() {
    if (this.state.indexUserTurn === 0) {
      this.setState({
        indexUserTurn: 1,
      });
    }
    if (this.state.indexUserTurn === 1) {
      this.setState({
        indexUserTurn: 0,
      });
    }
  }
}

export default Playground;
